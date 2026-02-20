'use client';

import { useEffect, useState, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { colors, radius, spacing } from '@/styles/theme';
import { GetApplicationDetaiResponse } from '@/types';

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
  max-width: ${spacing.page.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const Section = styled.div`
  width: ${spacing.page.contentWidth};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 32px;
  gap: 40px;
  flex: 1;

  @media (max-width: 820px) {
    padding: 60px ${spacing.page.mobilePadding};
  }
`;

const SectionText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media (max-width: 820px) {
    gap: 4px;
  }
`;

const TitleText = styled.h1`
  font-size: 80px;
  font-weight: 700;
  color: ${colors.blue[500]};
  letter-spacing: -1.6px;
  line-height: 96px;

  @media (max-width: 820px) {
    font-size: 36px;
    line-height: 43px;
  }
`;

const SubtitleText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.blue[500]};
  letter-spacing: -0.4px;
  line-height: 24px;

  @media (max-width: 820px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const FormCard = styled.div`
  background: #ffffff;
  border-radius: ${radius.formCard};
  padding: 50px;
  width: 720px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap.formField};

  @media (max-width: 820px) {
    width: 100%;
    padding: 28px 24px;
    gap: 30px;
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.blue[800]};
  letter-spacing: -0.36px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(53, 132, 251, 0.1);
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FieldLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.blue[800]};
  letter-spacing: -0.32px;
  line-height: 19px;

  @media (max-width: 820px) {
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 17px;
  }
`;

const FieldValue = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.3px;
  line-height: 22px;
  padding: 0 2px;
`;

const TextareaValue = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.3px;
  line-height: 24px;
  white-space: pre-wrap;
  background: ${colors.blue[50]};
  border-radius: ${radius.input};
  padding: 16px;
  border: 1px solid rgba(53, 132, 251, 0.08);
`;

const PositionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 14px;
  border-radius: ${radius.pill};
  background: ${colors.blue[100]};
  color: ${colors.blue[700]};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  width: fit-content;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 820px) {
    gap: 12px;
    width: 100%;
  }
`;

const BackButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.32px;
  width: 200px;
  height: 52px;
  border-radius: ${radius.button};
  border: 1.5px solid ${colors.blue[200]};
  background: #ffffff;
  color: ${colors.blue[700]};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${colors.blue[50]};
    border-color: ${colors.blue[400]};
  }

  @media (max-width: 820px) {
    width: 100%;
  }
`;

const StatusButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.32px;
  width: 200px;
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

  @media (max-width: 820px) {
    width: 100%;
  }
`;

const Copyright = styled.footer`
  width: ${spacing.page.contentWidth};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 0 32px 36px;

  @media (max-width: 820px) {
    padding: 0 ${spacing.page.mobilePadding} 24px;
  }
`;

const CopyrightBorder = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(21, 52, 100, 0.2);
`;

const CopyrightText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.2);
  letter-spacing: -0.24px;
  line-height: 14px;

  @media (max-width: 820px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.2px;
  }
`;

/* ========== Page Component ========== */

const ViewPage = () => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const accessToken = session.data?.accessToken;
  const submitStatus = session.data?.submitStatus;
  const [application, setApplication] = useState<GetApplicationDetaiResponse | null>(null);
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
  const position = isMock
    ? (mockData?.position || 'FRONTEND')
    : (application?.position?.replace('_', '/') || 'FRONTEND');

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
      <Section>
        <SectionText>
          <TitleText>My Application</TitleText>
          <SubtitleText>제출된 지원서를 확인할 수 있습니다</SubtitleText>
        </SectionText>

        {/* Basic Info Card */}
        <FormCard>
          <CardTitle>기본 정보</CardTitle>
          <FieldGroup>
            <FieldItem>
              <FieldLabel>지원 직무</FieldLabel>
              <PositionBadge>{positionLabel}</PositionBadge>
            </FieldItem>
            {inputLayout.map(({ id, title }) => (
              <FieldItem key={id}>
                <FieldLabel>{title}</FieldLabel>
                <FieldValue>{getFieldValue(id) || '-'}</FieldValue>
              </FieldItem>
            ))}
          </FieldGroup>
        </FormCard>

        {/* Self Introduction Card */}
        <FormCard>
          <CardTitle>자기소개서</CardTitle>
          <FieldGroup>
            {textareaLayout.map(({ id, title }) => (
              <FieldItem key={id}>
                <FieldLabel>{title}</FieldLabel>
                <TextareaValue>{getFieldValue(id) || '-'}</TextareaValue>
              </FieldItem>
            ))}
          </FieldGroup>
        </FormCard>

        <ButtonContainer>
          <BackButton onClick={() => router.push(USER.APPLY_COMPLETE)}>돌아가기</BackButton>
          <StatusButton onClick={() => router.push(USER.APPLY_STATUS)}>상태 조회하기</StatusButton>
        </ButtonContainer>
      </Section>

      <Copyright>
        <CopyrightBorder />
        <CopyrightText>Copyright 2023-2026. Leets All rights reserved.</CopyrightText>
      </Copyright>
    </PageContainer>
  );
};

export default ViewPage;
