import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/api/:path*", "/user/:path*"],
};

export function middleware(request) {
  const clientId = Cookies.get("ClientId");
  const token = Cookies.get("token");
  if (!clientId && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
