"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  alt: string;
};

type GalleryCarouselProps = {
  items: readonly GalleryItem[];
  eyebrow?: string;
  title?: string;
  /** When false, only the carousel stage renders (no eyebrow/title row). */
  showHeader?: boolean;
};

export function GalleryCarousel({
  items,
  eyebrow = "Momentos",
  title = "Galería",
  showHeader = true,
}: GalleryCarouselProps) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (count <= 1 || paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 5000);

    return () => window.clearInterval(id);
  }, [count, paused]);

  if (count === 0) return null;

  const goPrev = () => setActive((i) => (i - 1 + count) % count);
  const goNext = () => setActive((i) => (i + 1) % count);

  const offsets = [-2, -1, 0, 1, 2] as const;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={cn(
          "mb-4 flex items-end gap-4 px-1 sm:mb-5",
          showHeader ? "justify-between" : "justify-end",
        )}
      >
        {showHeader ? (
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-brand-ink/55">
              {eyebrow}
            </p>
            <p className="mt-0.5 font-display text-2xl font-black leading-none text-brand-ink sm:text-3xl">
              {title}
            </p>
          </div>
        ) : null}
        <p className="tabular-nums text-sm font-extrabold text-brand-ink/70 sm:text-base">
          <span className="text-brand-red">{String(active + 1).padStart(2, "0")}</span>
          <span className="mx-1.5 text-brand-ink/30">/</span>
          <span>{String(count).padStart(2, "0")}</span>
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-[1.75rem] bg-brand-ink/[0.06] ring-1 ring-brand-ink/10 sm:rounded-[2rem]"
        style={{ perspective: "1200px" }}
        onTouchStart={(e) => {
          touchStartX.current = e.changedTouches[0]?.clientX ?? null;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current;
          const end = e.changedTouches[0]?.clientX;
          touchStartX.current = null;
          setPaused(false);
          if (start == null || end == null) return;
          const delta = end - start;
          if (Math.abs(delta) < 40) return;
          if (delta > 0) goPrev();
          else goNext();
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,194,14,0.28), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex h-[340px] items-center justify-center sm:h-[400px] lg:h-[460px]">
          <div className="absolute inset-x-0 bottom-10 top-10 flex items-center justify-center sm:bottom-12 sm:top-12 lg:bottom-14 lg:top-14 [transform-style:preserve-3d]">
            {offsets.map((offset) => {
              const index = (active + offset + count * 3) % count;
              const item = items[index];
              const isActive = offset === 0;
              const abs = Math.abs(offset);

              return (
                <button
                  key={offset}
                  type="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={isActive ? item.alt : `Ver foto ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => {
                    if (offset === 0) return;
                    setActive(index);
                  }}
                  className={cn(
                    "absolute left-1/2 top-1/2 m-0 w-[56%] max-w-[250px] appearance-none border-0 bg-transparent p-0 sm:w-[36%] sm:max-w-[290px] lg:max-w-[330px]",
                    "transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                    isActive ? "z-30 cursor-default" : "z-20 cursor-pointer",
                    abs === 2 && "pointer-events-none sm:pointer-events-auto",
                  )}
                  style={{
                    transform: [
                      "translate(-50%, -50%)",
                      `translateX(${offset * (abs === 2 ? 62 : 58)}%)`,
                      `translateZ(${isActive ? 24 : abs === 1 ? -90 : -170}px)`,
                      `rotateY(${offset * -16}deg)`,
                      `scale(${isActive ? 1 : abs === 1 ? 0.82 : 0.68})`,
                    ].join(" "),
                    opacity: abs === 2 ? 0.35 : abs === 1 ? 0.72 : 1,
                    filter: isActive ? "none" : "saturate(0.85) brightness(0.95)",
                  }}
                >
                  <div
                    className={cn(
                      "relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#fff8e0] transition duration-500 sm:rounded-[1.35rem]",
                      isActive
                        ? "shadow-[0_18px_40px_rgba(35,31,32,0.28)] ring-2 ring-white/90"
                        : "shadow-[0_10px_24px_rgba(35,31,32,0.18)] ring-1 ring-white/40",
                    )}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes={isActive ? "(max-width:640px) 70vw, 340px" : "220px"}
                      quality={90}
                      className="object-cover object-center"
                      draggable={false}
                      priority={isActive}
                    />
                    {!isActive && (
                      <span className="absolute inset-0 bg-brand-ink/10" aria-hidden />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <ArrowButton
            direction="prev"
            onClick={goPrev}
            className="absolute left-2 z-40 sm:left-4 lg:left-6"
          />
          <ArrowButton
            direction="next"
            onClick={goNext}
            className="absolute right-2 z-40 sm:right-4 lg:right-6"
          />
        </div>

        <div className="relative px-5 pb-5 pt-1 sm:px-8 sm:pb-6">
          <div className="flex justify-center gap-1.5" role="tablist" aria-label="Galería">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Ir a foto ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active
                    ? "w-7 bg-brand-ink"
                    : "w-1.5 bg-brand-ink/30 hover:bg-brand-ink/50",
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        Foto {active + 1} de {count}
      </span>
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Imagen anterior" : "Imagen siguiente"}
      onClick={onClick}
      className={cn(
        "flex size-11 items-center justify-center rounded-full border border-white/50 bg-white/85 text-brand-ink shadow-[0_8px_20px_rgba(35,31,32,0.18)] backdrop-blur-md transition hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink sm:size-12",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {direction === "prev" ? (
          <path d="M15 6 9 12l6 6" />
        ) : (
          <path d="m9 6 6 6-6 6" />
        )}
      </svg>
    </button>
  );
}
