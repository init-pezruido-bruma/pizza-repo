import { prisma } from "@/lib/db";

export const FALLBACK_PROMOS = [
  {
    src: "/images/eventos/promo-grupos.jpg",
    alt: "Promoción reserva tu evento",
  },
  {
    src: "/images/eventos/promo-escolares.jpg",
    alt: "Promoción paquetes escolares",
  },
  {
    src: "/images/eventos/promo-recarga.jpg",
    alt: "Promoción recarga y gana",
  },
] as const;

export type PromoCarouselItem = { src: string; alt: string };

export async function getPublishedPromoItems(): Promise<PromoCarouselItem[]> {
  const rows = await prisma.promotion.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ sortOrder: "asc" }, { publishedAt: "desc" }, { createdAt: "desc" }],
  });

  if (rows.length === 0) {
    return [...FALLBACK_PROMOS];
  }

  return rows.map((p) => ({
    src: p.imageUrl,
    alt: p.title?.trim() || "Promoción Incredible Pizza",
  }));
}
