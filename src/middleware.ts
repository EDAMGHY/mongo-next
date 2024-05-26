import { withAuth } from "next-auth/middleware";
import { NextResponse, NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    const {
      nextUrl: { pathname },
      nextauth: { token },
    }: any = req;

    if (pathname.startsWith("/login") && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const {
          nextUrl: { pathname },
        } = req;

        return (!token && pathname.startsWith("/login")) || !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/login", "/", "/create", "/notes/:path*"],
};
