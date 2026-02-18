'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import CopyrightFooter from '@/components/Common/CopyrightFooter';
import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import { USER } from '@/constants';

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${colors.neutral.lightBg};
`;

const ContentArea = styled.div`
  width: 100%;
  max-width: ${spacing.page.innerWidth};
  padding: 0 ${spacing.page.mobilePadding};
  padding-bottom: 80px;
  flex: 1;

  @media (min-width: 820px) {
    padding: 0;
    padding-bottom: 120px;
  }
`;

const ManageLayout = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    redirect(USER.HOME);
  }

  if (status === 'loading') {
    return null;
  }

  return (
    <PageContainer>
      <HeaderTemplate variant="black" />
      <ContentArea>{children}</ContentArea>
      <CopyrightFooter />
    </PageContainer>
  );
};

export default ManageLayout;
