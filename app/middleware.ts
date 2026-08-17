import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Solo protegemos la página principal del onboarding
  if (pathname === "/onboarding" || pathname.startsWith("/onboarding/")) {
    const hasAccess = request.cookies.get("onboarding_access")?.value === "true";

    if (!hasAccess) {
      const accessUrl = new URL("/onboarding-acceso", request.url);

      // Guardamos de dónde venía para poder volver después
      accessUrl.searchParams.set("from", pathname);

      return NextResponse.redirect(accessUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/onboarding/:path*"],
};