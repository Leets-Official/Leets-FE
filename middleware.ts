import { type NextRequest } from 'next/server';
import { Middleware } from './utils';

export async function middleware(request: NextRequest) {
  const middlewareInstance = new Middleware(request);
  const { pathname } = request.nextUrl;

  if (pathname.includes('admin')) {
    return middlewareInstance.admin();
  }
  return middlewareInstance.user();
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/apply'],
};
