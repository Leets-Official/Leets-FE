import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RTProvider, StyledProvider } from '@/lib/Provider';
import ScrollToTop from '@/components/Common/ScrollTop';
import { NotoSansKR, Pretendard } from '@/public/fonts/font';
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
      <body className={(NotoSansKR.className, Pretendard.className)}>
        <StyledProvider>
          <RTProvider>
            <ScrollToTop />
            <NextAuthProvider>{children}</NextAuthProvider>
          </RTProvider>
        </StyledProvider>
      </body>
    </html>
  );
};

export default RootLayout;
