"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ImagePlus } from "lucide-react";
import { uploadPromotionAction } from "@/lib/admin/promo-actions";
import { toast } from "@/components/admin/toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 4 * 1024 * 1024;

function validateFile(file: File): string | null {
  if (!ALLOWED.has(file.type)) return "Usa JPG, PNG, WebP o GIF.";
  if (file.size > MAX_BYTES) return "La imagen supera 4 MB. Comprímela un poco.";
  return null;
}

export function PromoUploadForm() {
  const router = useRouter();
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  function pickFile(next: File | null) {
    if (!next) {
      setFile(null);
      return;
    }
    const error = validateFile(next);
    if (error) {
      toast("error", error);
      return;
    }
    setFile(next);
  }

  return (
    <form
      className="space-y-5 rounded-[1.75rem] border-2 border-brand-ink/10 bg-white p-5 shadow-[0_10px_28px_rgba(26,43,86,0.08)] sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!file) {
          toast("error", "Elige o suelta una imagen.");
          return;
        }
        const formData = new FormData(form);
        formData.set("image", file);
        startTransition(async () => {
          try {
            const result = await uploadPromotionAction(formData);
            if (result.ok === false) {
              toast("error", result.error);
              return;
            }
            toast("success", "Promoción lista.");
            form.reset();
            setFile(null);
            router.refresh();
          } catch {
            toast("error", "No se pudo subir. Revisa Blob en Vercel o el tamaño de la foto.");
          }
        });
      }}
    >
      <div>
        <h2 className="font-display text-xl font-black text-brand-blue">Subir promoción</h2>
        <p className="mt-1 text-sm leading-relaxed text-brand-ink/65">
          Vertical 4:5, ideal <span className="font-semibold text-brand-ink">1080 × 1350</span>.
          JPG o PNG, máx. 4 MB.
        </p>
      </div>

      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
        Título (opcional)
        <input
          name="title"
          className="h-12 rounded-xl border border-black/15 px-4 text-sm font-semibold outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
        />
      </label>

      <div>
        <input
          ref={inputRef}
          id={inputId}
          name="image"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="sr-only"
          onChange={(event) => pickFile(event.target.files?.[0] ?? null)}
        />
        <label
          htmlFor={inputId}
          onDragOver={(event) => {
            event.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragOver(false);
            pickFile(event.dataTransfer.files[0] ?? null);
          }}
          className={cn(
            "flex min-h-52 cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.35rem] border-2 border-dashed px-4 py-6 text-center transition",
            dragOver
              ? "border-brand-orange bg-brand-cream"
              : "border-brand-ink/20 bg-[#fff8e8] hover:border-brand-orange",
          )}
        >
          {preview ? (
            <span className="relative block w-full max-w-[11rem] overflow-hidden rounded-xl bg-black/5 shadow-[0_8px_20px_rgba(35,31,32,0.18)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Vista previa" className="aspect-[4/5] w-full object-cover" />
            </span>
          ) : (
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-yellow text-brand-ink">
              <ImagePlus className="size-7" aria-hidden />
            </span>
          )}
          <span className="text-sm font-extrabold text-brand-ink">
            {file ? file.name : "Suelta el arte aquí"}
          </span>
          <span className="text-xs font-semibold text-brand-ink/60">
            o tócalo para elegir desde el teléfono
          </span>
        </label>
      </div>

      <label className="flex min-h-12 items-center gap-3 text-sm font-semibold">
        <input type="checkbox" name="publishNow" className="size-5" defaultChecked />
        Publicar ahora en el sitio
      </label>

      <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Subiendo…" : "Subir promoción"}
      </Button>
    </form>
  );
}
