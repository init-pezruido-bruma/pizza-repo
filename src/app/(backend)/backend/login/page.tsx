import { Suspense } from "react";
import { AuthSessionProvider } from "@/components/admin/auth-session-provider";
import LoginForm from "./login-form";

export default function BackendLoginPage() {
  return (
    <AuthSessionProvider>
      <Suspense
        fallback={
          <div className="flex min-h-full flex-1 items-center justify-center px-5 py-16 text-sm font-semibold text-brand-ink/60">
            Cargando…
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </AuthSessionProvider>
  );
}
