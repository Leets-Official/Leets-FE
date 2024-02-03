import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RTProvider, StyledProvider, DM_SANS } from '@/lib';
import ScrollToTop from '@/components/Common/ScrollTop';

export const metadata: Metadata = {
  title: '관리자',
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={DM_SANS.className}>
        <StyledProvider>
          <RTProvider>
            <ScrollToTop />
            {children}
          </RTProvider>
        </StyledProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
