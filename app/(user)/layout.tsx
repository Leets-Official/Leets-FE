import { ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import { StyledProvider, DM_SANS } from '@/lib';

export const revalidate = 60 * 5;

export const metadata: Metadata = {
  title: { default: 'Leets', template: '%s · Leets' },
  description: 'Who Cares?',
  metadataBase: new URL('https://leets.land'),
  openGraph: {
    title: 'Leets',
    description: 'Who Cares?',
    url: 'https://leets.land',
    siteName: 'Leets',
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
        <Suspense>
          <StyledProvider>{children}</StyledProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
