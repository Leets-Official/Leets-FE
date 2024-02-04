import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지원서 목록',
};

const ApplicationLayout = ({ children }: { children: ReactNode }) => <>{children}</>;

export default ApplicationLayout;
