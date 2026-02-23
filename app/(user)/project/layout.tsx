import { ReactNode } from 'react';
import type { Metadata } from 'next';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import CopyrightFooter from '@/components/Common/CopyrightFooter';
import { PageContainer, PageWrapper } from './styled';

export const metadata: Metadata = {
  title: '프로젝트',
};

const ProjectLayout = ({ children }: { children: ReactNode }) => (
  <PageContainer>
    <HeaderTemplate variant="black" />
    <PageWrapper>{children}</PageWrapper>
    <CopyrightFooter />
  </PageContainer>
);

export default ProjectLayout;
