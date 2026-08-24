import type { Metadata } from "next";
import { PageSection } from "@/components/layout/page-section";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facturación",
  description: `Solicita tu factura CFDI de ${siteConfig.name}. Requisitos y datos necesarios.`,
  alternates: { canonical: "/facturacion" },
};

const requirements = [
  "RFC (12 o 13 caracteres)",
  "Nombre o razón social (tal como aparece en el CIF)",
  "Código postal del domicilio fiscal",
  "Régimen fiscal",
  "Uso de CFDI",
  "Correo electrónico para recibir el XML y el PDF",
  "Ticket, folio o número de nota de venta",
  "Fecha y monto de la compra",
] as const;

export default function FacturacionPage() {
  return (
    <PageSection clearHeader reveal={false} className="bg-brand-cream pb-16 sm:pb-20">
      <Reveal>
        <article className="mx-auto max-w-3xl">
          <p className="hero-copy-in text-xs font-extrabold uppercase tracking-[0.16em] text-brand-red">
            Facturación
          </p>
          <h1 className="hero-copy-in hero-copy-in-delay-1 mt-3 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95] text-brand-ink">
            Cómo facturar
          </h1>
          <div className="hero-copy-in hero-copy-in-delay-2 mt-8 space-y-6 text-base leading-relaxed text-brand-ink/80">
            <p>
              Si necesitas factura de tu visita o compra en {siteConfig.name}, envíanos tu solicitud
              con los datos fiscales completos. Emitimos CFDI conforme a la normativa vigente.
            </p>

            <div>
              <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-black leading-tight text-brand-ink">
                Datos que necesitamos
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-black leading-tight text-brand-ink">
                Cómo solicitarla
              </h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>Reúne los datos de la lista anterior.</li>
                <li>
                  Escríbenos a{" "}
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Solicitud de factura")}`}
                    className="font-semibold text-brand-blue underline-offset-2 hover:underline"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  o por WhatsApp al{" "}
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, quiero solicitar una factura")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-blue underline-offset-2 hover:underline"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                  .
                </li>
                <li>Adjunta o escribe el folio del ticket y tus datos fiscales.</li>
                <li>Te enviaremos el XML y el PDF al correo indicado.</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-black leading-tight text-brand-ink">
                Importante
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Solicita tu factura el mismo mes de la compra, dentro del plazo fiscal vigente.
                </li>
                <li>Los datos fiscales deben coincidir exactamente con tu Constancia de Situación Fiscal.</li>
                <li>
                  Esta página es un placeholder operativo: confirma plazos, correo oficial de
                  facturación y proceso interno antes de publicar.
                </li>
              </ul>
            </div>

            <p>
              Dudas al teléfono{" "}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-semibold text-brand-blue underline-offset-2 hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </article>
      </Reveal>
    </PageSection>
  );
}
