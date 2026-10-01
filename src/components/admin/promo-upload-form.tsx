"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ImagePlus, X } from "lucide-react";
import { uploadPromotionAction } from "@/lib/admin/promo-actions";
import { toast } from "@/components/admin/toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 4 * 1024 * 1024;
const MAX_QUEUE = 20;

type QueueItem = {
  id: string;
  file: File;
  preview: string;
  title: string;
  publishNow: boolean;
};

function validateFile(file: File): string | null {
  if (!ALLOWED.has(file.type)) return `${file.name}: usa JPG, PNG, WebP o GIF.`;
  if (file.size > MAX_BYTES) return `${file.name}: supera 4 MB.`;
  return null;
}

function titleFromFilename(name: string) {
  return name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
}

export function PromoUploadForm() {
  const router = useRouter();
  const inputId = useId();
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const queueRef = useRef(queue);
  queueRef.current = queue;

  useEffect(() => {
    return () => {
      for (const item of queueRef.current) URL.revokeObjectURL(item.preview);
    };
  }, []);

  function addFiles(list: FileList | File[]) {
    const incoming = Array.from(list);
    if (incoming.length === 0) return;

    const room = MAX_QUEUE - queue.length;
    if (room <= 0) {
      toast("error", "La cola ya tiene 20 promociones. Confirma o quita alguna.");
      return;
    }

    const accepted: QueueItem[] = [];
    let firstError: string | null = null;
    let overflow = false;

    for (const file of incoming) {
      if (accepted.length >= room) {
        overflow = true;
        break;
      }
      const error = validateFile(file);
      if (error) {
        firstError ??= error;
        continue;
      }
      accepted.push({
        id: crypto.randomUUID(),
        file,
        preview: URL.createObjectURL(file),
        title: titleFromFilename(file.name),
        publishNow: true,
      });
    }

    if (accepted.length > 0) setQueue((current) => [...current, ...accepted]);
    if (firstError) toast("error", firstError);
    else if (overflow) toast("error", "Solo caben 20 promociones en la cola.");
  }

  function removeItem(id: string) {
    setQueue((current) => {
      const item = current.find((entry) => entry.id === id);
      if (item) URL.revokeObjectURL(item.preview);
      return current.filter((entry) => entry.id !== id);
    });
  }

  function updateItem(id: string, patch: Partial<Pick<QueueItem, "title" | "publishNow">>) {
    setQueue((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function confirmAll() {
    if (queue.length === 0) {
      toast("error", "Suelta al menos una imagen.");
      return;
    }

    const batch = queue;
    startTransition(async () => {
      const failed: QueueItem[] = [];
      let uploaded = 0;

      for (let index = 0; index < batch.length; index += 1) {
        const item = batch[index];
        setProgress(`Subiendo ${index + 1} de ${batch.length}…`);
        const formData = new FormData();
        formData.set("image", item.file);
        formData.set("title", item.title);
        if (item.publishNow) formData.set("publishNow", "on");

        try {
          const result = await uploadPromotionAction(formData);
          if (result.ok === false) {
            toast("error", result.error);
            failed.push(...batch.slice(index));
            break;
          }
          uploaded += 1;
          URL.revokeObjectURL(item.preview);
        } catch {
          toast("error", "No se pudo subir. Revisa Blob en Vercel o el tamaño de la foto.");
          failed.push(...batch.slice(index));
          break;
        }
      }

      setQueue(failed);
      setProgress(null);
      if (uploaded > 0) {
        toast(
          "success",
          uploaded === 1 ? "1 promoción lista." : `${uploaded} promociones listas.`,
        );
        router.refresh();
      }
    });
  }

  const slotsLeft = MAX_QUEUE - queue.length;

  return (
    <div className="space-y-5">
      <div className="rounded-[1.75rem] border-2 border-brand-ink/10 bg-white p-5 shadow-[0_10px_28px_rgba(26,43,86,0.08)] sm:p-6">
        <div>
          <h2 className="font-display text-xl font-black text-brand-blue">Subir promociones</h2>
          <p className="mt-1 text-sm leading-relaxed text-brand-ink/65">
            Arrastra hasta <span className="font-semibold text-brand-ink">20 imágenes</span>. Cada
            una queda en cola para ponerle nombre y decidir si se publica. Nada se sube hasta que
            confirmes.
          </p>
        </div>

        <input
          id={inputId}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          className="sr-only"
          onChange={(event) => {
            if (event.target.files) addFiles(event.target.files);
            event.target.value = "";
          }}
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
            addFiles(event.dataTransfer.files);
          }}
          className={cn(
            "mt-5 flex min-h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.35rem] border-2 border-dashed px-4 py-6 text-center transition",
            dragOver
              ? "border-brand-orange bg-brand-cream"
              : "border-brand-ink/20 bg-[#fff8e8] hover:border-brand-orange",
            pending && "pointer-events-none opacity-60",
          )}
        >
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-yellow text-brand-ink">
            <ImagePlus className="size-7" aria-hidden />
          </span>
          <span className="text-sm font-extrabold text-brand-ink">Suelta los artes aquí</span>
          <span className="text-xs font-semibold text-brand-ink/60">
            JPG o PNG, máx. 4 MB cada una · {slotsLeft} lugares libres
          </span>
        </label>
      </div>

      {queue.length > 0 ? (
        <ol className="space-y-4" aria-label="Cola de promociones por confirmar">
          {queue.map((item, index) => (
            <li
              key={item.id}
              className="rounded-[1.75rem] border-2 border-brand-ink/10 bg-white p-5 shadow-[0_10px_28px_rgba(26,43,86,0.08)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-orange">
                    En cola · {index + 1} de {queue.length}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-black text-brand-blue">
                    Subir promoción
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  disabled={pending}
                  aria-label={`Quitar ${item.title || item.file.name} de la cola`}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition hover:bg-brand-cream disabled:opacity-50"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[7.5rem_1fr] sm:items-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.preview}
                  alt=""
                  className="aspect-[3/4] w-full max-w-[7.5rem] rounded-xl object-contain bg-[#fff8e8] shadow-[0_8px_20px_rgba(35,31,32,0.18)]"
                />
                <div className="space-y-4">
                  <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
                    Título
                    <input
                      value={item.title}
                      disabled={pending}
                      onChange={(event) => updateItem(item.id, { title: event.target.value })}
                      className="h-12 rounded-xl border border-black/15 px-4 text-sm font-semibold normal-case tracking-normal outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                    />
                  </label>
                  <label className="flex min-h-12 items-center gap-3 text-sm font-semibold">
                    <input
                      type="checkbox"
                      className="size-5"
                      checked={item.publishNow}
                      disabled={pending}
                      onChange={(event) =>
                        updateItem(item.id, { publishNow: event.target.checked })
                      }
                    />
                    Publicar ahora en el sitio
                  </label>
                  <p className="truncate text-xs font-semibold text-brand-ink/50">{item.file.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="button"
          className="w-full sm:w-auto"
          disabled={pending || queue.length === 0}
          onClick={confirmAll}
        >
          {pending
            ? (progress ?? "Subiendo…")
            : queue.length === 0
              ? "Confirmar promociones"
              : `Confirmar ${queue.length} ${queue.length === 1 ? "promoción" : "promociones"}`}
        </Button>
        {queue.length > 0 && !pending ? (
          <p className="text-sm text-brand-ink/60">
            Revisa nombres y “Publicar ahora” antes de confirmar.
          </p>
        ) : null}
      </div>
    </div>
  );
}
