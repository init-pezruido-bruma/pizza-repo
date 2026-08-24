"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-brand-ink outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30";

export function EventQuoteForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const personasRaw = String(data.get("personas") || "").trim();
    const payload = {
      nombre: String(data.get("nombre") || "").trim(),
      email: String(data.get("email") || "").trim(),
      telefono: String(data.get("telefono") || "").trim(),
      tipo: String(data.get("tipo") || "").trim(),
      fecha: String(data.get("fecha") || "").trim(),
      personas: personasRaw ? Number(personasRaw) : null,
      comentarios: String(data.get("comentarios") || "").trim(),
    };

    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "No se pudo enviar. Intenta de nuevo.");
        return;
      }
      setSent(true);
      form.reset();
    } catch {
      setError("Error de red. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="rounded-[1.75rem] bg-white p-6 shadow-2xl sm:p-8"
      onSubmit={onSubmit}
    >
      <h3 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-black leading-none text-brand-blue">
        Pide tu cotización
      </h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Nombre *
          <input required name="nombre" className={fieldClass} autoComplete="name" />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Correo
          <input type="email" name="email" className={fieldClass} autoComplete="email" />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Teléfono *
          <input required type="tel" name="telefono" className={fieldClass} autoComplete="tel" />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Tipo de evento
          <select name="tipo" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Selecciona
            </option>
            <option>Social</option>
            <option>Escolar</option>
            <option>Play Date</option>
            <option>Fiesta</option>
            <option>Empresa</option>
          </select>
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Fecha
          <input type="date" name="fecha" className={fieldClass} />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Personas
          <input type="number" min={1} name="personas" className={fieldClass} />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70 sm:col-span-2">
          Comentarios
          <textarea name="comentarios" rows={3} className={cn(fieldClass, "resize-y")} />
        </label>
      </div>
      <Button type="submit" className="mt-5 w-full" size="lg" disabled={loading}>
        {loading ? "Enviando…" : "Enviar"}
      </Button>
      {error ? (
        <p className="mt-3 text-center text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="mt-3 text-center text-sm font-semibold text-emerald-700" role="status">
          ¡Gracias! Pronto te contactamos con tu cotización.
        </p>
      ) : null}
    </form>
  );
}
