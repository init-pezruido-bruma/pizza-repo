import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe Auth.js config (no Prisma / Node-only imports).
 * Used by middleware. Full providers live in `src/auth.ts`.
 */
export const authConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/backend/login",
  },
  providers: [],
  trustHost: true,
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      if (!pathname.startsWith("/backend/admin")) return true;
      return !!auth?.user;
    },
  },
} satisfies NextAuthConfig;
