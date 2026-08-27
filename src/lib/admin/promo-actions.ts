"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { deletePromoImage, savePromoImage } from "@/lib/storage";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");
  return session;
}

function revalidatePromoPages() {
  revalidatePath("/backend/admin/promociones");
  revalidatePath("/promociones");
  revalidatePath("/eventos");
}

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function uploadPromotionAction(formData: FormData) {
  await requireAdmin();

  const file = formData.get("image");
  const title = String(formData.get("title") || "").trim() || null;
  const publishNow = formData.get("publishNow") === "on";

  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Selecciona una imagen");
  }
  if (!ALLOWED.has(file.type)) {
    throw new Error("Formato no permitido (usa JPG, PNG o WebP)");
  }
  if (file.size > 8 * 1024 * 1024) {
    throw new Error("La imagen supera 8 MB");
  }

  const ext =
    file.type === "image/png"
      ? "png"
      : file.type === "image/webp"
        ? "webp"
        : file.type === "image/gif"
          ? "gif"
          : "jpg";

  const imageUrl = await savePromoImage(file, ext);
  const maxOrder = await prisma.promotion.aggregate({ _max: { sortOrder: true } });
  const sortOrder = (maxOrder._max.sortOrder ?? 0) + 1;

  await prisma.promotion.create({
    data: {
      title,
      imageUrl,
      sortOrder,
      status: publishNow ? "PUBLISHED" : "DRAFT",
      publishedAt: publishNow ? new Date() : null,
    },
  });

  revalidatePromoPages();
}

export async function publishPromotionAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) throw new Error("ID requerido");

  await prisma.promotion.update({
    where: { id },
    data: {
      status: "PUBLISHED",
      publishedAt: new Date(),
      archivedAt: null,
    },
  });
  revalidatePromoPages();
}

export async function archivePromotionAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) throw new Error("ID requerido");

  await prisma.promotion.update({
    where: { id },
    data: {
      status: "ARCHIVED",
      archivedAt: new Date(),
    },
  });
  revalidatePromoPages();
}

export async function deletePromotionAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) throw new Error("ID requerido");

  const promo = await prisma.promotion.findUnique({ where: { id } });
  if (!promo) throw new Error("Promoción no encontrada");

  await prisma.promotion.delete({ where: { id } });
  await deletePromoImage(promo.imageUrl);
  revalidatePromoPages();
}
