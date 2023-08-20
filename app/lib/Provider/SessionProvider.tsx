'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export const NextAuthProvider = ({ children }: { children: ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);
