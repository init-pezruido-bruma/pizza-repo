import Link from "next/link";
import { auth } from "@/auth";
import { logoutAction } from "@/lib/admin/actions";

const nav = [
  { href: "/backend/admin", label: "Inicio" },
  { href: "/backend/admin/cotizaciones", label: "Cotizaciones" },
  { href: "/backend/admin/promociones", label: "Promociones" },
  { href: "/backend/admin/correo", label: "Correo" },
  { href: "/backend/admin/usuarios", label: "Usuarios" },
] as const;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-full">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div>
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-brand-red">
              Admin
            </p>
            <p className="font-display text-xl font-black text-brand-blue">Incredible Pizza</p>
          </div>
          <nav className="flex flex-wrap items-center gap-2 sm:gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-ink/75 transition hover:bg-brand-blue/10 hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/backend"
              className="rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-ink/55 hover:text-brand-ink"
            >
              Hub
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-ink transition hover:bg-black/5"
              >
                Salir
              </button>
            </form>
          </nav>
        </div>
        {session?.user?.email ? (
          <div className="border-t border-black/5 bg-[#f8f9fc] px-5 py-2 text-xs font-semibold text-brand-ink/60 sm:px-8">
            Sesión: {session.user.email}
          </div>
        ) : null}
      </header>
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">{children}</div>
    </div>
  );
}
