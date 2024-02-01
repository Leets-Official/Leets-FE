import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RTProvider, StyledProvider } from '@/lib/Provider';
import ScrollToTop from '@/components/Common/ScrollTop';
import { DM_SANS } from '@/app/fonts';
import { NextAuthProvider } from '@/app/lib/Provider/SessionProvider';

export const metadata: Metadata = {
  title: '관리자',
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={DM_SANS.className}>
        <StyledProvider>
          <RTProvider>
            <NextAuthProvider>
              <ScrollToTop />
              {children}
            </NextAuthProvider>
          </RTProvider>
        </StyledProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
