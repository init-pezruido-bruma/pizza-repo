import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  if (!siteConfig.whatsappEnabled) return null;

  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola Incredible Pizza, me gustaría cotizar / pedir información.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex size-12 items-center justify-center rounded-full bg-brand-whatsapp text-white shadow-lg transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow sm:bottom-5 sm:right-5"
    >
      <MessageCircle className="size-6" fill="currentColor" />
    </a>
  );
}
