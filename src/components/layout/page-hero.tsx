import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  /** Gradient band hero (PDF fiestas/eventos/about) */
  variant?: "gradient" | "photo";
  /** For gradient: image beside copy (split) or full-bleed under copy (stack) */
  imageLayout?: "split" | "stack";
  gradientClassName?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition?: string;
  };
  circleImage?: {
    src: string;
    alt: string;
  };
  /** Text alignment when there is no side image */
  align?: "left" | "center";
  className?: string;
  contentClassName?: string;
};

/**
 * Inner-page hero aligned with home typography + PDF section rhythm.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  variant = "gradient",
  imageLayout = "split",
  gradientClassName = "bg-gradient-to-b from-brand-orange to-brand-red",
  image,
  circleImage,
  align = "left",
  className,
  contentClassName,
}: PageHeroProps) {
  if (variant === "photo" && image) {
    return (
      <section className={cn("relative overflow-hidden bg-brand-ink text-white", className)}>
        <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[34rem]">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            quality={90}
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: image.objectPosition ?? "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          <div
            className={cn(
              "relative z-10 mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-5 pb-10 pt-32 sm:min-h-[28rem] sm:px-8 sm:pb-12 sm:pt-36 lg:min-h-[34rem] lg:px-10 lg:pb-16 lg:pt-44",
              contentClassName,
            )}
          >
            {eyebrow ? (
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-yellow sm:text-sm">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-2 font-display text-[clamp(2.75rem,8vw,4.5rem)] font-black leading-[0.92] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
                {description}
              </p>
            ) : null}
            {children ? <div className="mt-7 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
          </div>
        </div>
      </section>
    );
  }

  const centered = align === "center" || (!image && imageLayout !== "stack");
  const copy = (
    <div
      className={cn(
        "space-y-5",
        imageLayout === "stack" && !centered && "text-left",
        image && imageLayout === "split" && "order-2 text-center lg:order-1 lg:text-left",
        centered && "mx-auto w-full max-w-5xl text-center",
      )}
    >
      {eyebrow ? (
        <p className="hero-copy-in text-xs font-extrabold uppercase tracking-[0.2em] text-brand-yellow sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={cn(
          "hero-copy-in hero-copy-in-delay-1 font-display font-black leading-[0.95]",
          centered
            ? "text-[clamp(2.5rem,7.5vw,5.5rem)]"
            : "text-[clamp(2.5rem,7vw,4rem)]",
        )}
      >
        {title}
      </h1>
      {description ? (
        <p
          className={cn(
            "hero-copy-in hero-copy-in-delay-2 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg",
            (centered || imageLayout === "split") && "mx-auto",
            image && imageLayout === "split" && "lg:mx-0",
          )}
        >
          {description}
        </p>
      ) : null}
      {children ? (
        <div
          className={cn(
            "hero-copy-in hero-copy-in-delay-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
            centered && "items-center justify-center sm:justify-center",
            image && imageLayout === "split" && "sm:justify-center lg:justify-start",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );

  if (imageLayout === "stack") {
    return (
      <section className={cn("relative overflow-hidden text-white", gradientClassName, className)}>
        <div
          className={cn(
            "mx-auto max-w-6xl px-5 pb-8 pt-32 sm:px-8 sm:pb-10 sm:pt-36 lg:px-10 lg:pb-12 lg:pt-44",
            contentClassName,
          )}
        >
          {copy}
        </div>
        {image ? (
          <div className="relative w-full">
            <div className="relative min-h-[240px] w-full overflow-hidden sm:min-h-[320px] lg:min-h-[420px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                quality={90}
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: image.objectPosition ?? "center center" }}
              />
            </div>
            {circleImage ? (
              <Image
                src={circleImage.src}
                alt={circleImage.alt}
                width={978}
                height={978}
                sizes="144px"
                className="absolute bottom-4 left-4 size-24 rounded-full border-4 border-brand-ink object-cover shadow-lg sm:bottom-6 sm:left-8 sm:size-36 lg:left-10"
              />
            ) : null}
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section className={cn("relative overflow-hidden text-white", gradientClassName, className)}>
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20",
          !contentClassName && (centered ? "pt-40 sm:pt-48 lg:pt-56" : "pt-32 sm:pt-36 lg:pt-44"),
          image && "lg:grid-cols-2 lg:gap-12",
          contentClassName,
        )}
      >
        {copy}

        {image ? (
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-xl sm:rounded-[1.75rem]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                quality={90}
                sizes="(max-width:1024px) 100vw, 560px"
                className="h-full w-full object-cover"
                style={{ objectPosition: image.objectPosition ?? "center center" }}
              />
            </div>
            {circleImage ? (
              <Image
                src={circleImage.src}
                alt={circleImage.alt}
                width={978}
                height={978}
                sizes="144px"
                className="absolute -bottom-5 left-2 size-24 rounded-full border-4 border-brand-ink object-cover shadow-lg sm:-bottom-6 sm:size-36"
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
