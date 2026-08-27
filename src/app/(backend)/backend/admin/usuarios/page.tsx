import { prisma } from "@/lib/db";
import { auth } from "@/auth";
import { createAdminUserAction, deleteAdminUserAction } from "@/lib/admin/quote-actions";
import { ActionForm } from "@/components/admin/action-form";
import { Button } from "@/components/ui/button";

export default async function UsuariosAdminPage() {
  const session = await auth();
  const users = await prisma.user.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-[clamp(1.85rem,6vw,2.75rem)] font-black">Usuarios</h1>
        <p className="mt-1 text-sm text-brand-ink/70">Administradores con acceso al panel.</p>
      </div>

      <ul className="grid gap-3 md:hidden">
        {users.map((user) => (
          <li key={user.id} className="rounded-2xl border border-black/10 bg-white p-4">
            <p className="font-semibold text-brand-ink">{user.name || "Sin nombre"}</p>
            <p className="mt-0.5 break-all text-sm text-brand-ink/70">{user.email}</p>
            <p className="mt-1 text-xs text-brand-ink/50">
              {user.createdAt.toLocaleDateString("es-MX")}
            </p>
            <div className="mt-3">
              {user.id !== session?.user?.id ? (
                <ActionForm action={deleteAdminUserAction} success="Usuario eliminado.">
                  <input type="hidden" name="id" value={user.id} />
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center text-xs font-extrabold uppercase tracking-wide text-brand-red"
                  >
                    Eliminar
                  </button>
                </ActionForm>
              ) : (
                <span className="text-xs font-semibold text-brand-ink/40">Tú</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto rounded-2xl border border-black/10 bg-white md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f8f9fc] text-xs font-extrabold uppercase tracking-wide text-brand-ink/55">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Correo</th>
              <th className="px-4 py-3">Creado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-black/5">
                <td className="px-4 py-3 font-semibold">{user.name || "—"}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.createdAt.toLocaleDateString("es-MX")}</td>
                <td className="px-4 py-3 text-right">
                  {user.id !== session?.user?.id ? (
                    <ActionForm action={deleteAdminUserAction} success="Usuario eliminado.">
                      <input type="hidden" name="id" value={user.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-11 items-center text-xs font-extrabold uppercase tracking-wide text-brand-red hover:underline"
                      >
                        Eliminar
                      </button>
                    </ActionForm>
                  ) : (
                    <span className="text-xs font-semibold text-brand-ink/40">Tú</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ActionForm
        action={createAdminUserAction}
        success="Usuario creado."
        className="max-w-xl space-y-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6"
      >
        <h2 className="font-display text-xl font-black text-brand-blue">Nuevo admin</h2>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Nombre
          <input
            name="name"
            className="h-12 rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Correo
          <input
            name="email"
            type="email"
            required
            className="h-12 rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Contraseña (mín. 8)
          <input
            name="password"
            type="password"
            required
            minLength={8}
            className="h-12 rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
          />
        </label>
        <Button type="submit" className="w-full sm:w-auto">
          Crear usuario
        </Button>
      </ActionForm>
    </div>
  );
}
