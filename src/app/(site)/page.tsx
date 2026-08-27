import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { HeroParallaxImage } from "@/components/ui/hero-parallax-image";
import { Reveal } from "@/components/ui/reveal";
import { HoursBanner } from "@/components/home/hours-banner";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Juegos Increíbles en Monterrey`,
  },
  description:
    "Conoce nuestros Juegos Increíbles: tickets, premios, buffet, fiestas y atracciones en Incredible Pizza Monterrey.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Buffet Ilimitado",
    description:
      "Disfruta el buffet ilimitado. Come, merienda y cena todo por un mismo precio, contamos con buffet de postres, pizzas, sopas y ensaladas. Además bebidas ilimitadas como café, té y refrescos.",
    image: "/images/home/card-buffet.jpg",
    width: 1700,
    height: 1700,
    href: "/menu",
  },
  {
    title: "Juegos y Atracciones",
    description:
      "Pasa un excelente día en nuestra increíble área de juegos y atracciones, contamos con máquina de tickets, video juegos, go karts, laser tag, mini golf, mini boliche, resbaladeros gigantes y mucho más.",
    image: "/images/home/card-juegos.jpg",
    width: 1700,
    height: 1700,
    href: "/juegos",
  },
  {
    title: "Comida para llevar",
    description:
      "Contamos con un menú exclusivo con comida para llevar, llama, ordena y recoge en sucursal, pide a domicilio (área limitada con costo extra) o encuéntranos en tu App de delivery favorita.",
    image: "/images/home/card-togo.jpg",
    width: 1700,
    height: 1700,
    href: "/menu",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — móvil: foto de fondo + gradiente + texto; desktop: split */}
      <section className="relative overflow-hidden bg-[#1a2b56]">
        <div className="relative grid lg:grid-cols-2 lg:items-stretch">
          <div className="z-0 overflow-hidden bg-[#1a2038] max-lg:absolute max-lg:inset-0 lg:relative lg:min-h-[48rem] xl:min-h-[53rem]">
            <HeroParallaxImage
              src="/images/home/hero-juegos-increibles.jpg"
              alt="Niño celebrando su cumpleaños frente a la Incredible Wheel of Fun"
              width={2852}
              height={4340}
              sizes="(max-width:1024px) 100vw, 960px"
              objectPosition="center 22%"
            />
            {/* Móvil: gradiente sobre la foto para legibilidad del texto */}
            <div
              className="pointer-events-none absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(26,32,56,0.55) 0%, rgba(106,63,92,0.72) 38%, rgba(63,80,143,0.82) 68%, rgba(43,88,153,0.92) 100%)",
              }}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-32 bg-gradient-to-b from-black/50 to-transparent lg:block" />
          </div>

          <div className="relative z-10 flex min-h-[36rem] flex-col items-center justify-center bg-transparent px-6 pb-14 pt-28 sm:min-h-[40rem] sm:px-10 sm:pb-16 sm:pt-32 lg:min-h-[48rem] lg:bg-gradient-to-b lg:from-[#6a3f5c] lg:via-[#3f508f] lg:to-[#2b5899] lg:px-12 lg:pb-20 lg:pt-[13.5rem] xl:min-h-[53rem] xl:px-16 xl:pt-[14.5rem]">
            <div className="w-full max-w-xl lg:max-w-2xl">
              <p className="hero-copy-in text-xs font-extrabold uppercase tracking-[0.2em] text-white sm:text-sm">
                Conoce nuestros
              </p>
              <h1 className="hero-copy-in hero-copy-in-delay-1 mt-2 whitespace-nowrap font-display text-[clamp(2.85rem,11vw,6.75rem)] font-black leading-[0.9] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
                Juegos Increíbles
              </h1>
              <p className="hero-copy-in hero-copy-in-delay-2 mt-5 max-w-[36ch] text-base leading-relaxed text-white sm:text-lg">
                Demuestra tu destreza con nuestros juegos, con los que podrás obtener montones de
                tickets electrónicos. Lo mejor es que puedes cambiar tus tickets por grandiosos
                premios en nuestro mostrador de redención.
              </p>
              <div className="hero-copy-in hero-copy-in-delay-3 mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="min-h-12 w-full border-2 border-black px-8 text-base text-black sm:w-auto"
                >
                  <Link href="/juegos">Ver más</Link>
                </Button>
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="min-h-12 w-full border-2 border-black px-8 text-base text-black sm:w-auto"
                >
                  <a href={siteConfig.storeUrl} target="_blank" rel="noopener noreferrer">
                    Compra aquí
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2+3. Horarios + Fiesta (foto a la derecha en PC) */}
      <section className="relative overflow-hidden bg-white">
        <Reveal className="relative z-20">
          <HoursBanner />
        </Reveal>

        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <Reveal className="order-2 flex flex-col items-start justify-center space-y-6 bg-white px-5 pb-10 pt-10 sm:px-8 sm:pb-12 lg:order-1 lg:min-h-[36rem] lg:px-12 lg:pb-14 lg:pt-12 xl:px-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2b5899] sm:text-sm">
                Celebra con nosotros tu
              </p>
              <h2 className="mt-2 font-display text-[clamp(3.25rem,9vw,5.75rem)] font-black leading-[0.9] text-[#2b5899]">
                Fiesta
                <br />
                Increíble
              </h2>
            </div>
            <Button
              asChild
              variant="outlineDark"
              size="xl"
              className="h-auto w-fit rounded-full border-2 border-black bg-white px-8 py-3.5 text-base font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-ink hover:text-white sm:px-10 sm:py-4 sm:text-lg"
            >
              <Link href="/fiestas">Envía tu solicitud</Link>
            </Button>
          </Reveal>

          <Reveal className="relative order-1 z-10 -mt-[clamp(3.75rem,7vw,5.5rem)] min-h-[340px] overflow-hidden sm:min-h-[420px] lg:order-2 lg:-mt-[clamp(3.5rem,6vw,5.5rem)] lg:min-h-[36rem] xl:min-h-[40rem]">
            <div className="group absolute inset-0">
              <HeroParallaxImage
                src="/images/home/fiesta-increible.jpg"
                alt="Niño disfrutando su fiesta en Incredible Pizza"
                width={3592}
                height={3516}
                sizes="(max-width:1024px) 100vw, 50vw"
                priority={false}
                quality={90}
                objectPosition="center 22%"
                intensity={1.35}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Cards — buffet / juegos / to-go */}
      <section className="bg-brand-red py-12 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2 md:max-lg:[&>:last-child:nth-child(odd)]:col-span-2 md:max-lg:[&>:last-child:nth-child(odd)]:w-[min(100%,calc((100%-2rem)/2))] md:max-lg:[&>:last-child:nth-child(odd)]:justify-self-center lg:grid-cols-3 lg:gap-7 lg:px-10">
          {services.map((item, i) => (
            <Reveal key={item.title} as="article" delay={i * 90} className="group flex w-full flex-col">
              <div className="hover-lift relative aspect-square w-full overflow-hidden rounded-3xl bg-brand-red">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 360px"
                  quality={90}
                  className="img-zoom absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-display text-[clamp(1.5rem,3.2vw,1.85rem)] font-black text-brand-yellow">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-white/95">{item.description}</p>
              <Button
                asChild
                variant="secondary"
                size="default"
                className="mt-4 min-h-10 w-full border-2 border-white bg-white px-6 text-brand-ink transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white/90 sm:w-fit"
              >
                <Link href={item.href}>Ver más</Link>
              </Button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Rápido y Furioso */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
          <div className="group absolute inset-0">
            <Image
              src="/images/home/rapido-y-furioso.jpg"
              alt="Madre e hijo en go-kart Rápido y Furioso"
              width={3840}
              height={1680}
              sizes="100vw"
              quality={90}
              priority={false}
              className="img-zoom absolute inset-0 h-full w-full object-cover object-[center_28%]"
            />
          </div>
          {/* Oscurece solo la zona del copy; la foto del kart queda limpia */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent lg:via-black/30" />
          <div className="relative mx-auto flex min-h-[320px] max-w-6xl items-center px-5 py-10 sm:min-h-[400px] sm:px-8 lg:min-h-[480px] lg:px-10">
            <Reveal className="max-w-md space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-yellow sm:text-sm">
                ¿Estás listo para la velocidad y la emoción de
              </p>
              <h2 className="font-display text-[clamp(2.2rem,5.5vw,3.4rem)] font-black leading-none">
                Rápido y Furioso?
              </h2>
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                Únete a la acción y utiliza nuestro hashtag #IncredibleRápidoYFurioso para compartir
                tus momentos favoritos del juego.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-11 w-full border-2 border-white px-8 text-white transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:w-auto"
              >
                <Link href="/juegos">Ver más</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Equipo — bowtie asset + fotos de staff */}
      <section className="relative overflow-x-clip bg-gradient-to-b from-[#fff8e0] via-[#f5d84a] to-[#6ba3d4] py-16 sm:py-24">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
          <Reveal className="relative w-full max-w-4xl">
            <div className="relative mx-auto w-full">
              <div className="relative mx-auto w-full">
                <Image
                  src="/images/home/equipo-bowtie.png"
                  alt=""
                  width={940}
                  height={618}
                  sizes="(max-width:1024px) 94vw, 896px"
                  quality={90}
                  className="mx-auto h-auto w-full drop-shadow-xl"
                  aria-hidden
                  priority={false}
                />
                {/* Centrado óptico en el azul (bajo el rojo, sobre el botón) */}
                <div className="absolute left-1/2 top-[49.5%] z-10 w-[78%] -translate-x-1/2 -translate-y-1/2 text-center text-white sm:top-[50.5%] sm:w-[68%] lg:w-[72%]">
                  <p className="text-[clamp(0.75rem,2.2vw,1.05rem)] font-bold uppercase leading-tight tracking-[0.14em] text-brand-yellow sm:text-base lg:text-lg xl:text-xl">
                    Únete a nuestro
                  </p>
                  <h2 className="mt-1 font-display text-[clamp(1.85rem,7.2vw,3rem)] font-black leading-[1.05] whitespace-nowrap sm:text-[clamp(2.75rem,4.5vw,4.25rem)]">
                    Equipo Increíble
                  </h2>
                </div>

                {/* Debajo del bloque de texto */}
                <div className="absolute left-1/2 top-[82%] z-30 w-max -translate-x-1/2 sm:top-[80%]">
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="min-h-12 bg-white px-8 text-base shadow-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                  >
                    <Link href="/contacto">Envía tu solicitud</Link>
                  </Button>
                </div>
              </div>

              <Image
                src="/images/home/staff-circle.png"
                alt="Equipo Incredible Pizza"
                width={1024}
                height={1002}
                sizes="(max-width:640px) 120px, 320px"
                quality={90}
                className="float-soft absolute -left-6 -bottom-4 z-20 w-[7.25rem] drop-shadow-lg sm:-left-24 sm:-bottom-8 sm:w-[15.7rem] md:-left-32 md:w-[20.2rem]"
              />
              <Image
                src="/images/home/staff-checkered-solid.png"
                alt="Staff Incredible Pizza"
                width={1024}
                height={1024}
                sizes="(max-width:640px) 120px, 320px"
                quality={90}
                className="float-soft absolute -right-6 -top-5 z-20 w-[7.25rem] drop-shadow-lg sm:-right-24 sm:-top-10 sm:w-[15.7rem] md:-right-32 md:w-[20.2rem]"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
