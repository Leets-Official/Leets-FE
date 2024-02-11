import { ReactNode } from 'react';
import type { Metadata } from 'next';
import * as S from './styled';

export const metadata: Metadata = {
  title: '지원하기',
};

const ApplyLayout = ({ children }: { children: ReactNode }) => <S.ApplyContainer>{children}</S.ApplyContainer>;

export default ApplyLayout;
