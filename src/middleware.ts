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
    const guia = req.nextUrl.searchParams.get("guia") === "1" ? "?guia=1" : "";
    login.searchParams.set("redirect", `${req.nextUrl.pathname}${guia}`);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/backend/admin", "/backend/admin/:path*"],
};
