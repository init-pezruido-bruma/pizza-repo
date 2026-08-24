import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Backend",
  robots: { index: false, follow: false },
};

export default function BackendHubPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-gradient-to-b from-[#1a2b56] to-[#2b5899] px-5 py-16 text-white">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
            Incredible Pizza
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,8vw,3.75rem)] font-black leading-[0.95]">
            Backend
          </h1>
          <p className="mt-3 text-base text-white/85">
            ¿A dónde quieres ir?
          </p>
        </div>

        <div className="grid gap-3">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-black bg-white px-6 text-sm font-extrabold uppercase tracking-wide text-black transition hover:-translate-y-0.5"
          >
            Volver al sitio
          </Link>
          <Link
            href="/backend/admin"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-black bg-brand-yellow px-6 text-sm font-extrabold uppercase tracking-wide text-black transition hover:-translate-y-0.5"
          >
            Ir al admin
          </Link>
        </div>
      </div>
    </div>
  );
}
