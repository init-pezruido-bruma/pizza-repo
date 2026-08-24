import Image from "next/image";
import type { Metadata } from "next";
import { PageSection } from "@/components/layout/page-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Juegos y atracciones",
  description:
    "Go Karts, Laser Tag, Mini Boliche, Tiny Town y más de 120 videojuegos en Incredible Pizza Monterrey.",
  alternates: { canonical: "/juegos" },
};

const attractions = [
  {
    title: "Go Karts",
    description:
      "¡Súper divertidos y llenos de adrenalina! Asegúrate de vivir esta experiencia cuando visites Incredible Pizza.",
    image: "/images/juegos/gokarts.jpg",
    note: "Atracción incluida en tarjetas de tiempo platino, créditos y bonus.",
  },
  {
    title: "Mini Boliche",
    description:
      "¡Súper divertidos y llenos de adrenalina! Asegúrate de vivir esta experiencia cuando visites Incredible Pizza.",
    image: "/images/home/hero-juegos-increibles.jpg",
    note: "Distingue tu juego por el color de tarjeta, atracción incluida en tarjetas de créditos.",
  },
  {
    title: "Tagadá",
    description:
      "¡Disfruta de una increíble experiencia! ¿Te gusta desafiar la fuerza centrífuga? Tagadá te ofrece momentos de gran diversión en grupo.",
    image: "/images/home/card-juegos.jpg",
    note: "Atracción incluida en tarjetas de tiempo platino, créditos y bonus.",
  },
  {
    title: "Mini Golf",
    description:
      "Juega en nuestro campo de mini golf y disfruta de una gran cantidad de diversión. ¡La meta!… ¡Lograr un hoyo en uno!",
    image: "/images/home/gallery/carousel-04-v2.jpg",
    note: "Distingue tu juego por el color de tarjeta, atracción incluida en tarjetas de créditos.",
  },
  {
    title: "Resbaladeros Gigantes",
    description:
      "Sube a nuestros resbaladeros gigantes ¡No importa qué edad tengas, en Incredible Pizza nos divertimos todos!",
    image: "/images/juegos/trampolines.jpg",
    note: "Distingue tu juego por el color de tarjeta, atracción incluida en tarjetas de créditos.",
  },
  {
    title: "Bumpers Cars",
    description:
      "Disfruta de la música y el espectáculo de luces, da giros incontrolables y asegúrate de abrocharte el cinturón.",
    image: "/images/home/rapido-y-furioso.jpg",
    note: "Distingue tu juego por el color de tarjeta, atracción incluida en tarjetas de créditos.",
  },
  {
    title: "Laser Tag",
    description:
      "Demuestra tus habilidades y estrategias, reúne a tus amigos y pasen una tarde llena de acción.",
    image: "/images/juegos/laser-tag.jpg",
    note: "Atracción incluida en tarjetas de tiempo platino, créditos y bonus.",
  },
  {
    title: "Lost in Space",
    description:
      "Vuela al espacio con esta nueva atracción. Da vueltas para encontrar el camino al planeta Tierra. ¡Crea momentos increíbles!",
    image: "/images/juegos/racing-sim.jpg",
    note: "Atracción incluida en tarjetas de tiempo platino, créditos y bonus.",
  },
] as const;

const incredibleGames = [
  {
    title: "Golden Games (Cranes)",
    description:
      "Son todos los juegos que dan premio directo, como nuestras máquinas de garra donde podrás ganar peluches, dulces, accesorios para celular, etc. Reconócelos por su lector de tarjeta color Multicolor.",
    image: "/images/home/gallery/carousel-02-v2.jpg",
    note: "Estas máquinas únicamente aceptan tarjetas de créditos.",
  },
  {
    title: "Golden Games (Tokens)",
    description:
      "Demuestra tu destreza con las máquinas de monedas y obtén tickets físicos, que podrás canjear en nuestro mostrador de redención.",
    image: "/images/juegos/racing-sim.jpg",
    note: "Estas máquinas necesitan monedas que únicamente se pueden canjear con tarjetas de créditos.",
  },
  {
    title: "Golden Games",
    description:
      "En una jugada puedes ganar hasta 1000 tickets distínguelos por el lector de tarjeta multicolor.",
    image: "/images/home/hero-juegos-increibles.jpg",
    note: "Estas máquinas únicamente aceptan tarjetas de créditos.",
  },
] as const;

export default function JuegosPage() {
  return (
    <>
      {/* Hero — photo full-bleed + title mid-left + CTA bottom-right (flyer) */}
      <section className="relative overflow-hidden bg-[#0b1224] text-white">
        <div className="relative min-h-[28rem] sm:min-h-[34rem] lg:min-h-[42rem]">
          <div className="group absolute inset-0">
            <Image
              src="/images/juegos/hero-laser.jpg"
              alt="Familia jugando laser tag"
              width={3840}
              height={1714}
              priority
              sizes="100vw"
              className="img-zoom absolute inset-0 h-full w-full object-cover object-[center_40%]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25" />

          <div className="relative z-10 mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-center px-5 pb-10 pt-32 sm:min-h-[34rem] sm:px-8 sm:pb-12 sm:pt-36 lg:min-h-[42rem] lg:px-10 lg:pb-16 lg:pt-44">
            <div className="max-w-xl">
              <h1 className="hero-copy-in font-display text-[clamp(4rem,14vw,7.5rem)] font-black leading-[0.85] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
                Juegos
              </h1>
              <p className="hero-copy-in hero-copy-in-delay-1 mt-2 font-display text-lg font-medium italic tracking-wide text-white sm:text-xl lg:text-2xl">
                diviértete como nunca
              </p>
              <div className="hero-copy-in hero-copy-in-delay-2 mt-8">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="min-h-12 rounded-full border-2 border-black px-8 text-base font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:min-h-14 sm:px-10 sm:text-lg"
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

      {/* Atracciones — yellow→orange band + home-style angled bottom */}
      <section className="relative z-20 overflow-x-clip bg-white">
        <div
          className="relative z-20 w-full"
          style={{
            paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
            background:
              "linear-gradient(180deg, #f5d84a 0%, #f0a93a 42%, #e85a2a 78%, #d92b1f 100%)",
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - clamp(3.5rem, 6vw, 5.5rem)), 0 100%)",
          }}
        >
          <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-16 lg:px-10 lg:pb-14 lg:pt-20">
            <Reveal>
              <h2 className="mb-10 text-center font-display text-[clamp(4rem,12vw,6.5rem)] font-black leading-[0.9] text-white drop-shadow-[0_2px_0_rgba(35,31,32,0.12)] sm:mb-12">
                Atracciones
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {attractions.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 50}
                  className="group hover-lift flex flex-col overflow-hidden rounded-[1.35rem] bg-white shadow-[0_10px_24px_rgba(35,31,32,0.14)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={640}
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="img-zoom h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-3.5">
                    <h3 className="font-sans text-[0.95rem] font-extrabold uppercase tracking-[0.04em] text-[#2b5899] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-[0.8rem] leading-snug text-brand-ink/80 sm:text-[0.85rem]">
                      {item.description}
                    </p>
                    <p className="mt-auto pt-2 text-[9px] font-extrabold uppercase leading-snug tracking-[0.04em] text-[#5a8fc4] sm:text-[10px]">
                      {item.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 lg:items-stretch">
          <Reveal className="relative z-20 flex flex-col justify-center px-5 pb-28 pt-14 sm:px-8 sm:pb-32 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-12 xl:px-16">
            <div className="max-w-md">
              <h2 className="font-display text-[clamp(3rem,9vw,4.75rem)] font-black leading-[0.9] text-[#2b5899]">
                Videojuegos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-ink/85 sm:text-lg">
                Nuestro salón de juegos está lleno de más de 120 máquinas con todo tipo de
                diversión. Tenemos videojuegos con los que pasarás un día lleno de diversión.
              </p>
              <p className="mt-5 text-[11px] font-extrabold uppercase leading-snug tracking-[0.04em] text-[#2b5899] sm:text-xs">
                Todos los videojuegos están incluidos en las tarjetas de tiempo regular, platino,
                créditos y bonus
              </p>
              <p className="mt-2 text-[11px] font-extrabold uppercase leading-snug tracking-[0.04em] text-brand-red sm:text-xs">
                (Excepto Fast & Furious esta máquina únicamente acepta créditos)
              </p>
            </div>
          </Reveal>

          {/* Photo right — pulls up under Atracciones angle (same as home Fiesta) */}
          <Reveal className="group relative z-10 -mt-[clamp(3.75rem,7vw,5.5rem)] min-h-[320px] overflow-hidden sm:min-h-[400px] lg:-mt-[clamp(3.5rem,6vw,5.5rem)] lg:min-h-[36rem] xl:min-h-[40rem]">
            <Image
              src="/images/home/gallery/carousel-02-v2.jpg"
              alt="Sala de videojuegos y simuladores"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="img-zoom object-cover object-center"
            />
          </Reveal>

          {/* Cutout straddles Videojuegos → Juegos Increíbles (centered) */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-40 w-[min(34rem,94vw)] -translate-x-1/2 translate-y-[28%] sm:w-[min(40rem,80vw)] sm:translate-y-[30%] lg:w-[44rem] lg:translate-y-[32%] xl:w-[48rem]">
            <Reveal>
              <Image
                src="/images/juegos/gokart-sin-fondo.png"
                alt="Mamá e hijo en go-kart"
                width={838}
                height={502}
                sizes="(max-width:1024px) 94vw, 768px"
                unoptimized
                className="float-soft h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <PageSection
        className="relative z-10 bg-gradient-to-b from-[#6b2d5c] via-[#3d3f8f] to-[#2b5899] pb-16 pt-40 text-white sm:pb-24 sm:pt-48 lg:pt-52"
        innerClassName="max-w-6xl"
        reveal={false}
      >
        <Reveal>
          <h2 className="mb-10 text-center font-display text-[clamp(2.75rem,8vw,4.75rem)] font-black leading-[0.9] text-white sm:mb-14">
            Juegos Increíbles
          </h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {incredibleGames.map((game, i) => (
            <Reveal
              key={game.title}
              delay={i * 80}
              className="group flex flex-col text-left"
            >
              <div className="hover-lift relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] shadow-lg">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={800}
                  height={1000}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="img-zoom h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-[clamp(1.65rem,3.5vw,2.15rem)] font-black leading-[1.05] text-brand-yellow">
                {game.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
                {game.description}
              </p>
              <p className="mt-4 text-[10px] font-extrabold uppercase leading-snug tracking-[0.05em] text-brand-yellow sm:text-[11px]">
                {game.note}
              </p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Tiny Town — large photo behind, red→clear gradient reveals right half */}
      <section className="relative overflow-hidden bg-[#e31b23] text-white">
        <div className="relative min-h-[24rem] sm:min-h-[26rem] lg:min-h-[32rem]">
          {/* Photo behind, pinned to the right edge (no white gap) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/juegos/tiny-town.jpg"
              alt="Área Tiny Town para niños pequeños"
              fill
              sizes="100vw"
              className="scale-105 object-cover object-right opacity-90"
              priority={false}
            />
          </div>

          {/* Red veil: solid on left → fades so right half shows the photo */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(90deg, #e31b23 0%, rgba(227,27,35,0.88) 28%, rgba(227,27,35,0.45) 48%, rgba(227,27,35,0.12) 68%, rgba(227,27,35,0) 100%)",
            }}
            aria-hidden
          />

          {/* Copy on left */}
          <Reveal className="relative z-10 flex min-h-[24rem] w-full max-w-[48%] flex-col justify-center px-4 pb-20 pt-12 sm:min-h-[26rem] sm:px-8 sm:pb-16 sm:pt-14 lg:min-h-[32rem] lg:px-12 xl:px-16">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-yellow sm:text-base">
              Para los más pequeños
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.88] text-white drop-shadow-[0_1px_0_#f5d84a]">
              Tiny Town
            </h2>
            <p className="mt-3 inline-flex w-fit rounded-full border-2 border-brand-yellow bg-brand-yellow/15 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-yellow sm:text-sm">
              0–3 años · máx. 1 m de estatura
            </p>
            <div className="mt-5 space-y-1 text-sm leading-relaxed text-white sm:text-base lg:text-lg">
              <p>Tiny Town cuenta con:</p>
              <ul className="space-y-0.5">
                {["Laberinto", "Carrusel", "MiniTagadá"].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>y más</p>
            </div>
          </Reveal>

          {/* Mobile: message in a box (no ribbon) */}
          <Reveal className="absolute inset-x-3 bottom-3 z-20 sm:hidden">
            <p className="rounded-xl bg-gradient-to-r from-[#ef9a1a] via-[#f0b02a] to-[#f5c43a] px-3.5 py-2.5 text-center text-[0.85rem] font-extrabold uppercase leading-snug tracking-wide text-white shadow-[0_6px_16px_rgba(0,0,0,0.22)]">
              Para niños 0–3 años (límite de estatura 1 m)
            </p>
          </Reveal>

          {/* Desktop/tablet: diagonal ribbon */}
          <Reveal className="pointer-events-none absolute inset-0 z-20 hidden overflow-hidden sm:block">
            <div
              className="absolute flex items-center"
              style={{
                left: "36%",
                bottom: "-14%",
                width: "90%",
                height: "clamp(2.85rem, 5.8vw, 3.9rem)",
                transformOrigin: "left center",
                transform: "translateY(50%) rotate(-18deg)",
                background:
                  "linear-gradient(180deg, #f7d45a 0%, #f0b02a 42%, #e89414 100%)",
                boxShadow:
                  "0 6px 16px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)",
              }}
            >
              <p className="ml-[16%] whitespace-nowrap text-[clamp(0.95rem,2.2vw,1.4rem)] font-extrabold uppercase italic tracking-wide text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] sm:ml-[20%]">
                Para niños 0–3 años (límite de estatura 1 m)
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
