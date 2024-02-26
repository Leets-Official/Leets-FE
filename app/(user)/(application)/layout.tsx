import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextAuthProvider, StyledProvider } from '@/lib';
import Nav from '@/components/Common/Nav';
import { Logout } from '@/components/Common/Nav/Nav';

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
          <Nav darkMode={false}>
            <Logout />
          </Nav>
          {children}
        </main>
      </NextAuthProvider>
    </StyledProvider>
  );
};

export default ApplicationLayout;
