import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function PositionLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
