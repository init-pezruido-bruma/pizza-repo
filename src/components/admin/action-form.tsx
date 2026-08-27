"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { ActionResult } from "@/lib/admin/action-result";
import { toast } from "@/components/admin/toast";
import { cn } from "@/lib/utils";

export function ActionForm({
  action,
  success,
  className,
  children,
}: {
  action: (formData: FormData) => Promise<ActionResult | void>;
  success?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        startTransition(async () => {
          try {
            const result = await action(formData);
            if (result && result.ok === false) {
              toast("error", result.error);
              return;
            }
            if (success) toast("success", success);
            form.reset();
            router.refresh();
          } catch {
            toast("error", "No se pudo completar. Intenta de nuevo.");
          }
        });
      }}
    >
      <fieldset disabled={pending} className={cn("min-w-0", className)}>
        {children}
      </fieldset>
    </form>
  );
}
