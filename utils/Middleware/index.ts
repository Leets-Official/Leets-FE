import { type NextRequest, NextResponse } from 'next/server';
import { ACCESS_TOKEN } from '@/constants';
import { getToken } from 'next-auth/jwt';

export class Middleware {
  #request;

  #accessToken;

  constructor(request: NextRequest) {
    this.#request = request;
    this.#accessToken = request.cookies.get(ACCESS_TOKEN);
  }

  admin() {
    const { url, nextUrl } = this.#request;

    if (nextUrl.pathname === '/admin') {
      if (this.#accessToken) {
        return NextResponse.redirect(new URL('/admin/application', url));
      }
      return NextResponse.next();
    }
    if (this.#accessToken) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/admin', url));
  }

  async user() {
    const { nextUrl, url } = this.#request;
    const { pathname } = nextUrl;
    const token = await getToken({ req: this.#request, secret: process.env.NEXTAUTH_SECRET });
    if (pathname.includes('apply')) {
      if (token?.accessToken) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/login', url));
    }
    if (token?.accessToken) {
      return NextResponse.redirect(new URL('/apply', url));
    }
    return NextResponse.next();
  }
}
