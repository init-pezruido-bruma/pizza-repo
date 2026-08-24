import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { sendQuoteNotification } from "@/lib/mail/send";

const quoteSchema = z.object({
  nombre: z.string().trim().min(1).max(120),
  telefono: z.string().trim().min(7).max(40),
  email: z.string().trim().email().optional().or(z.literal("")),
  tipo: z.string().trim().max(80).optional(),
  fecha: z.string().trim().max(40).optional(),
  personas: z.coerce.number().int().positive().max(5000).optional().nullable(),
  comentarios: z.string().trim().max(2000).optional(),
});

const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count += 1;
  return true;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Intenta más tarde." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Datos incompletos o inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const quote = await prisma.quote.create({
    data: {
      nombre: data.nombre,
      telefono: data.telefono,
      email: data.email || null,
      tipo: data.tipo || null,
      fecha: data.fecha || null,
      personas: data.personas ?? null,
      comentarios: data.comentarios || null,
    },
  });

  const mail = await sendQuoteNotification(quote);

  if (mail.status === "sent") {
    await prisma.quote.update({
      where: { id: quote.id },
      data: { emailSentAt: new Date(), emailError: null },
    });
  } else if (mail.status === "error") {
    await prisma.quote.update({
      where: { id: quote.id },
      data: { emailError: mail.message },
    });
  } else {
    await prisma.quote.update({
      where: { id: quote.id },
      data: { emailError: mail.reason },
    });
  }

  return NextResponse.json({
    ok: true,
    id: quote.id,
    email: mail.status,
  });
}
