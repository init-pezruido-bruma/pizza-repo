import { Resend } from "resend";
import { prisma } from "@/lib/db";
import { siteConfig } from "@/lib/site";
import type { Quote } from "@prisma/client";

export type MailStatus =
  | { status: "skipped"; reason: string }
  | { status: "sent"; id?: string; warning?: string }
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
      recipients: JSON.stringify([siteConfig.email]),
      enabled: true,
    },
  });
}

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

function quoteLines(quote: Quote) {
  return [
    `Nombre: ${quote.nombre}`,
    `Teléfono: ${quote.telefono}`,
    `Correo: ${quote.email || "(no proporcionado)"}`,
    `Tipo: ${quote.tipo || "—"}`,
    `Fecha: ${quote.fecha || "—"}`,
    `Personas: ${quote.personas ?? "—"}`,
    `Comentarios: ${quote.comentarios || "—"}`,
  ];
}

function adminQuotesUrl() {
  return `${siteConfig.url}/backend/admin/cotizaciones`;
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

  const recipients = Array.from(
    new Set([...parseRecipients(settings.recipients), siteConfig.email]),
  );
  const resend = new Resend(apiKey);
  const from = `${settings.fromName} <${settings.fromEmail}>`;
  const listUrl = adminQuotesUrl();
  const detailUrl = `${listUrl}/${quote.id}`;

  try {
    const staff = await resend.emails.send({
      from,
      to: recipients,
      replyTo: quote.email || undefined,
      subject: `Nueva cotización — ${quote.nombre}`,
      text: [
        "Llegó una nueva cotización.",
        "",
        ...quoteLines(quote),
        "",
        `Ver esta cotización: ${detailUrl}`,
        `Listado: ${listUrl}`,
      ].join("\n"),
    });

    if (staff.error) {
      return { status: "error", message: staff.error.message };
    }

    if (quote.email) {
      const guest = await resend.emails.send({
        from,
        to: quote.email,
        replyTo: siteConfig.email,
        subject: "Recibimos tu solicitud de cotización — Incredible Pizza",
        text: [
          `Hola ${quote.nombre},`,
          "",
          "Recibimos tu solicitud de cotización. El equipo de Incredible Pizza la revisará y te contactará.",
          "",
          "Estos son los datos que enviaste:",
          ...quoteLines(quote),
          "",
          "Si necesitas corregir algo, responde a este correo.",
          "",
          "Incredible Pizza Monterrey",
          siteConfig.phone,
        ].join("\n"),
      });

      if (guest.error) {
        return {
          status: "sent",
          id: staff.data?.id,
          warning: `Aviso interno enviado. No se pudo confirmar al cliente: ${guest.error.message}`,
        };
      }
    }

    return { status: "sent", id: staff.data?.id };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown mail error",
    };
  }
}
