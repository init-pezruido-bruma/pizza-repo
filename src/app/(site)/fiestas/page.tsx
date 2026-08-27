import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageHeading, PageSection } from "@/components/layout/page-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fiestas infantiles",
  description:
    "Paquetes de fiesta en Incredible Pizza Monterrey: buffet, pastel, juegos y atracciones. Cotiza tu fiesta increíble.",
  alternates: { canonical: "/fiestas" },
};

const quoteWhatsAppHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hola, quiero cotizar una fiesta",
)}`;

const reasons = [
  {
    title: "Juegos con créditos",
    description: "Arcade y atracciones incluidas en tu paquete.",
    image: "/images/fiestas/reason-laser.jpg",
  },
  {
    title: "Buffet",
    description:
      "Selección de pizzas, barra de ensaladas, hot dogs, platillos especiales y mucho más.",
    image: "/images/fiestas/reason-buffet.jpg",
  },
  {
    title: "Escenografía incluida",
    description: "Ambiente listo para celebrar.",
    image: "/images/fiestas/party-room.jpg",
  },
  {
    title: "Todo el año",
    description: "Espacios climatizados, lluvia o sol.",
    image: "/images/fiestas/reason-trampolines.jpg",
  },
] as const;

const packages = [
  {
    name: 'Mini Fiesta "Riley"',
    price: "$7,999",
    summary: "2 hrs de juego + 1 atracción + 200 créditos.",
    features: [
      "10 Niños mínimo",
      "2 Adultos gratis",
      "Pastel + Buffet ilimitado",
      "Aguinaldo",
    ],
    badge: "bg-gradient-to-r from-[#f7d24a] to-[#e44f2f]",
    priceClass: "text-[#e2453a]",
    mascot: {
      src: "/images/fiestas/mascots/riley.png",
      alt: "Riley el mapache",
      mobileClassName: "bottom-1 right-1 h-[8.5rem] w-[8.5rem]",
      desktopClassName:
        "-right-10 bottom-0 h-[10.35rem] w-[8.75rem] translate-y-[44%] sm:-right-12 sm:h-[11.7rem] sm:w-[9.85rem] lg:-right-14",
    },
  },
  {
    name: "Fiesta Rosie The Cat",
    price: "$11,999",
    summary: "3 hrs de juego + 3 atracciones + 300 créditos.",
    features: ["10 Niños mínimo", "2 Adultos gratis", "Aguinaldo + Anfitrión + Piñata"],
    badge: "bg-gradient-to-r from-[#f5d84a] to-[#54779f]",
    priceClass: "text-[#3f6aad]",
    mascot: {
      src: "/images/fiestas/mascots/rosie.png",
      alt: "Rosie The Cat",
      mobileClassName: "bottom-1 right-1 h-[8.5rem] w-[8.5rem]",
      desktopClassName:
        "-right-3 top-0 h-[10.35rem] w-[7.65rem] -translate-y-[62%] sm:-right-4 sm:h-[11.7rem] sm:w-[8.55rem]",
    },
  },
  {
    name: "Fiesta Turbo Tiger",
    price: "$15,999",
    summary: "4 hrs de juego + atracciones ilimitadas + 400 créditos.",
    features: ["10 Niños mínimo", "5 Adultos gratis", "Aguinaldo + Anfitrión + Piñata"],
    badge: "bg-gradient-to-r from-[#cd3c3c] via-[#8d5a8e] to-[#505e9a]",
    priceClass: "text-[#e2453a]",
    mascot: {
      src: "/images/fiestas/mascots/tiger.png",
      alt: "Turbo Tiger",
      mobileClassName: "bottom-1 right-1 h-[8.5rem] w-[8.5rem]",
      desktopClassName:
        "-right-3 top-0 h-[10.35rem] w-[7.65rem] -translate-y-[62%] sm:-right-4 sm:h-[11.7rem] sm:w-[8.55rem]",
    },
  },
] as const;

const addons = [
  "Charola botana",
  "Charola frutas",
  "Mesa botana",
  "Bolsitas recuerdo",
  "Charola dulces",
  "Pastel",
];

export default function FiestasPage() {
  return (
    <>
      <PageHero
        align="center"
        contentClassName="pt-48 sm:pt-56 lg:pt-64 xl:pt-72"
        title={
          <>
            <span className="sm:hidden">
              Tu fiesta increíble
              <br />
              te espera
            </span>
            <span className="hidden whitespace-nowrap sm:inline">Tu fiesta increíble te espera</span>
          </>
        }
        description="Celebra en un espacio diseñado para que cada momento sea único e inolvidable, todo el año, sin importar el clima."
      >
        <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
          <a href={quoteWhatsAppHref} target="_blank" rel="noopener noreferrer">
            Cotizar mi fiesta
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="min-h-12 w-full border-2 border-white text-white sm:w-auto"
        >
          <a href="#paquetes">Ver paquetes</a>
        </Button>
      </PageHero>

      {/* Foto full-bleed entre el hero y “El mejor lugar para celebrar” */}
      <section className="relative z-10 w-full overflow-visible bg-brand-ink">
        <Reveal className="relative min-h-[260px] w-full overflow-hidden sm:min-h-[360px] lg:min-h-[460px]">
          <div className="group absolute inset-0">
            <Image
              src="/images/fiestas/hero-party.jpg"
              alt="Invitados celebrando en Incredible Pizza"
              width={3840}
              height={1295}
              sizes="100vw"
              quality={90}
              priority
              className="img-zoom absolute inset-0 h-full w-full object-cover object-[center_35%]"
            />
          </div>
        </Reveal>
        <Reveal
          delay={180}
          className="absolute bottom-0 right-4 z-20 translate-y-1/3 sm:right-8 lg:right-12"
        >
          <Image
            src="/images/fiestas/hosting-circle.jpg"
            alt="Staff preparando la mesa de fiesta"
            width={978}
            height={978}
            sizes="180px"
            quality={90}
            className="float-soft size-28 rounded-full border-4 border-white object-cover shadow-lg sm:size-40 lg:size-44"
          />
        </Reveal>
      </section>

      <PageSection className="bg-gradient-to-b from-[#2b5899] via-[#3f508f] to-[#4a306d] py-14 text-white sm:py-20">
        <PageHeading
          title="El mejor lugar para celebrar"
          eyebrow="4 razones para hacer tu fiesta con nosotros"
          className="mb-14 sm:mb-16"
        />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {reasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="group text-center">
              <div className="hover-lift mx-auto size-44 overflow-hidden rounded-full border-4 border-white/90 shadow-lg sm:size-52 lg:size-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={560}
                  height={560}
                  sizes="(max-width:1024px) 208px, 224px"
                  quality={90}
                  className="img-zoom h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black text-brand-yellow sm:text-3xl lg:text-[2rem]">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[18ch] text-base leading-relaxed text-white/90 sm:max-w-none sm:text-lg">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="paquetes"
        className="overflow-visible bg-gradient-to-b from-[#fad122] via-[#f19a27] to-[#e2452f] py-14 sm:py-20"
        innerClassName="max-w-7xl overflow-visible"
      >
        <Reveal className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="font-display text-[clamp(2.75rem,7vw,4.5rem)] font-black leading-[0.95] text-white drop-shadow-[0_2px_0_rgba(35,31,32,0.15)]">
            Celebra con nosotros
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-extrabold uppercase leading-relaxed tracking-[0.06em] text-white sm:text-base md:text-lg">
            En todos los paquetes, el cumpleañero entra gratis.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-8 pt-6 pb-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-28 sm:pt-20 sm:pb-36 sm:max-xl:[&>:last-child:nth-child(odd)]:col-span-2 sm:max-xl:[&>:last-child:nth-child(odd)]:w-[min(100%,calc((100%-2.5rem)/2))] sm:max-xl:[&>:last-child:nth-child(odd)]:justify-self-center xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 70} className="relative overflow-visible">
              {/* Cuadro blanco */}
              <div className="hover-lift relative z-0 flex min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-white px-5 py-5 shadow-[0_16px_36px_rgba(35,31,32,0.28)] ring-1 ring-black/5 sm:aspect-square sm:px-6 sm:py-6">
                <div className="relative z-10 max-w-[70%] pr-2 sm:max-w-none">
                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white sm:text-xs ${pkg.badge}`}
                  >
                    Agenda tu fiesta
                  </span>
                  <h3 className="mt-3 font-display text-[1.7rem] font-black leading-[1.05] text-brand-ink sm:text-[1.65rem]">
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-2 text-[2.1rem] font-black leading-none tabular-nums sm:text-[2.15rem] ${pkg.priceClass}`}
                  >
                    {pkg.price}{" "}
                    <span className="text-[0.55em] font-extrabold uppercase tracking-wide">Total</span>
                  </p>
                  <p className="mt-3 text-base leading-snug text-brand-ink/80 sm:text-[0.95rem]">
                    {pkg.summary}
                  </p>
                  <ul className="mt-2 space-y-0 text-base leading-snug text-brand-ink/80 sm:text-[0.95rem]">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 border-b border-brand-ink/10 py-2.5 last:border-0"
                      >
                        <span className="mt-0.5 shrink-0 font-bold text-brand-red" aria-hidden>
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mascota dentro del cuadro (solo móvil) */}
                {pkg.mascot ? (
                  <div
                    className={`pointer-events-none absolute z-0 sm:hidden ${pkg.mascot.mobileClassName}`}
                    aria-hidden
                  >
                    <Image
                      src={pkg.mascot.src}
                      alt={pkg.mascot.alt}
                      width={480}
                      height={480}
                      sizes="120px"
                      className="h-full w-full object-contain object-right object-bottom drop-shadow-[0_8px_14px_rgba(0,0,0,0.22)]"
                    />
                  </div>
                ) : null}
              </div>

              {/* Mascota fuera del cuadro (PC / tablet) */}
              {pkg.mascot ? (
                <div
                  className={`pointer-events-none absolute z-20 hidden sm:block ${pkg.mascot.desktopClassName}`}
                  aria-hidden
                >
                  <Image
                    src={pkg.mascot.src}
                    alt={pkg.mascot.alt}
                    width={480}
                    height={480}
                    sizes="240px"
                    className={
                      pkg.mascot.desktopClassName.includes("h-[")
                        ? "float-soft h-full w-full object-contain object-right object-bottom drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
                        : "float-soft h-auto w-full object-contain object-right drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
                    }
                  />
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-white/85 sm:mt-8 sm:text-sm">
          Las promociones y paquetes no son acumulables. Aplican{" "}
          <Link href="/terminos" className="underline underline-offset-2 hover:text-white">
            términos y condiciones
          </Link>
          . Precios sujetos a cambio sin previo aviso. El cumpleañero entra gratis con la compra del
          paquete. Consulta vigencia, disponibilidad y detalles al cotizar.
        </p>

        <Reveal delay={100}>
          <div
            id="cotizar"
            className="mt-7 grid gap-6 sm:mt-16 md:grid-cols-3 md:items-end"
          >
            <div className="space-y-2 text-center md:text-left">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="block text-lg font-extrabold text-white drop-shadow transition hover:text-brand-yellow sm:text-xl"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-white/95 transition hover:text-brand-yellow sm:text-lg md:justify-start"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="size-5 shrink-0 text-[#25d366] sm:size-6"
                >
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
                  />
                </svg>
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                size="xl"
                variant="secondary"
                className="min-h-14 w-full border-2 border-brand-ink bg-white px-10 text-base text-brand-ink shadow-[0_6px_0_0_#fad122] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:w-auto"
              >
                <a href={quoteWhatsAppHref} target="_blank" rel="noopener noreferrer">
                  Agenda tu fiesta
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </PageSection>

      <section className="relative border-t-[3px] border-[#e13e30] bg-white">
        <div className="grid lg:grid-cols-2">
          <Reveal className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px]">
            <div className="group absolute inset-0 overflow-hidden">
              <Image
                src="/images/fiestas/party-table.jpg"
                alt="Mesa de fiesta con pizza y cupcakes"
                fill
                quality={90}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="img-zoom object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <h2 className="max-w-[14ch] font-display text-[clamp(2.75rem,6.5vw,4.75rem)] font-black leading-[0.92] text-[#3f6eab] sm:-rotate-1">
              Haz tu fiesta aún más especial
            </h2>
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#3f6eab] sm:text-base">
              Agrega charolas, pasteles, dulces y más
            </p>
            <ul className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-0 text-sm font-bold text-brand-ink sm:text-base">
              {addons.map((item, i) => (
                <Reveal as="li" key={item} delay={160 + i * 40} className="border-b border-brand-ink/15 py-3.5">
                  {item}
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
        <div
          className="h-2.5 w-full bg-gradient-to-r from-[#e6cd31] via-[#9aa06a] to-[#456ea8] sm:h-3"
          aria-hidden
        />
      </section>

      <PageSection
        className="bg-gradient-to-r from-[#eacf2e] via-[#989f6b] to-[#456ea8] py-14 text-white sm:py-16"
        innerClassName="max-w-6xl"
      >
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-14">
          <Reveal>
            <h2 className="max-w-[10ch] -translate-y-3 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-black leading-[0.95] -rotate-6 drop-shadow-[0_2px_0_rgba(35,31,32,0.12)] sm:-translate-y-5 sm:-rotate-[10deg]">
              ¿Listo para reservar?
            </h2>
          </Reveal>
          <Reveal delay={120} className="w-full max-w-md space-y-5 md:w-auto">
            <p className="text-sm font-extrabold uppercase tracking-[0.08em] sm:text-base">
              Escríbenos y te damos tu cotización en minutos
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="min-h-12 w-full border-2 border-brand-ink bg-white px-8 text-brand-ink shadow-[0_0_0_3px_#eacf2e] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:w-auto"
            >
              <a href={quoteWhatsAppHref} target="_blank" rel="noopener noreferrer">
                Cotizar por WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </PageSection>
    </>
  );
}
