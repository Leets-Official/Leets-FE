'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { SUBMIT_STATUS, USER } from '@/constants';
import { colors, radius } from '@/styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, ${colors.blue[500]} 0%, #6ea7fc 50%, ${colors.blue[200]} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 32px;
  flex: 1;
  justify-content: center;

  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`;

const Card = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${radius.formCard};
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-shadow: 0 8px 32px rgba(21, 52, 100, 0.15);
  backdrop-filter: blur(10px);

  @media (max-width: 820px) {
    padding: 40px 24px;
  }
`;

const CheckCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${colors.blue[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M12 20L18 26L28 14"
      stroke="#ffffff"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${colors.blue[800]};
  letter-spacing: -0.56px;
  line-height: 33.6px;
  text-align: center;

  @media (max-width: 820px) {
    font-size: 22px;
    line-height: 26.4px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.blue[600]};
  letter-spacing: -0.32px;
  line-height: 24px;
  text-align: center;
  white-space: pre-line;

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 16px;
`;

const PrimaryButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.32px;
  width: 100%;
  height: 52px;
  border-radius: ${radius.button};
  border: none;
  background: ${colors.blue[500]};
  color: #ffffff;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${colors.blue[600]};
  }
`;

const SecondaryButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.32px;
  width: 100%;
  height: 52px;
  border-radius: ${radius.button};
  border: 1.5px solid ${colors.blue[200]};
  background: transparent;
  color: ${colors.blue[700]};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${colors.blue[50]};
    border-color: ${colors.blue[400]};
  }
`;

const CompletePage = () => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const submitStatus = session.data?.submitStatus;
  const [isLoading, setIsLoading] = useState(!isMock);

  useEffect(() => {
    if (isMock) return;
    if (submitStatus !== undefined && submitStatus !== SUBMIT_STATUS.SUBMIT) {
      router.replace(USER.APPLY);
      return;
    }
    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      setIsLoading(false);
    }
  }, [submitStatus, router, isMock]);

  if (isLoading) return null;

  return (
    <PageContainer>
      <ContentWrapper>
        <Card>
          <CheckCircle>
            <CheckIcon />
          </CheckCircle>
          <Title>지원서가 제출되었습니다</Title>
          <Description>
            {'서류 심사 결과는 이메일로 안내드릴 예정입니다.\n지원해 주셔서 감사합니다!'}
          </Description>
          <ButtonGroup>
            <PrimaryButton onClick={() => router.push(USER.APPLY_STATUS)}>
              상태 조회하기
            </PrimaryButton>
            <SecondaryButton onClick={() => router.push(USER.APPLY_VIEW)}>
              내 지원서 보기
            </SecondaryButton>
          </ButtonGroup>
        </Card>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CompletePage;
