import { type NextRequest, NextResponse } from 'next/server';
import { ACCESS_TOKEN } from '@/constants';
import { getSession } from 'next-auth/react';

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
    const { nextUrl, headers, url } = this.#request;
    const { pathname } = nextUrl;

    const requestForNextAuth = {
      headers: {
        cookie: headers.get('cookie') ?? undefined,
      },
    };
    const session = await getSession({ req: requestForNextAuth });

    if (pathname.includes('apply')) {
      if (session?.accessToken) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/login', url));
    }
    if (session?.accessToken) {
      return NextResponse.redirect(new URL('/apply', url));
    }
    return NextResponse.next();
  }
}
