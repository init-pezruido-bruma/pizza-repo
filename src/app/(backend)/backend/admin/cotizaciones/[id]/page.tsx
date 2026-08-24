import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

type Props = { params: Promise<{ id: string }> };

export default async function CotizacionDetailPage({ params }: Props) {
  const { id } = await params;
  let quote = await prisma.quote.findUnique({ where: { id } });
  if (!quote) notFound();

  if (quote.status === "NEW") {
    quote = await prisma.quote.update({
      where: { id: quote.id },
      data: { status: "READ" },
    });
  }

  const rows = [
    ["Nombre", quote.nombre],
    ["Teléfono", quote.telefono],
    ["Correo", quote.email || "—"],
    ["Tipo", quote.tipo || "—"],
    ["Fecha evento", quote.fecha || "—"],
    ["Personas", quote.personas?.toString() || "—"],
    ["Comentarios", quote.comentarios || "—"],
    ["Recibido", quote.createdAt.toLocaleString("es-MX")],
    ["Mail enviado", quote.emailSentAt?.toLocaleString("es-MX") || "No"],
    ["Mail nota", quote.emailError || "—"],
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-black">Cotización</h1>
        <Link
          href="/backend/admin/cotizaciones"
          className="text-sm font-extrabold uppercase tracking-wide text-brand-blue hover:underline"
        >
          Volver al listado
        </Link>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <dl className="grid gap-4 sm:grid-cols-2">
          {rows.map(([label, value]) => (
            <div key={label} className={label === "Comentarios" ? "sm:col-span-2" : undefined}>
              <dt className="text-xs font-extrabold uppercase tracking-wide text-brand-ink/50">
                {label}
              </dt>
              <dd className="mt-1 whitespace-pre-wrap text-sm font-semibold text-brand-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
