'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSessionData } from '@/hooks';
import styled from 'styled-components';
import { isAxiosError } from 'axios';
import {
  SUBMIT_STATUS,
  USER,
  APPLY_POSITION,
  DEV_INPUTS,
  DESING_INPUTS,
  PM_INPUTS,
  DEV_TEXTAREAS,
  DESIGN_TEXTAREAS,
  PM_TEXTAREAS,
} from '@/constants';
import { getUserApplication } from '@/api';
import { Validator } from '@/utils';
import { colors, radius, spacing, shadows } from '@/styles/theme';
import { GetApplicationDetailResponse } from '@/types';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import CopyrightFooter from '@/components/Common/CopyrightFooter';

/* ========== Mock Data ========== */

const MOCK_APPLICATION = {
  name: '홍길동',
  grade: '3',
  major: '컴퓨터공학과',
  phone: '010-1234-5678',
  algorithm: '백준 골드 3',
  project: 'TODO 앱 배포 1회',
  portfolio: 'https://github.com/example',
  interviewDay: '9.6, 9.7',
  interviewTime: '오후 2~4시',
  motive:
    'Leets에서 실무와 가까운 프로젝트 경험을 쌓고 싶어 지원하게 되었습니다. 개발자라는 꿈을 구체화하고, 팀과 함께 성장하는 경험을 하고 싶습니다.',
  capability:
    '문제를 끝까지 파고드는 끈기가 가장 중요하다고 생각합니다. 알고리즘 문제를 풀며 논리적 사고력을 키웠고, 사이드 프로젝트를 통해 실전 경험을 쌓았습니다.',
  conflict:
    '팀 프로젝트에서 의견 충돌이 있었을 때, 각자의 근거를 정리해 공유하고 투표를 통해 결정하는 방식으로 해결했습니다.',
  expectation:
    '실제 사용자가 있는 서비스를 처음부터 끝까지 만들어보고 싶습니다. Leets에서 기획, 디자인, 개발 전 과정을 경험하며 성장하고 싶습니다.',
  passion:
    '해커톤에 참여해 36시간 동안 서비스를 완성한 경험이 있습니다. 결과적으로 수상하지는 못했지만, 끝까지 포기하지 않고 완성한 경험이 가장 값졌습니다.',
  position: 'FRONTEND',
};

/* ========== Styled Components ========== */

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.neutral.lightBg};
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
  padding: 40px 32px;
  gap: 20px;
  flex: 1;

  @media (max-width: 820px) {
    padding: 30px ${spacing.page.mobilePadding};
    gap: 16px;
  }
`;

const TitlePC = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.blue[800]};
  letter-spacing: -0.72px;
  line-height: 43.2px;
  text-align: center;

  @media (max-width: 820px) {
    display: none;
  }
`;

const TitleMobile = styled.div`
  display: none;
  align-items: center;
  gap: 4px;
  width: 100%;

  @media (max-width: 820px) {
    display: flex;
  }
`;

const BackIcon = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${colors.blue[800]};
`;

const TitleMobileText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.blue[800]};
  letter-spacing: -0.48px;
  line-height: 28.8px;
`;

const ContentWrapper = styled.div`
  width: ${spacing.page.innerWidth};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Card = styled.div`
  background: ${colors.neutral.white};
  border-radius: ${radius.formCard};
  padding: 50px;
  width: 720px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap.formField};
  box-shadow: ${shadows.cardStrong};

  @media (max-width: 820px) {
    width: 100%;
    max-width: 480px;
    padding: 28px 24px;
    gap: 30px;
  }
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.gap.formField};

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FieldItem = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${({ $fullWidth }) => $fullWidth && 'grid-column: 1 / -1;'}
`;

const FieldLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.blue[800]};
  letter-spacing: -0.32px;
  line-height: 19.2px;

  @media (max-width: 820px) {
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 16.8px;
  }
`;

const FieldValueBox = styled.div`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.3px;
  line-height: 22px;
  padding: 12px 16px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: ${radius.input};
  min-height: 48px;
  display: flex;
  align-items: center;

  @media (max-width: 820px) {
    font-size: 14px;
    min-height: 40px;
    padding: 10px 14px;
  }
`;

const TextareaValueBox = styled.div`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.3px;
  line-height: 24px;
  white-space: pre-wrap;
  padding: 16px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: ${radius.input};
  min-height: 133px;

  @media (max-width: 820px) {
    font-size: 14px;
    padding: 14px;
  }
`;

const FieldLink = styled.a`
  color: ${colors.blue[500]};
  text-decoration: underline;
  word-break: break-all;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

/* ========== SVG ========== */

const BackArrowSvg = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M17.5 21L10.5 14L17.5 7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ========== Page Component ========== */

const ViewPage = () => {
  const { accessToken, submitStatus } = useSessionData();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const [application, setApplication] = useState<GetApplicationDetailResponse | null>(null);
  const [isLoading, setIsLoading] = useState(!isMock);

  useEffect(() => {
    if (isMock) return;
    if (submitStatus !== undefined && submitStatus !== SUBMIT_STATUS.SUBMIT && submitStatus !== SUBMIT_STATUS.SAVE) {
      router.replace(USER.APPLY);
    }
  }, [submitStatus, router, isMock]);

  useEffect(() => {
    if (isMock) return;
    const fetchApplication = async () => {
      if (!accessToken) return;
      const { result } = await getUserApplication(accessToken);
      if (!isAxiosError(result)) {
        setApplication(result);
        setIsLoading(false);
      }
    };
    if (accessToken && (submitStatus === SUBMIT_STATUS.SUBMIT || submitStatus === SUBMIT_STATUS.SAVE)) {
      fetchApplication();
    }
  }, [accessToken, submitStatus, isMock]);

  const mockData = isMock ? MOCK_APPLICATION : null;
  const position = isMock ? mockData?.position || 'FRONTEND' : application?.position?.replace('_', '/') || 'FRONTEND';

  const inputLayout = useMemo(() => {
    if (position === 'FRONTEND' || position === 'BACKEND') return DEV_INPUTS;
    if (position === 'PM') return PM_INPUTS;
    return DESING_INPUTS;
  }, [position]);

  const textareaLayout = useMemo(() => {
    if (position === 'FRONTEND' || position === 'BACKEND') return DEV_TEXTAREAS;
    if (position === 'PM') return PM_TEXTAREAS;
    return DESIGN_TEXTAREAS;
  }, [position]);

  const positionLabel = APPLY_POSITION[position.replace('/', '_') as keyof typeof APPLY_POSITION] || position;

  const getFieldValue = (id: string): string => {
    if (isMock && mockData) {
      return (mockData as Record<string, any>)[id] || '';
    }
    if (!application) return '';
    const appAny = application as Record<string, any>;
    if (appAny[id] !== undefined) return appAny[id];
    if (application.user && (application.user as Record<string, any>)[id] !== undefined) {
      return (application.user as Record<string, any>)[id];
    }
    return '';
  };

  if (isLoading) return null;

  return (
    <PageContainer>
      <HeaderTemplate variant="black" />
      <Section>
        <TitlePC>내 지원서</TitlePC>
        <TitleMobile>
          <BackIcon onClick={() => router.push(USER.APPLY_STATUS)}>
            <BackArrowSvg />
          </BackIcon>
          <TitleMobileText>내 지원서</TitleMobileText>
        </TitleMobile>

        <ContentWrapper>
          {/* Basic Info Card */}
          <Card>
            <FieldGrid>
              <FieldItem>
                <FieldLabel>지원 직무</FieldLabel>
                <FieldValueBox>{positionLabel}</FieldValueBox>
              </FieldItem>
              {inputLayout.map(({ id, title }) => {
                const value = getFieldValue(id);
                return (
                  <FieldItem key={id}>
                    <FieldLabel>{title}</FieldLabel>
                    <FieldValueBox>
                      {Validator.isUrl(value) ? (
                        <FieldLink href={value} target="_blank" rel="noopener noreferrer">
                          {value}
                        </FieldLink>
                      ) : (
                        value || '-'
                      )}
                    </FieldValueBox>
                  </FieldItem>
                );
              })}
            </FieldGrid>
          </Card>

          {/* Essay Card */}
          <Card>
            {textareaLayout.map(({ id, title }) => (
              <FieldItem key={id}>
                <FieldLabel>{title}</FieldLabel>
                <TextareaValueBox>{getFieldValue(id) || '-'}</TextareaValueBox>
              </FieldItem>
            ))}
          </Card>
        </ContentWrapper>
      </Section>

      <CopyrightFooter />
    </PageContainer>
  );
};

export default ViewPage;
