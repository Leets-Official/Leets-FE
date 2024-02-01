import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RTProvider, StyledProvider } from '@/lib/Provider';
import ScrollToTop from '@/components/Common/ScrollTop';
import { DM_SANS } from '@/app/fonts';
import { NextAuthProvider } from '../lib/Provider/SessionProvider';

export const metadata: Metadata = {
  title: { default: 'Leets', template: '%s · Leets' },
  description: 'Who Cares?',
  openGraph: {
    title: 'Leets',
    description: 'Who Cares?',
    url: 'https://leets.land',
    images: ['/assets/image/OG.png'],
    locale: 'ko-KR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <link
        rel="stylesheet preload"
        as="style"
        crossOrigin=""
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
      />
      <body className={DM_SANS.className}>
        <StyledProvider>
          <RTProvider>
            <NextAuthProvider>
              <ScrollToTop />
              {children}
            </NextAuthProvider>
          </RTProvider>
        </StyledProvider>
      </body>
    </html>
  );
};

export default RootLayout;
