import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보 약관',
};

const CertificateLayout = ({ children }: { children: ReactNode }) => <>{children}</>;

export default CertificateLayout;
