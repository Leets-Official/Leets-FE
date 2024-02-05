import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { StyledProvider, DM_SANS } from '@/lib';

export const metadata: Metadata = {
  title: { default: '관리자', template: '%s · Leets' },
  description: 'Who Cares?',
  icons: {
    icon: '/favicon.ico',
  },
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={DM_SANS.className}>
        <StyledProvider>{children}</StyledProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
