import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/fiestas",
    "/juegos",
    "/eventos",
    "/menu",
    "/quienes-somos",
    "/promociones",
    "/contacto",
    "/aviso-de-privacidad",
    "/terminos",
    "/facturacion",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
