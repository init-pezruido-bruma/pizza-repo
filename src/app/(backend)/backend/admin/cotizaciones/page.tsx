import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function CotizacionesPage() {
  const quotes = await prisma.quote.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-black">Cotizaciones</h1>
        <p className="mt-1 text-sm text-brand-ink/70">Solicitudes del formulario de eventos.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-[#f8f9fc] text-xs font-extrabold uppercase tracking-wide text-brand-ink/55">
            <tr>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Teléfono</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Mail</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {quotes.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-brand-ink/55">
                  Aún no hay cotizaciones.
                </td>
              </tr>
            ) : (
              quotes.map((q) => (
                <tr key={q.id} className="border-t border-black/5">
                  <td className="px-4 py-3 whitespace-nowrap">
                    {q.createdAt.toLocaleString("es-MX")}
                  </td>
                  <td className="px-4 py-3 font-semibold">{q.nombre}</td>
                  <td className="px-4 py-3">{q.telefono}</td>
                  <td className="px-4 py-3">{q.tipo || "—"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        q.status === "NEW"
                          ? "rounded-full bg-brand-yellow/30 px-2 py-0.5 text-xs font-bold"
                          : "rounded-full bg-black/5 px-2 py-0.5 text-xs font-bold"
                      }
                    >
                      {q.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs">
                    {q.emailSentAt
                      ? "Enviado"
                      : q.emailError
                        ? "Pendiente/error"
                        : "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/backend/admin/cotizaciones/${q.id}`}
                      className="font-extrabold uppercase tracking-wide text-brand-blue hover:underline"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
