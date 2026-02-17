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
  padding: 60px 32px;
  gap: 40px;

  @media (max-width: 820px) {
    padding: 30px 20px;
    gap: 28px;
  }
`;

const TitleBlock = styled.div`
  text-align: center;

  @media (max-width: 820px) {
    text-align: left;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: ${colors.blue[800]};
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.96px;
  line-height: 57.6px;
  word-break: keep-all;

  @media (max-width: 820px) {
    font-size: 24px;
    letter-spacing: -0.48px;
    line-height: 28.8px;
  }
`;

const MobileSubtitle = styled.p`
  display: none;

  @media (max-width: 820px) {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: ${colors.blue[800]};
    letter-spacing: -0.28px;
    line-height: 16.8px;
    margin-top: 8px;
  }
`;

const FooterBar = styled.div`
  width: 100%;
  max-width: ${spacing.page.contentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px 36px;

  @media (max-width: 820px) {
    padding: 0 20px 24px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(21, 52, 100, 0.2);
  margin: 0;
`;

const Copyright = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.2);
  line-height: 14.4px;
  letter-spacing: -0.24px;
  text-align: center;
  margin-top: 32px;

  @media (max-width: 820px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.2px;
  }
`;

export default function PositionPage() {
  return (
    <PageContainer>
      <HeaderTemplate variant="black" />
      <ContentWrapper>
        <TitleBlock>
          <Title>어떤 분야에 함께하고 싶으신가요?</Title>
          <MobileSubtitle>파트를 클릭하면 지원서 작성 페이지로 이동합니다.</MobileSubtitle>
        </TitleBlock>
        <PositionGrid />
        <PositionFooter />
      </ContentWrapper>
      <FooterBar>
        <Divider />
        <Copyright>Copyright 2023-2026. Leets All rights reserved.</Copyright>
      </FooterBar>
    </PageContainer>
  );
}
