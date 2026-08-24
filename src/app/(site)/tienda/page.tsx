import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site";

/** Legacy route — tienda en línea vive en el e‑commerce externo. */
export default function TiendaPage() {
  redirect(siteConfig.storeUrl);
}
