import Link from "next/link";
import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta a ${siteConfig.name} en Monterrey. Teléfono, WhatsApp y ubicación.`,
  alternates: { canonical: "/contacto" },
};

const channels = [
  {
    label: "Teléfono",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneTel}`,
    external: false,
    nowrap: false,
    icon: "phone" as const,
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
    nowrap: false,
    icon: "whatsapp" as const,
  },
  {
    label: "Correo",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    nowrap: true,
    icon: "mail" as const,
  },
] as const;

const mapsQuery = encodeURIComponent(siteConfig.mapsQuery);
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&hl=es&z=16&output=embed`;
const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function ContactoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-orange via-[#e85a2a] to-brand-red text-white">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-40 sm:px-8 sm:pb-12 sm:pt-48 lg:px-10 lg:pb-14 lg:pt-56">
          <Reveal>
            <h1 className="hero-copy-in text-center font-display text-[clamp(3rem,9vw,5rem)] font-black leading-[0.92] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              Contacto
            </h1>
            <p className="hero-copy-in hero-copy-in-delay-1 mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-white/95 sm:text-lg">
              Fiestas, eventos, menú to-go o cualquier duda — te respondemos por WhatsApp o
              teléfono.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-7 flex justify-center">
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full border-2 border-black bg-brand-yellow px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-yellow sm:min-h-14 sm:px-10 sm:text-base"
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escríbenos
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-blue via-[#7a4a78] to-brand-red py-12 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={60 + i * 40} className="relative">
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover-lift flex h-full flex-col rounded-[1.35rem] border-2 border-brand-yellow/40 bg-white px-5 py-5 text-brand-ink shadow-[0_10px_28px_rgba(0,0,0,0.18)] sm:px-6 sm:py-6"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-blue text-white">
                    <ChannelIcon name={channel.icon} />
                  </span>
                  <p className="mt-3 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-brand-blue">
                    {channel.label}
                  </p>
                  <p
                    className={
                      channel.nowrap
                        ? "mt-2 whitespace-nowrap font-display text-[clamp(0.85rem,1.9vw,1.15rem)] font-black leading-none tracking-tight"
                        : "mt-2 font-display text-[clamp(1.25rem,2.6vw,1.65rem)] font-black leading-[1.05]"
                    }
                  >
                    {channel.value}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-brand-red bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-10 lg:py-16">
          <Reveal className="flex flex-col justify-center">
            <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.92] text-brand-blue sm:-rotate-1">
              Visítanos
            </h2>
            <p className="mt-2 font-display text-[clamp(1.5rem,3.5vw,2.15rem)] font-black leading-[1.05] text-brand-ink">
              Monterrey
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink/85 sm:text-lg">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.region}{" "}
              {siteConfig.address.postalCode}
            </p>
            <div className="mt-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-red">
                Horarios
              </p>
              <div className="mt-2 space-y-1.5 text-base font-semibold leading-relaxed text-brand-ink sm:text-lg">
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.weekend}</p>
              </div>
            </div>
            <Button
              asChild
              variant="outlineDark"
              size="lg"
              className="mt-7 min-h-12 w-fit rounded-full border-2 border-black px-8 text-sm font-extrabold uppercase tracking-wide transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:min-h-14 sm:px-10 sm:text-base"
            >
              <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </a>
            </Button>
          </Reveal>

          <Reveal
            delay={60}
            className="min-h-[260px] overflow-hidden rounded-[1.35rem] shadow-[0_12px_28px_rgba(35,31,32,0.12)] sm:min-h-[320px] lg:min-h-full"
          >
            <iframe
              title="Ubicación de Incredible Pizza en Google Maps"
              src={mapsEmbedUrl}
              className="h-full min-h-[260px] w-full border-0 sm:min-h-[320px] lg:min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      <section id="empleos" className="scroll-mt-28 bg-gradient-to-r from-brand-blue to-[#3f508f] py-12 text-white sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="font-display text-[clamp(1.85rem,4.5vw,2.75rem)] font-black leading-[0.95]">
              ¿Quieres trabajar con nosotros?
            </h2>
            <p className="mt-2 text-sm font-extrabold uppercase tracking-wide text-white/90 sm:text-base">
              Envía tu solicitud y únete al equipo
            </p>
          </Reveal>
          <Reveal delay={60}>
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full border-2 border-black bg-brand-yellow px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-yellow sm:min-h-14 sm:px-10 sm:text-base"
            >
              <Link href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Solicitud de empleo")}`}>
                Enviar solicitud
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ChannelIcon({ name }: { name: "phone" | "whatsapp" | "mail" }) {
  if (name === "phone") {
    return <Phone className="size-5" strokeWidth={2.4} aria-hidden />;
  }
  if (name === "mail") {
    return <Mail className="size-5" strokeWidth={2.4} aria-hidden />;
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
