import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: '', template: '%s · Leets' },
  description: 'Build, Collaborate, Upscale',
  icons: {
    icon: '/favicon.ico',
  },
};

const ApplicationLayout = ({ children }: { children: ReactNode }) => {
  return <main style={{ width: '100%', height: '100%' }}>{children}</main>;
};

export default ApplicationLayout;
