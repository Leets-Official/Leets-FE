import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ACCESS_TOKEN } from './constants';

export function middleware(request: NextRequest) {
  const accessToken = getCookie(ACCESS_TOKEN);

  if (request.nextUrl.pathname === '/admin') {
    if (accessToken) {
      return NextResponse.redirect(new URL('/admin/application', request.url));
    }
    return NextResponse.next();
  }
  if (accessToken) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/admin', request.url));
}

export const config = {
  matcher: '/admin/:path*',
};
