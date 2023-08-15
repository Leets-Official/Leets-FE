import { ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import { RTProvider, StyledProvider } from '@/lib/Provider';
import ScrollToTop from '@/component/Common/ScrollTop';
import { NextAuthProvider } from './lib/Provider/SessionProvider';

export const metadata: Metadata = {
  title: { default: 'Leets', template: '%s · Leets' },
  description: 'Who Cares?',
  openGraph: {
    title: 'Leets',
    description: 'Who Cares?',
    url: 'https://leets.land',
    images: [
      {
        url: '/assets/image/OG.png',
      },
    ],
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
      <body>
        <StyledProvider>
          <ScrollToTop />
          <NextAuthProvider>
            <RTProvider>{children}</RTProvider>
          </NextAuthProvider>
        </StyledProvider>
      </body>
    </html>
  );
};

export default RootLayout;
