import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  if (!req.nextUrl.pathname.startsWith("/backend/admin")) {
    return NextResponse.next();
  }

  if (!req.auth?.user) {
    const login = new URL("/backend/login", req.nextUrl.origin);
    login.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/backend/admin", "/backend/admin/:path*"],
};
