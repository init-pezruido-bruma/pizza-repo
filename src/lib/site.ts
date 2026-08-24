export const siteConfig = {
  name: "Incredible Pizza",
  legalName: "Incredible Pizza México",
  tagline: "Food and Fun",
  description:
    "El mejor centro de entretenimiento familiar con buffet, juegos, atracciones y fiestas inolvidables en Monterrey.",
  url: (() => {
    const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (fromEnv) return fromEnv.replace(/\/$/, "");
    // Staging actual; producción final: https://incrediblepizza.mx
    return "https://incrediblepizza.init.com.mx";
  })(),
  locale: "es_MX",
  phone: "(81) 1100-1214",
  phoneTel: "+528111001214",
  whatsapp: "528121971233",
  whatsappDisplay: "812 1971 233",
  email: "contacto@incrediblepizza.mx",
  address: {
    street: "Av. Lázaro Cárdenas 999, Brisas La Punta",
    city: "Monterrey",
    region: "N.L.",
    postalCode: "64790",
    country: "MX",
  },
  /** Google Maps — Incredible Pizza Monterrey */
  mapsQuery:
    "Incredible Pizza, Av. Lázaro Cárdenas 999, Brisas La Punta, 64790 Monterrey, Nuevo León, Mexico",
  hours: {
    weekdays: "Lunes a viernes: 11:00 AM – 9:00 PM",
    weekend: "Sábado y domingo: 11:00 AM – 9:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/incrediblepizzamx",
    instagram: "https://www.instagram.com/incrediblepizzamty/",
    tiktok: "https://www.tiktok.com/@ipcmty",
  },
  storeUrl: "https://tiendaenlinea.incrediblepizza.mx/app",
  /** Links directos de delivery — tiendas Incredible Pizza */
  delivery: {
    uber: "https://www.ubereats.com/mx-en/store/incredible-pizza/YXaIjIw0XKOXHaWi2WqvPA?diningMode=DELIVERY",
    rappi: "https://www.rappi.com.mx/restaurantes/1923462741-incredible-pizza",
    didi: "https://www.didi-food.com/es-MX/food/store/5764607705952813792/Increible-Pizza-Company/",
  },
} as const;

/** Orden exacto del mockup de header */
export const navLinksLeft = [
  { href: "/fiestas", label: "Fiestas" },
  { href: "/juegos", label: "Juegos" },
  { href: "/eventos", label: "Eventos" },
  { href: siteConfig.storeUrl, label: "Tienda en línea", external: true },
] as const;

export const navLinksRight = [
  { href: "/promociones", label: "Promociones" },
  { href: "/menu", label: "Menú To Go" },
  { href: "/quienes-somos", label: "¿Quiénes somos?" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const navLinks = [...navLinksLeft, ...navLinksRight] as const;

export type NavLink = (typeof navLinks)[number];
