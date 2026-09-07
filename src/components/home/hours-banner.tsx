"use client";

import { useEffect, useRef } from "react";

/**
 * Full-width hours strip: flat top, angled bottom.
 * Title + hours stay parallel to that bottom slope.
 */
export function HoursBanner() {
  const frameRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const box = boxRef.current;
    const title = titleRef.current;
    const hours = hoursRef.current;
    if (!frame || !box || !title || !hours) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const slopeAngle = () => {
      const width = box.offsetWidth || 1;
      const styles = window.getComputedStyle(box);
      const drop = Number.parseFloat(styles.paddingBottom) || 56;
      // Bottom edge rises left→right → CSS counter-clockwise (negative)
      return -(Math.atan(drop / width) * (180 / Math.PI));
    };

    const update = () => {
      raf = 0;
      const angle = slopeAngle();
      const rect = frame.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = reduced
        ? 0
        : (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
      const shiftY = reduced ? 0 : Math.max(-10, Math.min(10, progress * 14));
      const titleShift = reduced ? 0 : Math.max(-8, Math.min(8, progress * 12));

      box.style.transform = `translate3d(0, ${shiftY}px, 0)`;
      title.style.transform = `rotate(${angle}deg) translate3d(0, ${titleShift}px, 0)`;
      hours.style.transform = `rotate(${angle}deg)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative z-20 w-full overflow-x-clip"
      aria-label="Horarios de apertura"
    >
      <div
        ref={boxRef}
        className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 will-change-transform"
        style={{
          paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
          background: "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-yellow) 100%)",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - clamp(3.5rem, 6vw, 5.5rem)), 0 100%)",
          boxShadow: "0 10px 24px rgba(35, 31, 32, 0.16)",
        }}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-5 py-14 text-center sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:px-10 lg:py-[4.5rem] lg:text-left xl:gap-20">
          <p
            ref={titleRef}
            className="origin-center font-display text-[clamp(3.25rem,10vw,5.75rem)] font-black leading-[0.92] text-white drop-shadow-[0_3px_0_rgba(35,31,32,0.25)] will-change-transform lg:shrink-0"
          >
            ¡Abrimos todos
            <br className="lg:hidden" /> los días!
          </p>

          <div
            ref={hoursRef}
            className="flex w-full max-w-md origin-center flex-col gap-3 will-change-transform lg:w-auto lg:max-w-none lg:min-w-[24.5rem] lg:shrink-0"
          >
            <HourRow label="Lun – Vie" time="12:00 PM – 9:00 PM" />
            <HourRow label="Sáb – Dom" time="11:00 AM – 9:00 PM" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HourRow({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex w-full items-center justify-between gap-5 whitespace-nowrap rounded-full bg-brand-ink/90 px-5 py-3 text-white shadow-[0_4px_0_0_rgba(255,194,14,0.85)] lg:min-w-[24.5rem] lg:gap-6 lg:px-8 lg:py-3.5">
      <span className="inline-flex w-[7.25rem] shrink-0 items-center justify-center rounded-full bg-brand-yellow px-3.5 py-1.5 text-xs font-black uppercase tracking-wide text-brand-ink lg:w-[8rem] lg:text-sm">
        {label}
      </span>
      <span className="shrink-0 text-base font-extrabold tabular-nums tracking-wide sm:text-lg">
        {time}
      </span>
    </div>
  );
}
