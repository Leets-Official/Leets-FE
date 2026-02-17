'use client';

import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import PositionGrid from './components/PositionGrid';
import PositionFooter from './components/PositonFooter';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f4f8fe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${spacing.page.contentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px 60px;

  @media (max-width: 820px) {
    padding: 32px ${spacing.page.mobilePadding} 40px;
  }
`;

const Title = styled.h1`
  color: ${colors.blue[800]};
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: -0.02em;

  @media (max-width: 820px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export default function PositionPage() {
  return (
    <PageContainer>
      <HeaderTemplate variant="black" />
      <ContentWrapper>
        <Title>어떤 분야에 함께하고 싶으신가요?</Title>
        <PositionGrid />
        <PositionFooter />
      </ContentWrapper>
    </PageContainer>
  );
}
