import { Metadata } from 'next';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '모집 분야',
};

export default function PositionLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
