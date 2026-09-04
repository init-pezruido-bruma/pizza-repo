import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menú To-Go",
  description:
    "Pizzas, boneless, alitas y complementos para llevar. Encuéntranos en DiDi Food, Rappi y Uber Eats.",
  alternates: { canonical: "/menu" },
};

const deliveryLogos = [
  {
    name: "DiDi Food",
    href: siteConfig.delivery.didi,
    src: "/images/brands/didi.svg",
    className: "h-8 w-auto drop-shadow-sm sm:h-9",
  },
  {
    name: "Rappi",
    href: siteConfig.delivery.rappi,
    src: "/images/brands/rappi.svg",
    className: "h-8 w-auto drop-shadow-sm sm:h-9",
  },
  {
    name: "Uber Eats",
    href: siteConfig.delivery.uber,
    src: "/images/brands/ubereats.svg",
    className: "h-8 w-auto drop-shadow-sm sm:h-9",
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
    image: "/images/menu/pizza-hawaiana.png",
    cutout: true,
  },
  {
    name: "Pizza de Queso",
    description: "Queso derretido sobre salsa de tomate.",
    image: "/images/menu/pizza-queso.png",
    cutout: true,
  },
  {
    name: "Pizza Vegetariana",
    description: "Verduras frescas sobre salsa de tomate y queso.",
    image: "/images/menu/pizza-vegetariana.png",
    cutout: true,
  },
  {
    name: "Pizza Tres Carnes",
    description: "Pepperoni, jamón y carne sobre queso derretido.",
    image: "/images/menu/pizza-tres-carnes.png",
    cutout: true,
  },
  {
    name: "Mitad Queso y Pepperoni",
    description: "Mitad queso, mitad pepperoni.",
    image: "/images/menu/pizza-mitad-queso-pepperoni.png",
    cutout: true,
  },
  {
    name: "Pizza Mexicana",
    description: "Chorizo, cilantro, cebolla y salsa especial.",
    image: "/images/menu/pizza-mexicana.png",
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
    name: "Spaghetti",
    description: "Medio litro con salsa de tomate.",
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

const pizzasTop = pizzas.slice(0, 4);
const pizzasBottom = pizzas.slice(4);

function PizzaCard({
  item,
  delay,
  priority = false,
  className,
}: {
  item: (typeof pizzas)[number];
  delay: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      delay={delay}
      className={`relative flex flex-col items-center text-center ${className ?? ""}`}
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
            quality={90}
            unoptimized={item.cutout}
            className={
              item.cutout
                ? "img-zoom object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.35)]"
                : "img-zoom object-cover"
            }
            priority={priority}
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
  );
}

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

          <div className="mt-10 space-y-8 sm:mt-12 lg:space-y-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {pizzasTop.map((item, i) => (
                <PizzaCard
                  key={item.name}
                  item={item}
                  delay={i * 60}
                  priority={i === 0}
                />
              ))}
            </div>

            {/* Segunda fila: 3 pizzas centradas bajo las 4 de arriba en desktop */}
            <div className="grid gap-8 sm:grid-cols-2 lg:mx-auto lg:w-3/4 lg:grid-cols-3 lg:gap-6">
              {pizzasBottom.map((item, i) => (
                <PizzaCard
                  key={item.name}
                  item={item}
                  delay={(i + 4) * 60}
                  className="sm:last:col-span-2 sm:last:justify-self-center lg:last:col-span-1 lg:last:justify-self-auto"
                />
              ))}
            </div>
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

      {/* De todo un poco + Complementos */}
      <section className="relative overflow-x-clip bg-gradient-to-b from-brand-blue to-brand-red text-white">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <Reveal>
            <div className="w-full max-w-full sm:inline-grid sm:w-auto sm:grid-cols-1 sm:items-start">
              <h2 className="max-w-full whitespace-nowrap text-left font-display text-[clamp(3.25rem,14vw,9rem)] font-black leading-[0.92] drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] sm:text-[clamp(5.5rem,16vw,9rem)] sm:leading-[0.9]">
                De todo un poco
              </h2>
              <div
                className="mt-4 w-full max-w-md bg-gradient-to-r from-brand-red to-brand-yellow px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.22)] sm:mt-5 sm:max-w-none sm:px-6 sm:py-3"
                style={{
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

          <div className="mt-14 grid items-center gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-14">
            <div>
              <Reveal>
                <h2 className="font-display text-[clamp(2.5rem,7vw,4rem)] font-black leading-[0.92]">
                  Complementos
                </h2>
              </Reveal>
              <div className="mt-8 space-y-6">
                {[...sidesLeft, ...sidesRight].map((item, i) => (
                  <Reveal key={item.name} delay={80 + i * 40}>
                    <div className="border-b border-white/20 pb-5">
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
            <Reveal delay={120} className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] sm:min-h-[360px]">
              <Image
                src="/images/menu/appetizers.jpg"
                alt="Complementos del menú: papas, boneless y alitas"
                fill
                quality={90}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="img-zoom object-cover"
              />
            </Reveal>
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
