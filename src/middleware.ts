import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const cookiesStore = cookies();
  const authValues = cookiesStore.get("auth")?.value;

  const accessAble =
    pathname === "/admin/login" || pathname === "/admin/register";

  if (accessAble) {
    if (authValues) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!authValues) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
