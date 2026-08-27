import { getMailSettings, isResendConfigured } from "@/lib/mail/send";
import { updateMailSettingsAction } from "@/lib/admin/quote-actions";
import { ActionForm } from "@/components/admin/action-form";
import { Button } from "@/components/ui/button";

export default async function CorreoAdminPage() {
  const settings = await getMailSettings();
  const connected = isResendConfigured();
  let recipients: string[] = [];
  try {
    recipients = JSON.parse(settings.recipients) as string[];
  } catch {
    recipients = [];
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[clamp(1.85rem,6vw,2.75rem)] font-black">Correo</h1>
        <p className="mt-1 text-sm text-brand-ink/70">
          Destinatarios y remitente. La API key de Resend vive solo en variables de entorno.
        </p>
      </div>

      <div
        className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
          connected
            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
            : "border-amber-200 bg-amber-50 text-amber-900"
        }`}
      >
        {connected
          ? "Resend conectado: RESEND_API_KEY detectada."
          : "Sin RESEND_API_KEY: las cotizaciones se guardan, pero no se envían correos."}
      </div>

      <ActionForm
        action={updateMailSettingsAction}
        success="Correo actualizado."
        className="max-w-xl space-y-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6"
      >
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Nombre remitente
          <input
            name="fromName"
            defaultValue={settings.fromName}
            required
            className="h-12 rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Email remitente
          <input
            name="fromEmail"
            type="email"
            defaultValue={settings.fromEmail}
            required
            className="h-12 rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Destinatarios (uno por línea o separados por coma)
          <textarea
            name="recipients"
            rows={5}
            defaultValue={recipients.join("\n")}
            required
            className="rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="flex min-h-12 items-center gap-3 text-sm font-semibold">
          <input
            type="checkbox"
            name="enabled"
            defaultChecked={settings.enabled}
            className="size-5"
          />
          Envío de correos habilitado
        </label>
        <Button type="submit" className="w-full sm:w-auto">
          Guardar
        </Button>
      </ActionForm>
    </div>
  );
}
