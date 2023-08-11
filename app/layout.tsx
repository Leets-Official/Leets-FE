import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RTProvider, StyledProvider } from '@/lib/Provider';
import ScrollToTop from '@/component/Common/ScrollTop';

export const metadata: Metadata = {
  title: { default: 'Leets', template: '%s | Leets' },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ScrollToTop />
        <RTProvider>
          <StyledProvider>{children}</StyledProvider>
        </RTProvider>
      </body>
    </html>
  );
}
