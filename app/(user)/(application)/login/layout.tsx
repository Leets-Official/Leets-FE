import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
};

const LoginLayout = ({ children }: { children: ReactNode }) => <>{children}</>;

export default LoginLayout;
