import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const cookiesStore = cookies();
  const authValues = cookiesStore.get("auth")?.value;

  const accessAble =
    pathname === "/admin/login" || pathname === "/admin/register";
  if (accessAble) {
    console.log("Access admin login, registered");
  } else {
    console.log("Access other routues");
  }
  // if (authValues === "" || authValues === undefined) {
  //   return NextResponse.rewrite(new URL("/admin/login", request.url));
  // }
}

export const config = {
  matcher: ["/admin/:path*"],
};
