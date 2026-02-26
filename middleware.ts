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

  if (pathname.includes('leets-portal-x7')) {
    if (pathname === '/leets-portal-x7') {
      if (accessToken) {
        return NextResponse.redirect(new URL('/leets-portal-x7/application', url));
      }
      return NextResponse.next();
    }
    if (accessToken) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/leets-portal-x7', url));
  }

  const period = Schedule.getCurrentPeriod();
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (period !== APPLY_PERIOD.RECRUIT) {
    // 제출 완료 유저는 지원기간 외에도 결과 조회 페이지 접근 허용
    const isSubmitted = token?.submitStatus === 'SUBMIT';
    const isResultPath = ['/apply/status', '/apply/complete', '/apply/view'].some((p) =>
      pathname.startsWith(p),
    );
    if (isSubmitted && isResultPath) {
      return token?.accessToken ? NextResponse.next() : NextResponse.redirect(new URL('/login', url));
    }
    return NextResponse.redirect(new URL('/', url));
  }

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
  matcher: ['/leets-portal-x7/:path*', '/login', '/apply/:path*', '/apply'],
};
