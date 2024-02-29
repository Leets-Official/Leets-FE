import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextAuthProvider } from '@/lib';
import Nav, { Logout } from '@/components/Common/Nav';

export const metadata: Metadata = {
  title: { default: '', template: '%s · Leets' },
  description: 'Who Cares?',
  icons: {
    icon: '/favicon.ico',
  },
};

const ApplicationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <NextAuthProvider>
      <main style={{ width: '100%', height: '100%' }}>
        <Nav darkMode={false}>
          <Logout />
        </Nav>
        {children}
      </main>
    </NextAuthProvider>
  );
};

export default ApplicationLayout;
