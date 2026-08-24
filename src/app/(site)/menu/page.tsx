import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menú To-Go",
  description:
    "Pizzas, boneless, alitas, complementos y refrescos para llevar. Encuéntranos en DiDi Food, Rappi y Uber Eats.",
  alternates: { canonical: "/menu" },
};

const deliveryLogos = [
  {
    name: "DiDi Food",
    href: siteConfig.delivery.didi,
    src: "/images/brands/didi.svg",
    className: "h-8 w-auto sm:h-9",
  },
  {
    name: "Rappi",
    href: siteConfig.delivery.rappi,
    src: "/images/brands/rappi.svg",
    className: "h-9 w-auto sm:h-10",
  },
  {
    name: "Uber Eats",
    href: siteConfig.delivery.uber,
    src: "/images/brands/ubereats.svg",
    className: "h-10 w-auto sm:h-12",
  },
] as const;

const pizzas = [
  {
    name: "Pizza Pepperoni",
    description: "Pepperoni clásico con queso derretido.",
    image: "/images/menu/pizza-pepperoni.png",
    cutout: true,
  },
  {
    name: "Pizza Hawaiana",
    description: "Jamón y piña sobre salsa de tomate.",
    image: "/images/menu/pizza-queso.png",
    cutout: true,
  },
  {
    name: "Espagueti",
    description: "Espagueti con salsa de tomate casera.",
    image: "/images/menu/wings.jpg",
    cutout: false,
  },
  {
    name: "Boneless",
    description: "Crujientes, con papas y salsa Buffalo o BBQ.",
    image: "/images/menu/boneless.png",
    cutout: true,
  },
] as const;

const starters = [
  {
    name: "Boneless",
    description: "8 pz acompañado de papas a la francesa.",
    image: "/images/menu/boneless.png",
  },
  {
    name: "Alitas",
    description: "10 pz acompañado de papas a la francesa.",
    image: "/images/menu/alitas.png",
  },
] as const;

const sidesLeft = [
  {
    name: "Dedos de queso",
    description: "4 pz acompañado de papas a la francesa y salsa marinara.",
  },
  {
    name: "Papas a la francesa",
    description: "300 grs de papas a la francesa.",
  },
  {
    name: "Medio litro de Espagueti",
    description: "Espagueti con salsa de tomate.",
  },
] as const;

const sidesRight = [
  {
    name: "Medio litro de puré de papa con gravy",
    description: null,
  },
  {
    name: "Aderezo o Salsa extra",
    description: null,
  },
] as const;

const drinks = [
  {
    name: "Coca Cola, Fanta, Joya de manzana 500 ml.",
  },
  {
    name: "Agua natural 600 ml.",
  },
  {
    name: "Coca Cola regular o Zero de 1.75 lts.",
  },
] as const;

export default function MenuPage() {
  return (
    <>
      {/* Pizzas — flyer: red→yellow + circular pies + delivery CTAs */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#d92b1f] via-[#e85a2a] to-[#f0a020] pb-10 pt-40 text-white sm:pb-12 sm:pt-48 lg:pb-14 lg:pt-56">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <h1 className="hero-copy-in text-center font-display text-[clamp(3.5rem,10vw,5.5rem)] font-black leading-[0.9] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              Pizzas
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {pizzas.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i * 60}
                className="relative flex flex-col items-center text-center"
              >
                <div className="group relative w-full max-w-[220px]">
                  <div
                    className={
                      item.cutout
                        ? "relative mx-auto aspect-square overflow-visible"
                        : "relative mx-auto aspect-square overflow-hidden rounded-full bg-white/10 shadow-[0_14px_32px_rgba(0,0,0,0.28)] ring-2 ring-white/25"
                    }
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="220px"
                      unoptimized={item.cutout}
                      className={
                        item.cutout
                          ? "img-zoom object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.35)]"
                          : "img-zoom object-cover"
                      }
                      priority={i === 0}
                    />
                  </div>
                </div>

                <h2 className="mt-5 font-display text-[clamp(1.35rem,2.4vw,1.75rem)] font-black leading-[1.05] text-brand-yellow">
                  {item.name}
                </h2>
                <p className="mt-1.5 max-w-[16rem] text-[0.7rem] font-extrabold uppercase leading-snug tracking-wide text-white/95 sm:text-xs">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={200}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-12 sm:gap-x-12 lg:gap-x-14"
          >
            {deliveryLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:opacity-90"
                aria-label={`Pedir en ${logo.name}`}
              >
                <img src={logo.src} alt="" className={logo.className} />
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* De todo un poco + Complementos (azul→rojo) + Refrescos (ángulo lima→teal) */}
      <section className="relative overflow-x-clip bg-gradient-to-b from-brand-blue to-brand-red text-white">
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-16 lg:px-10 lg:pt-20">
          <Reveal>
            <div className="w-full max-w-full sm:inline-grid sm:w-auto sm:grid-cols-1 sm:items-start">
              <h2 className="max-w-full whitespace-nowrap text-left font-display text-[clamp(3.25rem,14vw,9rem)] font-black leading-[0.92] drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] sm:text-[clamp(5.5rem,16vw,9rem)] sm:leading-[0.9]">
                De todo un poco
              </h2>
              <div
                className="mt-4 w-full max-w-md bg-gradient-to-r from-brand-red to-brand-yellow px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.22)] sm:mt-5 sm:max-w-none sm:px-6 sm:py-3"
                style={{
                  /* Izq. -135°, der. -100° */
                  clipPath:
                    "polygon(0 0, 100% 0, calc(100% - 0.5rem) 100%, 2.75rem 100%)",
                }}
              >
                <p className="pr-1 text-right text-sm font-extrabold italic tracking-wide text-white sm:pr-1.5 sm:text-base">
                  Elige entre salsa Buffalo o BBQ
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 sm:mt-12 md:grid-cols-2 md:gap-8 lg:gap-12">
            {starters.map((item, i) => (
              <Reveal key={item.name} delay={i * 70} className="group text-center">
                <div className="relative mx-auto aspect-[5/4] max-w-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    unoptimized
                    className="img-zoom object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.4)]"
                  />
                </div>
                <h3 className="mt-5 font-display text-[clamp(2rem,4vw,2.75rem)] font-black leading-none text-brand-yellow">
                  {item.name}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-[0.7rem] font-extrabold uppercase leading-snug tracking-wide text-white/95 sm:text-xs">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80} className="mt-14 sm:mt-16">
            <h2 className="font-display text-[clamp(2.5rem,7vw,4rem)] font-black leading-[0.92]">
              Complementos
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
            <div className="space-y-6">
              {sidesLeft.map((item, i) => (
                <Reveal key={item.name} delay={100 + i * 40}>
                  <div>
                    <h3 className="font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-black leading-[1.05] text-brand-yellow">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[0.65rem] font-extrabold uppercase leading-snug tracking-wide text-white/90 sm:text-xs">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="space-y-6">
              {sidesRight.map((item, i) => (
                <Reveal key={item.name} delay={140 + i * 40}>
                  <div>
                    <h3 className="font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-black leading-[1.05] text-brand-yellow">
                      {item.name}
                    </h3>
                    {item.description ? (
                      <p className="mt-1 text-[0.65rem] font-extrabold uppercase leading-snug tracking-wide text-white/90 sm:text-xs">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Refrescos — móvil: coca arriba + lista abajo; desktop: overlay a la derecha */}
        <div className="relative mt-6 w-full overflow-hidden sm:mt-8 sm:min-h-[30rem] lg:min-h-[36rem]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, #c4d64d 0%, #7a9a6a 42%, #6e8c9a 100%)",
              clipPath:
                "polygon(0 clamp(7.5rem, 18vw, 13rem), 100% 0, 100% 100%, 0 100%)",
            }}
          />

          {/* Móvil: Refrescos arriba de la coca, ambos -20° juntos; lista abajo */}
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 pb-10 pt-[clamp(2.75rem,8vw,4.5rem)] sm:hidden">
            <Reveal className="mx-auto flex w-[min(22rem,88%)] flex-col items-center">
              <h2 className="relative z-10 mb-1 translate-y-24 rotate-[27deg] font-display text-[clamp(3.5rem,15vw,5rem)] font-black leading-[0.9] text-white drop-shadow-[0_3px_0_rgba(35,31,32,0.22)]">
                Refrescos
              </h2>
              <img
                src="/images/menu/coca-cola-bottle.png"
                alt="Botella de Coca-Cola"
                width={1421}
                height={1147}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </Reveal>
            <Reveal delay={60} className="mt-3">
              <ul className="space-y-5">
                {drinks.map((drink, i) => (
                  <li
                    key={drink.name}
                    className={`border-b border-white/25 ${i === 0 ? "pb-1.5 pt-0" : "pb-3.5"}`}
                  >
                    <p className="text-sm font-extrabold uppercase leading-snug tracking-wide text-white">
                      {drink.name}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Desktop: lista + coca con título sobre la botella (sin cambios de móvil) */}
          <div className="relative z-10 mx-auto hidden max-w-6xl px-5 pb-10 pt-[clamp(8.5rem,20vw,14rem)] sm:block sm:px-8 lg:px-10 lg:pb-14">
            <Reveal className="relative z-20 max-w-xl pt-6 sm:pt-8">
              <ul className="space-y-5">
                {drinks.map((drink) => (
                  <li
                    key={`desk-${drink.name}`}
                    className="border-b border-white/25 pb-3.5"
                  >
                    <p className="text-sm font-extrabold uppercase leading-snug tracking-wide text-white sm:text-base lg:text-lg">
                      {drink.name}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="pointer-events-none absolute -bottom-[18%] right-[-28%] z-20 hidden w-[min(48rem,105vw)] sm:block sm:-bottom-[22%] sm:right-[-18%] sm:w-[min(54rem,85vw)] lg:-bottom-[26%] lg:right-[-12%] lg:w-[min(58rem,62vw)]">
            <img
              src="/images/menu/coca-cola-bottle.png"
              alt=""
              width={1421}
              height={1147}
              className="h-auto w-full select-none"
              draggable={false}
              aria-hidden
            />
            <h2 className="absolute left-[20%] top-[calc(12%+1.3cm)] z-30 origin-center rotate-[18deg] font-display text-[clamp(3.75rem,11vw,6.5rem)] font-black leading-[0.9] text-white drop-shadow-[0_3px_0_rgba(35,31,32,0.22)] sm:left-[24%] sm:top-[calc(10%+1.3cm)] sm:rotate-[20deg] lg:left-[26%]">
              Refrescos
            </h2>
          </div>
        </div>
      </section>

      {/* Delivery bar — Encuéntranos en + logos blancos */}
      <section className="bg-brand-red text-white">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-5 px-5 py-6 sm:gap-x-12 sm:px-8 sm:py-7 lg:justify-between lg:gap-x-10 lg:px-10">
          <p className="font-display text-[clamp(2.25rem,5vw,3.25rem)] font-black italic leading-none">
            Encuéntranos en
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 lg:gap-x-14">
            {deliveryLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:opacity-90"
                aria-label={`Pedir en ${logo.name}`}
              >
                <img src={logo.src} alt="" className={logo.className} />
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
