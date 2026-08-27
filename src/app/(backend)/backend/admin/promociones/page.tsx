import Image from "next/image";
import { prisma } from "@/lib/db";
import {
  archivePromotionAction,
  deletePromotionAction,
  publishPromotionAction,
} from "@/lib/admin/promo-actions";
import { ActionForm } from "@/components/admin/action-form";
import { PromoUploadForm } from "@/components/admin/promo-upload-form";

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
        <h1 className="font-display text-[clamp(1.85rem,6vw,2.75rem)] font-black">Promociones</h1>
        <p className="mt-1 text-sm text-brand-ink/70">
          Sube artes, publícalas en el sitio y conserva historial al archivarlas.
        </p>
      </div>

      <PromoUploadForm />

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
              <div className="relative aspect-[4/5] bg-black/5 sm:aspect-[4/3]">
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
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  {mode !== "published" ? (
                    <ActionForm action={publishPromotionAction} success="Publicada en el sitio.">
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand-yellow px-4 text-xs font-extrabold uppercase tracking-wide text-black sm:w-auto"
                      >
                        Publicar
                      </button>
                    </ActionForm>
                  ) : (
                    <ActionForm action={archivePromotionAction} success="Archivada.">
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-black/15 px-4 text-xs font-extrabold uppercase tracking-wide sm:w-auto"
                      >
                        Bajar / archivar
                      </button>
                    </ActionForm>
                  )}
                  {mode === "archived" ? (
                    <ActionForm action={deletePromotionAction} success="Eliminada.">
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 text-xs font-extrabold uppercase tracking-wide text-brand-red sm:w-auto"
                      >
                        Eliminar
                      </button>
                    </ActionForm>
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
