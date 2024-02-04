import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextAuthProvider, StyledProvider } from '@/lib';
import Nav from '@/components/Nav';
import { MAIN_COLOR } from '@/constants';

export const metadata: Metadata = {
  title: { default: '', template: '%s · Leets' },
  description: 'Who Cares?',
  icons: {
    icon: '/favicon.ico',
  },
};

const ApplicationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledProvider>
      <NextAuthProvider>
        <main style={{ width: '100%', height: '100%' }}>
          <Nav color={MAIN_COLOR} />
          {children}
        </main>
      </NextAuthProvider>
    </StyledProvider>
  );
};

export default ApplicationLayout;
