import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "¿Quiénes somos?",
  description:
    "Conoce la historia, misión y valores familiares de Incredible Food & Fun en Monterrey.",
  alternates: { canonical: "/quienes-somos" },
};

const missionItems = [
  {
    number: "01",
    title: "Principios De Dios.",
    description: "Hemos elegido conducirnos de acuerdo a los principios de Dios.",
  },
  {
    number: "02",
    title: "Espíritu de Cooperación",
    description:
      "Deseamos hacer de nuestro trabajo una aventura, hecho bajo un espíritu de cooperación y diversión. Al hacer esto, nuestra meta se convierte en crear sólidas relaciones con nuestros empleados, clientes y proveedores.",
  },
  {
    number: "03",
    title: "Altos niveles de calidad",
    description:
      "Queremos alcanzar los más altos niveles de calidad en comida y servicio a través del entretenimiento a nuestros empleados, una gran actitud, un gran orgullo y una fuerte moral. Deseamos proveer una atmósfera en donde nuestros empleados puedan aprender y crecer a través de nuestros “valores familiares”.",
  },
  {
    number: "04",
    title: "Experiencia única",
    description:
      "Nuestra meta es dar la bienvenida a cada cliente como a un viejo amigo y proveer una experiencia única a las familias a través de la diversión, del entretenimiento y de una excelente comida.",
  },
  {
    number: "05",
    title: "Influencia positiva",
    description:
      "Queremos estar activamente involucrados con los niños de nuestra comunidad y ser una influencia positiva en sus vidas.",
  },
] as const;

const values = [
  {
    number: "01",
    title: "Hablar bonito",
    description:
      "Siempre comunicarnos positivamente y procurar a los demás a través del respeto mutuo.",
    badge: "bg-gradient-to-br from-[#e23a3a] to-[#3d5a9c]",
  },
  {
    number: "02",
    title: "Verse y sentirse bien",
    description: "Ser atentos, vestir apropiadamente y practicar una buena higiene personal.",
    badge: "bg-gradient-to-br from-[#e4d24a] to-[#5a8aad]",
  },
  {
    number: "03",
    title: "Honesto, leal y amigable.",
    description: "Ser honesto, leal, práctico y amigable.",
    badge: "bg-gradient-to-br from-[#f5c84a] to-[#e85a28]",
  },
  {
    number: "04",
    title: "Trabajar seguro",
    description: "Siempre trabajar de manera segura, cuidando a los demás como a nosotros mismos.",
    badge: "bg-gradient-to-br from-[#f5c84a] to-[#e04a28]",
  },
  {
    number: "05",
    title: "En equipo, siempre",
    description: "Trabajar siempre en equipo sirviendo a los demás y ayudando en donde se necesite.",
    badge: "bg-gradient-to-br from-[#8b3d9e] to-[#3d7ab8]",
  },
  {
    number: "06",
    title: "El cambio nos emociona",
    description:
      "Tomar los cambios con emoción y con espíritu de enseñanza, sabiendo que siempre estamos buscando mejorar lo que hacemos.",
    badge: "bg-gradient-to-br from-[#e8d44a] to-[#4a8a8a]",
  },
] as const;

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero — naranja→rojo + copy + Compra aquí */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-orange via-[#e85a2a] to-brand-red text-white">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-40 sm:px-8 sm:pb-12 sm:pt-48 lg:px-10 lg:pb-14 lg:pt-56">
          <Reveal>
            <h1 className="hero-copy-in text-center font-display text-[clamp(3rem,9vw,5rem)] font-black leading-[0.92] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              ¿Quiénes somos?
            </h1>
            <p className="hero-copy-in hero-copy-in-delay-1 mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-white/95 sm:text-lg">
              Somos el centro de entretenimiento familiar más increíble de Monterrey. Desde hace más
              de 19 años llenamos de diversión a las familias regias con buffet ilimitado, pizza
              recién horneada, juegos y atracciones para todas las edades. Aquí no solo se come
              increíble… ¡se vive increíble!
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-8 flex justify-center sm:mt-10">
            <div className="hero-copy-in hero-copy-in-delay-2">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full border-2 border-black bg-brand-yellow px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-yellow sm:min-h-14 sm:px-10 sm:text-base"
              >
                <a href={siteConfig.storeUrl} target="_blank" rel="noopener noreferrer">
                  Compra aquí
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Foto full-bleed Monterrey */}
      <section className="relative w-full overflow-hidden bg-brand-ink">
        <Reveal className="group relative min-h-[240px] w-full sm:min-h-[360px] lg:min-h-[460px]">
          <Image
            src="/images/about/monterrey-hero.jpg"
            alt="Monterrey es Increíble — mascota y auto clásico"
            fill
            priority
            sizes="100vw"
            className="img-zoom object-cover object-[center_40%]"
          />
        </Reveal>
      </section>

      {/* Experiencias Increíbles — amarillo→azul */}
      <section className="bg-gradient-to-r from-brand-yellow via-[#f0c83a] to-brand-blue py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-10">
          <Reveal>
            <h2 className="max-w-[12ch] font-display text-[clamp(2.5rem,7vw,4.25rem)] font-black leading-[0.92] drop-shadow-[0_2px_0_rgba(35,31,32,0.12)] sm:-rotate-1">
              Experiencias Increíbles
            </h2>
          </Reveal>
          <Reveal delay={60} className="space-y-5 text-base font-semibold leading-relaxed text-white sm:text-lg">
            <p>
              Nuestro objetivo es ofrecer a las familias un sitio seguro, muy divertido y con una
              excelente propuesta de comida. Sabemos que la primera vez nos visitan por la novedad,
              pero las siguientes por la increíble experiencia que reciben en su visita.
            </p>
            <p>
              Si no conoces Incredible Pizza, date la oportunidad de visitarnos, estamos seguros de
              que te desearás quedar muchas horas y será tu lugar favorito de entretenimiento
              familiar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Familias — texto blanco + foto buffet, borde rojo inferior */}
      <section className="border-b-[3px] border-brand-red bg-white">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:items-stretch">
          <Reveal className="order-2 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:order-1 lg:px-10 lg:py-20">
            <div className="space-y-4 text-base leading-relaxed text-brand-ink sm:text-[1.05rem]">
              <p>
                En Incredible Food & Fun reunimos a las familias y amigos a través de la buena comida
                y gran diversión.
              </p>
              <p>
                Cada grupo viene a disfrutar de experiencias increíbles y crear recuerdos
                memorables, logrando que regresen una y otra vez.
              </p>
              <p>
                Estamos involucrados directamente con los niños aportando una influencia positiva en
                sus vidas.
              </p>
              <p>
                A quien contratamos, es la decisión más importante que tomamos. Promovemos un
                ambiente de trabajo arduo, honesto y divertido. Fomentamos el desarrollo de valores
                positivos y de buena moral. Proveemos un ambiente divertido para entrenamiento,
                desarrollo y reconocimiento de nuestros empleados para su crecimiento con la
                organización.
              </p>
              <p>
                Mantenemos nuestra reputación como líderes en el Entretenimiento Familiar, por la
                implementación de ideas únicas e innovadoras, que logran unir a las familias a
                través de buena comida, diversión, familia y amigos.
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={60}
            className="group relative order-1 min-h-[260px] sm:min-h-[340px] lg:order-2 lg:min-h-full"
          >
            <Image
              src="/images/about/buffet-interior.jpg"
              alt="Buffet de Incredible Pizza"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="img-zoom object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Declaración de misión — naranja→amarillo */}
      <section className="bg-gradient-to-b from-[#e85a2a] via-brand-orange to-brand-yellow py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">
          <Reveal>
            <h2 className="max-w-[10ch] font-display text-[clamp(2.5rem,6.5vw,3.75rem)] font-black leading-[0.95]">
              Declaración de Nuestra misión
            </h2>
          </Reveal>
          <ol className="space-y-0">
            {missionItems.map((item, i) => (
              <Reveal key={item.number} delay={i * 40} as="li">
                <div
                  className={`grid grid-cols-[auto_1fr] items-start gap-4 py-5 sm:gap-5 sm:py-6 ${
                    i < missionItems.length - 1 ? "border-b border-white/35" : ""
                  }`}
                >
                  <span className="min-w-[2.5rem] text-2xl font-black tabular-nums tracking-tight sm:text-3xl">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.35rem,2.8vw,1.75rem)] font-black leading-[1.05]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/95 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Valores Familiares — azul→púrpura→rojo + badges con gradientes del flyer */}
      <section className="bg-gradient-to-b from-[#446daa] via-[#7a4a78] to-[#e13c30] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="max-w-[14ch] font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black italic leading-[0.95]">
              Valores Familiares
              <br />
              Nuestras Metas Son:
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
            {values.map((value, i) => (
              <Reveal key={value.number} delay={i * 40} className="relative pt-5">
                <span
                  className={`absolute left-4 top-0 z-10 inline-flex size-11 items-center justify-center rounded-full text-sm font-black italic text-white shadow-md sm:size-12 ${value.badge}`}
                >
                  {value.number}
                </span>
                <div className="hover-lift h-full rounded-[1.35rem] bg-white px-5 pb-5 pt-9 text-brand-ink shadow-[0_10px_28px_rgba(0,0,0,0.18)] sm:px-6 sm:pb-6 sm:pt-10">
                  <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.65rem)] font-black italic leading-[1.05] text-brand-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/80 sm:text-[0.95rem]">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — rojo→naranja, ángulo hacia el footer */}
      <section className="relative z-20 -mb-[clamp(2.75rem,5vw,4.5rem)] overflow-x-clip">
        <div
          className="relative w-full"
          style={{
            paddingBottom: "clamp(2.75rem,5vw,4.5rem)",
            background: "linear-gradient(90deg, var(--brand-red) 0%, #f06a28 48%, #f5a028 100%)",
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - clamp(2.75rem, 5vw, 4.5rem)), 0 100%)",
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <Reveal className="w-full sm:flex-1">
              <h2 className="max-w-[16ch] text-center font-display text-[clamp(1.85rem,5vw,3rem)] font-black italic leading-[0.95] text-white sm:-rotate-2 sm:text-left">
                Ven a vivir la experiencia Incredible
              </h2>
            </Reveal>

            <Reveal delay={60} className="flex w-full justify-center sm:w-auto">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="min-h-12 w-full rounded-full border-2 border-black bg-white px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white sm:w-auto sm:min-h-14 sm:px-10 sm:text-base"
              >
                <Link href="/juegos">Ver más</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
