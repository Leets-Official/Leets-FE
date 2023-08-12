import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '관리자',
};

const AdminLayout = ({ children }: { children: ReactNode }) => <>{children}</>;

export default AdminLayout;
