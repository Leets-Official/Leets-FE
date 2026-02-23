import { ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import { StyledProvider, NextAuthProvider, authOptions } from '@/lib';
import { GoogleAnalytics } from '@next/third-parties/google';
import * as gtag from '@/lib/gtag';
import ScrollToTop from '@/components/Common/ScrollToTop';
import { getServerSession } from 'next-auth';

export const revalidate = 60 * 5;

export const metadata: Metadata = {
  title: { default: 'Leets', template: '%s · Leets' },
  description: 'Build · Collaborate · Upscale',
  metadataBase: new URL('https://leets.land'),
  openGraph: {
    title: 'Leets',
    description: 'Build · Collaborate · Upscale',
    url: 'https://leets.land',
    siteName: 'Leets',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <link
        rel="stylesheet preload"
        as="style"
        crossOrigin=""
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
      />
      <body>
        <Suspense>
          <NextAuthProvider session={session}>
            <StyledProvider>
              {children}
              <ScrollToTop />
            </StyledProvider>
          </NextAuthProvider>
        </Suspense>
        <GoogleAnalytics gaId={gtag.GA_TRACKING_ID as string} />
      </body>
    </html>
  );
};

export default RootLayout;
