import { Resend } from "resend";
import { prisma } from "@/lib/db";
import type { Quote } from "@prisma/client";

export type MailStatus =
  | { status: "skipped"; reason: string }
  | { status: "sent"; id?: string }
  | { status: "error"; message: string };

function parseRecipients(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.map(String).map((e) => e.trim()).filter(Boolean);
    }
  } catch {
    /* fall through */
  }
  return raw
    .split(/[,;\n]/)
    .map((e) => e.trim())
    .filter(Boolean);
}

export async function getMailSettings() {
  return prisma.mailSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      fromEmail: process.env.MAIL_FROM?.trim() || "noreply@incrediblepizza.mx",
      fromName: "Incredible Pizza",
      recipients: JSON.stringify([
        "f.castillo@hungrypartners.com",
        "natalia@hungrypartners.com",
        "myafdelaf@incrediblepizza.mx",
      ]),
      enabled: true,
    },
  });
}

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

export async function sendQuoteNotification(quote: Quote): Promise<MailStatus> {
  const settings = await getMailSettings();

  if (!settings.enabled) {
    return { status: "skipped", reason: "Mail disabled in admin settings" };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { status: "skipped", reason: "RESEND_API_KEY not set" };
  }

  const recipients = parseRecipients(settings.recipients);
  if (recipients.length === 0) {
    return { status: "skipped", reason: "No recipients configured" };
  }

  const resend = new Resend(apiKey);
  const lines = [
    `Nombre: ${quote.nombre}`,
    `Teléfono: ${quote.telefono}`,
    `Correo: ${quote.email || "(no proporcionado)"}`,
    `Tipo: ${quote.tipo || "—"}`,
    `Fecha: ${quote.fecha || "—"}`,
    `Personas: ${quote.personas ?? "—"}`,
    `Comentarios: ${quote.comentarios || "—"}`,
    "",
    `ID: ${quote.id}`,
    `Recibido: ${quote.createdAt.toISOString()}`,
  ];

  try {
    const result = await resend.emails.send({
      from: `${settings.fromName} <${settings.fromEmail}>`,
      to: recipients,
      subject: `Cotización Incredible Pizza — ${quote.nombre}`,
      text: lines.join("\n"),
    });

    if (result.error) {
      return { status: "error", message: result.error.message };
    }

    return { status: "sent", id: result.data?.id };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown mail error",
    };
  }
}
