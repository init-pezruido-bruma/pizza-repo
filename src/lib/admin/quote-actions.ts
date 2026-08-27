"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { asActionResult, fail, type ActionResult } from "@/lib/admin/action-result";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Sesión expirada. Vuelve a entrar.");
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

export async function updateMailSettingsAction(formData: FormData): Promise<ActionResult> {
  return asActionResult(async () => {
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
  });
}

export async function createAdminUserAction(formData: FormData): Promise<ActionResult> {
  try {
    await requireAdmin();
    const { hash } = await import("bcryptjs");
    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();
    const name = String(formData.get("name") || "").trim() || null;
    const password = String(formData.get("password") || "");

    if (!email || password.length < 8) {
      return fail("Email y contraseña (mín. 8) son requeridos.");
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
    return { ok: true };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return fail("Ese correo ya está registrado.");
    }
    return fail(e instanceof Error ? e.message : "No se pudo crear el usuario.");
  }
}

export async function deleteAdminUserAction(formData: FormData): Promise<ActionResult> {
  return asActionResult(async () => {
    const session = await requireAdmin();
    const id = String(formData.get("id") || "");
    if (!id || id === session.user.id) {
      throw new Error("No puedes eliminar tu propio usuario.");
    }
    await prisma.user.delete({ where: { id } });
    revalidatePath("/backend/admin/usuarios");
  });
}
