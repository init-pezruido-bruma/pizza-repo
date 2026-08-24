import Image from "next/image";
import { prisma } from "@/lib/db";
import {
  archivePromotionAction,
  deletePromotionAction,
  publishPromotionAction,
  uploadPromotionAction,
} from "@/lib/admin/promo-actions";
import { Button } from "@/components/ui/button";

export default async function AdminPromocionesPage() {
  const promos = await prisma.promotion.findMany({
    orderBy: [{ status: "asc" }, { sortOrder: "asc" }, { createdAt: "desc" }],
  });

  const published = promos.filter((p) => p.status === "PUBLISHED");
  const drafts = promos.filter((p) => p.status === "DRAFT");
  const archived = promos.filter((p) => p.status === "ARCHIVED");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-black">Promociones</h1>
        <p className="mt-1 text-sm text-brand-ink/70">
          Sube artes, publícalas en el sitio y conserva historial al archivarlas.
        </p>
      </div>

      <form
        action={uploadPromotionAction}
        encType="multipart/form-data"
        className="max-w-xl space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
      >
        <h2 className="font-display text-xl font-black text-brand-blue">Subir promoción</h2>
        <p className="text-sm leading-relaxed text-brand-ink/65">
          Ideal: <span className="font-semibold text-brand-ink">1080 × 1350 px</span> (proporción{" "}
          <span className="font-semibold text-brand-ink">4:5</span>, vertical). También sirve{" "}
          <span className="font-semibold text-brand-ink">1200 × 1500</span>. JPG o PNG, máx. 8 MB.
          Evita texto muy pegado a los bordes (el carrusel recorta un poco).
        </p>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Título (opcional)
          <input
            name="title"
            className="rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Imagen *
          <input
            name="image"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            required
            className="text-sm"
          />
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold">
          <input type="checkbox" name="publishNow" className="size-4" defaultChecked />
          Publicar ahora en el sitio
        </label>
        <Button type="submit">Subir</Button>
      </form>

      <PromoSection title="Publicadas" items={published} mode="published" />
      <PromoSection title="Borradores" items={drafts} mode="draft" />
      <PromoSection title="Historial (archivadas)" items={archived} mode="archived" />
    </div>
  );
}

function PromoSection({
  title,
  items,
  mode,
}: {
  title: string;
  items: {
    id: string;
    title: string | null;
    imageUrl: string;
    status: string;
    publishedAt: Date | null;
    archivedAt: Date | null;
    createdAt: Date;
  }[];
  mode: "published" | "draft" | "archived";
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl font-black text-brand-ink">
        {title}{" "}
        <span className="text-base font-semibold text-brand-ink/45">({items.length})</span>
      </h2>
      {items.length === 0 ? (
        <p className="text-sm text-brand-ink/55">Nada aquí todavía.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-black/5">
                <Image
                  src={item.imageUrl}
                  alt={item.title || "Promoción"}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-4">
                <div>
                  <p className="font-semibold text-brand-ink">{item.title || "Sin título"}</p>
                  <p className="mt-1 text-xs text-brand-ink/50">
                    {mode === "published" && item.publishedAt
                      ? `Publicada ${item.publishedAt.toLocaleString("es-MX")}`
                      : mode === "archived" && item.archivedAt
                        ? `Archivada ${item.archivedAt.toLocaleString("es-MX")}`
                        : `Creada ${item.createdAt.toLocaleString("es-MX")}`}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mode !== "published" ? (
                    <form action={publishPromotionAction}>
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="rounded-full bg-brand-yellow px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-black"
                      >
                        Publicar
                      </button>
                    </form>
                  ) : (
                    <form action={archivePromotionAction}>
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide"
                      >
                        Bajar / archivar
                      </button>
                    </form>
                  )}
                  {mode === "archived" ? (
                    <form action={deletePromotionAction}>
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-red"
                      >
                        Eliminar
                      </button>
                    </form>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
