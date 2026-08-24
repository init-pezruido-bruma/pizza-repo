import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend",
  robots: { index: false, follow: false },
};

export default function BackendRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f4f6fb] text-brand-ink">
      {children}
    </div>
  );
}
