import type { Metadata } from "next";
import { PageSection } from "@/components/layout/page-section";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  robots: { index: false, follow: true },
};

export default function TerminosPage() {
  return (
    <PageSection clearHeader reveal={false} className="bg-brand-cream pb-16 sm:pb-20">
      <Reveal>
        <article className="mx-auto max-w-3xl">
          <p className="hero-copy-in text-xs font-extrabold uppercase tracking-[0.16em] text-brand-red">
            Legal
          </p>
          <h1 className="hero-copy-in hero-copy-in-delay-1 mt-3 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95] text-brand-ink">
            Términos y condiciones
          </h1>
          <div className="hero-copy-in hero-copy-in-delay-2 mt-8 space-y-4 text-base leading-relaxed text-brand-ink/80">
            <p>
              El uso de este sitio web implica la aceptación de los términos y condiciones de{" "}
              {siteConfig.legalName}.
            </p>
            <p>
              Esta página es un placeholder legal: sustituye este texto por los términos oficiales
              de la empresa antes de publicar.
            </p>
            <p>
              Para dudas, contáctanos en{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-brand-blue underline-offset-2 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              o al teléfono {siteConfig.phone}.
            </p>
          </div>
        </article>
      </Reveal>
    </PageSection>
  );
}
