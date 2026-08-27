"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { logoutAction } from "@/lib/admin/actions";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/backend/admin", label: "Inicio" },
  { href: "/backend/admin/cotizaciones", label: "Cotizaciones" },
  { href: "/backend/admin/promociones", label: "Promociones" },
  { href: "/backend/admin/correo", label: "Correo" },
  { href: "/backend/admin/usuarios", label: "Usuarios" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/backend/admin") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminNav({ email }: { email: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-brand-red">
            Admin
          </p>
          <p className="truncate font-display text-lg font-black text-brand-blue sm:text-xl">
            Incredible Pizza
          </p>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Admin">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-3 text-xs font-extrabold uppercase tracking-wide transition",
                isActive(pathname, item.href)
                  ? "bg-brand-yellow text-brand-ink"
                  : "text-brand-ink/75 hover:bg-brand-blue/10 hover:text-brand-blue",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/backend"
            className="inline-flex min-h-11 items-center rounded-full px-3 text-xs font-extrabold uppercase tracking-wide text-brand-ink/55 hover:text-brand-ink"
          >
            Hub
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center rounded-full border border-black/15 px-3 text-xs font-extrabold uppercase tracking-wide text-brand-ink hover:bg-black/5"
            >
              Salir
            </button>
          </form>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-black/15 lg:hidden"
          aria-expanded={open}
          aria-controls="admin-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        </button>
      </div>

      {email ? (
        <div className="truncate border-t border-black/5 bg-[#f8f9fc] px-4 py-2 text-xs font-semibold text-brand-ink/60 sm:px-8">
          Sesión: {email}
        </div>
      ) : null}

      {open ? (
        <div
          id="admin-mobile-nav"
          className="fixed inset-0 z-50 bg-[#1a2b56]/55 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            className="absolute inset-x-0 top-0 rounded-b-3xl bg-white px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] shadow-xl"
            aria-label="Admin"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="font-display text-lg font-black text-brand-blue">Menú</p>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-full border border-black/15"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" aria-hidden />
                <span className="sr-only">Cerrar menú</span>
              </button>
            </div>
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-12 items-center rounded-2xl px-4 text-sm font-extrabold uppercase tracking-wide",
                      isActive(pathname, item.href)
                        ? "bg-brand-yellow text-brand-ink"
                        : "text-brand-ink hover:bg-black/5",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/backend"
                  className="flex min-h-12 items-center rounded-2xl px-4 text-sm font-extrabold uppercase tracking-wide text-brand-ink/70"
                >
                  Hub
                </Link>
              </li>
              <li>
                <form action={logoutAction}>
                  <button
                    type="submit"
                    className="flex min-h-12 w-full items-center rounded-2xl px-4 text-left text-sm font-extrabold uppercase tracking-wide text-brand-red"
                  >
                    Salir
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
