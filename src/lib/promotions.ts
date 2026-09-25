import { prisma } from "@/lib/db";

export const FALLBACK_PROMOS = [
  {
    src: "/images/promociones/promo-fiestas-septiembre-v2.jpg",
    alt: "Promo fiestas Septiembre — 20% de descuento",
  },
  {
    src: "/images/promociones/visitas-escolares-v2.jpg",
    alt: "Visitas escolares — beneficio especial",
  },
  {
    src: "/images/promociones/rally-corporativo-v2.jpg",
    alt: "Rally Corporativo desde $699 por persona",
  },
  {
    src: "/images/promociones/buffet-2x1-v2.jpg",
    alt: "Buffet 2x1 — promoción de temporada",
  },
  {
    src: "/images/promociones/fiesta-mexicana-v2.jpg",
    alt: "Fiesta Mexicana Riley — precio especial de septiembre",
  },
] as const;

export type PromoCarouselItem = { src: string; alt: string };

export async function getPublishedPromoItems(): Promise<PromoCarouselItem[]> {
  if (!process.env.DATABASE_URL) {
    return [...FALLBACK_PROMOS];
  }

  try {
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
  } catch {
    return [...FALLBACK_PROMOS];
  }
}
