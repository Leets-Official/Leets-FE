import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지원하기',
};

const ApplyLayout = ({ children }: { children: ReactNode }) => <>{children}</>;

export default ApplyLayout;
