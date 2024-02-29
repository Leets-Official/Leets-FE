import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Nav, { Apply } from '@/components/Common/Nav';
import { PageContainer, PageWrapper } from './styled';

export const metadata: Metadata = {
  title: '프로젝트',
};

const ProjectLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Nav>
      <Apply />
    </Nav>
    <PageContainer>
      <PageWrapper>{children}</PageWrapper>
    </PageContainer>
  </>
);

export default ProjectLayout;
