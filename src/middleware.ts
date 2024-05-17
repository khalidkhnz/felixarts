import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth(async (req) => {
  const path = req.nextUrl.pathname;

  const isAuthenticated: boolean = !!req.auth;

  /* Khalid's Note
  [TODO] : Authorization
  */

  if (isAuthenticated && path.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
