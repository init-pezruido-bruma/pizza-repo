import type { Metadata } from "next";
import localFont from "next/font/local";
import { restaurantJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../fonts/alkaline/Alkaline-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/alkaline/Alkaline-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/alkaline/Alkaline-Demi.otf", weight: "600", style: "normal" },
    { path: "../fonts/alkaline/Alkaline-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/alkaline/Alkaline-Heavy.otf", weight: "800", style: "normal" },
    { path: "../fonts/alkaline/Alkaline-Heavy.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../fonts/proxima/ProximaSoft-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/proxima/ProximaSoft-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/proxima/ProximaSoft-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/proxima/ProximaSoft-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/proxima/ProximaSoft-Extrabold.otf", weight: "800", style: "normal" },
    { path: "../fonts/proxima/ProximaSoft-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Food and Fun en Monterrey`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/images/brand/logo-mark.png", type: "image/png" }],
    apple: [{ url: "/images/brand/logo-mark.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Food and Fun`,
    description: siteConfig.description,
    images: [{ url: "/images/brand/logo-mark.png", width: 822, height: 681, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = restaurantJsonLd();

  return (
    <html
      lang="es-MX"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-brand-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
