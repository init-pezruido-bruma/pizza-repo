"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastTone = "error" | "success";

type ToastItem = {
  id: number;
  tone: ToastTone;
  message: string;
};

type Listener = (item: ToastItem) => void;

const listeners = new Set<Listener>();
let nextId = 1;

export function toast(tone: ToastTone, message: string) {
  const item: ToastItem = { id: nextId++, tone, message };
  listeners.forEach((fn) => fn(item));
}

export function AdminToaster() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    const onToast: Listener = (item) => {
      setItems((prev) => [...prev, item]);
      window.setTimeout(() => {
        setItems((prev) => prev.filter((t) => t.id !== item.id));
      }, item.tone === "error" ? 8000 : 4500);
    };
    listeners.add(onToast);
    return () => {
      listeners.delete(onToast);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-col items-center gap-2 px-4"
      aria-live="assertive"
      aria-relevant="additions"
    >
      {items.map((item) => (
        <div
          key={item.id}
          role={item.tone === "error" ? "alert" : "status"}
          className={cn(
            "pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-2xl border-2 px-4 py-3 shadow-[0_12px_32px_rgba(35,31,32,0.18)]",
            item.tone === "error"
              ? "border-brand-red bg-white text-brand-red"
              : "border-brand-ink bg-brand-yellow text-brand-ink",
          )}
        >
          <p className="flex-1 text-sm font-semibold leading-snug">{item.message}</p>
          <button
            type="button"
            className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-black/5"
            aria-label="Cerrar aviso"
            onClick={() => setItems((prev) => prev.filter((t) => t.id !== item.id))}
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
      ))}
    </div>
  );
}
