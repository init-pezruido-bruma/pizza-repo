import { auth } from "@/auth";
import { AdminNav } from "@/components/admin/admin-nav";
import { AdminToaster } from "@/components/admin/toast";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-full pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <AdminNav email={session?.user?.email ?? null} />
      <AdminToaster />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">{children}</div>
    </div>
  );
}
