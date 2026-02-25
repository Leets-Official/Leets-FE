'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { SUBMIT_STATUS, USER } from '@/constants';
import { colors, spacing, gradients } from '@/styles/theme';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import CopyrightFooter from '@/components/Common/CopyrightFooter';

/* ========== Styled Components ========== */

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${gradients.submitComplete};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: ${spacing.page.contentWidth};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  gap: 60px;
  flex: 1;

  @media (max-width: 820px) {
    padding: 0 ${spacing.page.mobilePadding};
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: ${colors.neutral.white};
  letter-spacing: -1.4px;
  line-height: 84px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 820px) {
    font-size: 35px;
    line-height: 43.2px;
    letter-spacing: -0.72px;
  }
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.neutral.white};
  letter-spacing: -0.48px;
  line-height: 28.8px;
  text-align: center;
  word-break: keep-all;
  white-space: pre-wrap;

  @media (max-width: 820px) {
    font-size: clamp(13px, 3.8vw, 19px);
    line-height: 1.6;
    letter-spacing: -0.02em;
  }
`;

const Highlight = styled.strong`
  font-weight: 700;
`;

const ActionButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.56px;
  line-height: 33.6px;
  width: 320px;
  height: 66px;
  border-radius: 99px;
  border: none;
  background: ${colors.neutral.lightBg};
  color: ${colors.blue[500]};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 820px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
    width: 200px;
    height: 48px;
  }
`;

/* ========== Page Component ========== */

const CompletePage = () => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const submitStatus = session.data?.submitStatus;
  const [isLoading, setIsLoading] = useState(!isMock);

  useEffect(() => {
    if (isMock) return;
    if (session.status === 'loading') return;
    if (submitStatus !== undefined && submitStatus !== SUBMIT_STATUS.SUBMIT) {
      router.replace(USER.APPLY);
      return;
    }
    setIsLoading(false);
  }, [submitStatus, session.status, router, isMock]);

  if (isLoading) return null;

  return (
    <PageContainer>
      <HeaderTemplate variant="white" />
      <Section>
        <TextBlock>
          <Title>지원서가 제출되었습니다!</Title>
          <Description>
            {'서류 심사 결과는 '}
            <Highlight>3월 10일</Highlight>
            {' 홈페이지에서 확인 가능합니다.\n지원해 주셔서 감사합니다!'}
          </Description>
        </TextBlock>
        <ActionButton onClick={() => router.push(USER.APPLY_STATUS)}>지원 상태 조회하기</ActionButton>
      </Section>
      <CopyrightFooter variant="white" />
    </PageContainer>
  );
};

export default CompletePage;
