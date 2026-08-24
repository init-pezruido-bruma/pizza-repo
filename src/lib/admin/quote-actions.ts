"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function markQuoteRead(id: string) {
  await requireAdmin();
  await prisma.quote.update({
    where: { id },
    data: { status: "READ" },
  });
  revalidatePath("/backend/admin/cotizaciones");
  revalidatePath(`/backend/admin/cotizaciones/${id}`);
}

export async function updateMailSettingsAction(formData: FormData) {
  await requireAdmin();
  const fromEmail = String(formData.get("fromEmail") || "").trim();
  const fromName = String(formData.get("fromName") || "").trim();
  const recipientsRaw = String(formData.get("recipients") || "").trim();
  const enabled = formData.get("enabled") === "on";

  const recipients = recipientsRaw
    .split(/[,;\n]/)
    .map((e) => e.trim())
    .filter(Boolean);

  await prisma.mailSettings.upsert({
    where: { id: "default" },
    update: {
      fromEmail,
      fromName,
      recipients: JSON.stringify(recipients),
      enabled,
    },
    create: {
      id: "default",
      fromEmail,
      fromName,
      recipients: JSON.stringify(recipients),
      enabled,
    },
  });

  revalidatePath("/backend/admin/correo");
}

export async function createAdminUserAction(formData: FormData) {
  await requireAdmin();
  const { hash } = await import("bcryptjs");
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();
  const name = String(formData.get("name") || "").trim() || null;
  const password = String(formData.get("password") || "");

  if (!email || password.length < 8) {
    throw new Error("Email y contraseña (mín. 8) son requeridos");
  }

  await prisma.user.create({
    data: {
      email,
      name,
      passwordHash: await hash(password, 12),
      role: "ADMIN",
    },
  });

  revalidatePath("/backend/admin/usuarios");
}

export async function deleteAdminUserAction(formData: FormData) {
  const session = await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id || id === session.user.id) {
    throw new Error("No puedes eliminar tu propio usuario");
  }
  await prisma.user.delete({ where: { id } });
  revalidatePath("/backend/admin/usuarios");
}
