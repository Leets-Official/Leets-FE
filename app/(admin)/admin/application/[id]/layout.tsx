import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지원서 상세',
};

const ApplicationDetailLayout = ({ children }: { children: ReactNode }) => <>{children}</>;

export default ApplicationDetailLayout;
