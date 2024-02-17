import { ReactNode } from 'react';
import type { Metadata } from 'next';
import WithLogout from '@/components/Admin/WithLogout';
import Nav from '@/components/Admin/Nav';

export const metadata: Metadata = {
  title: '지원서 목록',
};

const ApplicationLayout = ({ children }: { children: ReactNode }) => (
  <div style={{ width: '95%', height: '100vh' }}>
    <WithLogout>
      <Nav />
    </WithLogout>
    {children}
  </div>
);

export default ApplicationLayout;
