import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { StyledProvider, DM_SANS } from '@/lib';

export const metadata: Metadata = {
  title: 'Leets',
  description: 'Who Cares?',
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
        <StyledProvider>{children}</StyledProvider>
      </body>
    </html>
  );
};

export default RootLayout;
