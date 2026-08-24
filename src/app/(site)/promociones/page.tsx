import Link from "next/link";
import type { Metadata } from "next";
import { GalleryCarousel } from "@/components/home/gallery-carousel";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getPublishedPromoItems } from "@/lib/promotions";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Promociones del mes en Incredible Pizza Monterrey.",
  alternates: { canonical: "/promociones" },
};

export const dynamic = "force-dynamic";

export default async function PromocionesPage() {
  const promos = await getPublishedPromoItems();

  return (
    <section className="bg-gradient-to-b from-[#fff8e0] via-[#f5d84a] to-[#f5d84a] pb-16 pt-44 sm:pb-20 sm:pt-52 lg:pb-24 lg:pt-60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h1 className="hero-copy-in font-display text-[clamp(2.75rem,8vw,4.75rem)] font-black leading-[0.92] text-brand-ink">
            Promociones
          </h1>
          <p className="hero-copy-in hero-copy-in-delay-1 mt-3 max-w-xl text-base font-medium leading-relaxed text-brand-ink/75 sm:text-lg">
            Ofertas vigentes del mes. Pregunta en sucursal o cotiza tu evento.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 sm:mt-10">
          <GalleryCarousel items={promos} showHeader={false} />
        </Reveal>

        <Reveal delay={120} className="mt-8 flex justify-center sm:mt-10">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-h-12 border-2 border-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
          >
            <Link href="/eventos#cotizar">Cotizar evento</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
