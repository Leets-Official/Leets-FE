import { type NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { ACCESS_TOKEN, APPLY_PERIOD } from '@/constants';
import { Schedule } from './utils/Schedule';

export async function middleware(request: NextRequest) {
  const {
    nextUrl: { pathname, searchParams },
    url,
  } = request;

  // Development mock bypass
  if (searchParams.get('mock') === 'true') {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get(ACCESS_TOKEN);

  if (pathname.includes('admin')) {
    if (pathname === '/admin') {
      if (accessToken) {
        return NextResponse.redirect(new URL('/admin/application', url));
      }
      return NextResponse.next();
    }
    if (accessToken) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/admin', url));
  }

  const period = Schedule.getCurrentPeriod();
  if (period !== APPLY_PERIOD.RECRUIT) {
    return NextResponse.redirect(new URL('/', url));
  }

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

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

export const config = {
  matcher: ['/admin/:path*', '/login', '/apply/:path*', '/apply'],
};
