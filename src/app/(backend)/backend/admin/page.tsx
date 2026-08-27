import Link from "next/link";
import { prisma } from "@/lib/db";
import { isResendConfigured } from "@/lib/mail/send";

export default async function AdminHomePage() {
  const [quoteCount, newCount, publishedPromos] = await Promise.all([
    prisma.quote.count(),
    prisma.quote.count({ where: { status: "NEW" } }),
    prisma.promotion.count({ where: { status: "PUBLISHED" } }),
  ]);
  const mailReady = isResendConfigured();

  const cards = [
    {
      href: "/backend/admin/cotizaciones",
      title: "Cotizaciones",
      body: `${newCount} nuevas · ${quoteCount} total`,
    },
    {
      href: "/backend/admin/promociones",
      title: "Promociones",
      body: `${publishedPromos} publicadas en el sitio`,
    },
    {
      href: "/backend/admin/correo",
      title: "Correo",
      body: mailReady
        ? "Resend conectado (API key presente)"
        : "Falta RESEND_API_KEY — cotizaciones se guardan igual",
    },
    {
      href: "/backend/admin/usuarios",
      title: "Usuarios",
      body: "Administrar accesos al panel",
    },
  ] as const;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[clamp(1.85rem,6vw,2.75rem)] font-black text-brand-ink">
          Panel
        </h1>
        <p className="mt-1 text-sm text-brand-ink/70">
          Gestiona cotizaciones, promociones, correo y administradores.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="flex min-h-24 flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="font-display text-xl font-black text-brand-blue">{card.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{card.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
