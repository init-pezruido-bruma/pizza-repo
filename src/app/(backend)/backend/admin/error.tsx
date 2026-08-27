"use client";

export default function AdminError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-[1.75rem] border-2 border-brand-red/30 bg-white p-6 shadow-sm">
      <h1 className="font-display text-2xl font-black text-brand-red">Algo salió mal</h1>
      <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
        La página no se rompió del todo. Puedes reintentar o volver al panel.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center rounded-full bg-brand-yellow px-5 text-sm font-extrabold uppercase tracking-wide text-brand-ink"
        >
          Reintentar
        </button>
        <a
          href="/backend/admin"
          className="inline-flex min-h-11 items-center rounded-full border border-black/15 px-5 text-sm font-extrabold uppercase tracking-wide"
        >
          Ir al inicio
        </a>
      </div>
    </div>
  );
}
