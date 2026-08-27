import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FullImage } from "@/components/ui/full-image";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark" | "yellow";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-xs font-extrabold uppercase tracking-[0.22em]",
            tone === "yellow" ? "text-brand-ink" : "text-brand-yellow",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",
          tone === "light" && "text-white",
          tone === "dark" && "text-brand-blue",
          tone === "yellow" && "text-brand-ink",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-brand-ink/80" : "text-white/90",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  cta?: string;
};

export function FeatureCard({
  title,
  description,
  image,
  href,
  cta = "Ver más",
}: FeatureCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-3 shadow-lg sm:p-4">
      <FullImage
        src={image}
        alt={title}
        width={1200}
        height={900}
        sizes="(max-width:768px) 100vw, 33vw"
        rounded="rounded-[1.25rem]"
      />
      <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
 <h3 className="font-display text-xl font-black text-brand-blue">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-brand-ink/75">{description}</p>
        <Button asChild variant="outlineDark" size="sm" className="min-h-11 w-full sm:w-auto">
          <Link href={href}>{cta}</Link>
        </Button>
      </div>
    </article>
  );
}

type CircleFeatureProps = {
  title: string;
  description: string;
  image: string;
};

export function CircleFeature({ title, description, image }: CircleFeatureProps) {
  return (
    <article className="text-center">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        sizes="(max-width:640px) 160px, 192px"
        quality={90}
        className="mx-auto mb-4 size-32 rounded-full border-4 border-white object-contain shadow-md sm:size-40"
      />
 <h3 className="font-display text-lg font-black text-brand-yellow">{title}</h3>
      <p className="mt-2 text-sm text-white/90">{description}</p>
    </article>
  );
}

type PackageCardProps = {
  name: string;
  price: string;
  features: string[];
  mascot?: string;
  href?: string;
};

export function PackageCard({
  name,
  price,
  features,
  mascot,
  href = "/fiestas#cotizar",
}: PackageCardProps) {
  return (
    <article className="relative flex h-full flex-col rounded-[1.75rem] bg-white p-6 pt-10 shadow-xl">
      {mascot ? (
        <Image
          src={mascot}
          alt=""
          width={160}
          height={160}
          sizes="80px"
          className="absolute -top-10 left-1/2 size-20 -translate-x-1/2 object-contain"
        />
      ) : null}
 <h3 className="font-display text-center text-lg font-black text-brand-blue">{name}</h3>
      <p className="mt-2 text-center font-display text-3xl font-black text-brand-red">{price}</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-ink/80">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="font-black text-brand-orange">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="mt-6 w-full" variant="secondary">
        <Link href={href}>Agenda tu fiesta</Link>
      </Button>
    </article>
  );
}

type MenuItemCardProps = {
  name: string;
  description: string;
  price: string;
  image?: string;
};

export function MenuItemCard({ name, description, price, image }: MenuItemCardProps) {
  return (
    <article className="text-center">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={440}
          height={440}
          sizes="(max-width:640px) 60vw, 220px"
          quality={90}
          className="mx-auto mb-4 h-auto w-full max-w-[220px] object-contain drop-shadow-xl"
        />
      ) : null}
 <h3 className="font-display text-lg font-black text-brand-yellow">{name}</h3>
      <p className="mt-1 text-sm text-white/85">{description}</p>
      <p className="mt-2 font-extrabold text-white">{price}</p>
    </article>
  );
}

type ValueCardProps = {
  number: string;
  title: string;
  description: string;
};

export function ValueCard({ number, title, description }: ValueCardProps) {
  return (
    <article className="rounded-[1.5rem] bg-white p-5 shadow-md">
      <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-orange text-sm font-black text-white">
        {number}
      </span>
 <h3 className="mt-3 font-display text-base font-black text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">{description}</p>
    </article>
  );
}
