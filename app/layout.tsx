import { ReactNode } from 'react';
import { RTProvider, StyledProvider } from '@/lib/Provider';

export const metadata = {
  title: 'Leets',
  description: 'Leets',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <RTProvider>
          <StyledProvider>{children}</StyledProvider>
        </RTProvider>
      </body>
    </html>
  );
}
