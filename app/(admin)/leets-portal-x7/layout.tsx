import { ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import { StyledProvider, DM_SANS } from '@/lib';
import * as S from './styled';

export const revalidate = 60 * 5;

export const metadata: Metadata = {
  title: { default: '관리자', template: '%s · Leets' },
  description: 'Build, Collaborate, Upscale?',
  metadataBase: new URL('https://leets.land'),
  openGraph: {
    title: 'Leets',
    description: 'Build, Collaborate, Upscale?',
    url: 'https://leets.land',
    siteName: 'Leets',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko" className="admin-mode">
      <body className={DM_SANS.className}>
        <Suspense>
          <StyledProvider>
            <S.AdminContainer>{children}</S.AdminContainer>
          </StyledProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default AdminLayout;
