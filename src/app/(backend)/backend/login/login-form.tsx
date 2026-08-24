"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/backend/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError("Correo o contraseña incorrectos.");
        return;
      }
      // Full navigation so the session cookie is included on the next request
      window.location.assign(redirect);
    } catch {
      setError("No se pudo iniciar sesión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-5 py-16">
      <div className="w-full max-w-md rounded-[1.75rem] bg-white p-7 shadow-[0_16px_40px_rgba(26,43,86,0.12)] sm:p-9">
        <div className="text-center">
          <h1 className="font-display text-[clamp(2rem,5vw,2.75rem)] font-black leading-none text-brand-blue">
            Bienvenido de nuevo
          </h1>
          <p className="mt-2 text-sm text-brand-ink/70">
            Accede al panel de administración.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-7 space-y-4">
          <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
            Correo
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-brand-ink outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
            />
          </label>

          <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
            Contraseña
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 pr-12 text-sm text-brand-ink outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-ink/55 hover:text-brand-ink"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
          </label>

          {error ? (
            <p className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700" role="alert">
              {error}
            </p>
          ) : null}

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Entrando…" : "Entrar"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-brand-ink/60">
          <Link href="/backend" className="font-semibold text-brand-blue hover:underline">
            Volver al hub
          </Link>
        </p>
      </div>
    </div>
  );
}
