import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RTProvider, StyledProvider, DM_SANS } from '@/lib';

export const metadata: Metadata = {
  title: { default: '관리자 · Leets', template: '%s · Leets' },
  description: 'Who Cares?',
  openGraph: {
    title: 'Leets',
    description: 'Who Cares?',
    url: 'https://www.leets.land',
    images: ['/assets/image/OG.png'],
    locale: 'ko-KR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={DM_SANS.className}>
        <StyledProvider>
          <RTProvider>{children}</RTProvider>
        </StyledProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
