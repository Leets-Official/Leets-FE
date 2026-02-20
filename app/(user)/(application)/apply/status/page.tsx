'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { isAxiosError } from 'axios';
import { SUBMIT_STATUS, USER, APPLICATION_STATUS_MESSAGE } from '@/constants';
import { getUserApplication, patchInterviewAttendance } from '@/api';
import { Alert } from '@/utils';
import { colors, radius, gradients } from '@/styles/theme';
import { ApplicationStatusType } from '@/types';

/* ========== Styled Components ========== */

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.neutral.lightBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: ${gradients.statusCheck};
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 32px;
  flex: 1;
  justify-content: center;
  z-index: 1;

  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`;

const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: ${radius.formCard};
  border: 1px solid rgba(53, 132, 251, 0.15);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 24px rgba(53, 132, 251, 0.12);

  @media (max-width: 820px) {
    padding: 36px 24px;
    gap: 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue[500]};
  letter-spacing: -0.28px;
  text-transform: uppercase;
`;

const StatusIconWrapper = styled.div<{ $type: 'success' | 'fail' | 'pending' }>`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $type }) => {
    if ($type === 'success') return colors.state.success;
    if ($type === 'fail') return colors.state.error;
    return colors.blue[400];
  }};
`;

const StatusTitle = styled.h1`
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

const StatusDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.blue[600]};
  letter-spacing: -0.3px;
  line-height: 22.5px;
  text-align: center;
  white-space: pre-line;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(53, 132, 251, 0.1);
  margin: 8px 0;
`;

const InterviewInfoBox = styled.div`
  width: 100%;
  background: ${colors.blue[50]};
  border-radius: ${radius.card};
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InterviewInfoLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.blue[500]};
  letter-spacing: -0.24px;
  text-transform: uppercase;
`;

const InterviewInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InterviewInfoText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.blue[800]};
  letter-spacing: -0.3px;
  line-height: 22px;
`;

const InterviewButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const AttendButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.3px;
  flex: 1;
  height: 48px;
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

const DeclineButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.3px;
  flex: 1;
  height: 48px;
  border-radius: ${radius.button};
  border: 1.5px solid ${colors.neutral.disabledBg};
  background: #ffffff;
  color: ${colors.blue[700]};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${colors.neutral.lightBg};
    border-color: ${colors.blue[300]};
  }
`;

const AttendedBadge = styled.div<{ $attend: boolean }>`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  padding: 10px 24px;
  border-radius: ${radius.chip};
  background: ${({ $attend }) => ($attend ? 'rgba(39, 190, 34, 0.1)' : 'rgba(207, 17, 17, 0.1)')};
  color: ${({ $attend }) => ($attend ? colors.state.success : colors.state.error)};
`;

const ActionButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 8px;
`;

const PrimaryAction = styled.button`
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

const SecondaryAction = styled.button`
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

/* ========== SVG Icons ========== */

const CheckSVG = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M10 18L16 24L26 12" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XSvg = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M12 12L24 24M24 12L12 24" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockSvg = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="10" stroke="#fff" strokeWidth="2.5" />
    <path d="M18 12V18L22 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ========== Helper ========== */

type StatusInfo = {
  iconType: 'success' | 'fail' | 'pending';
  sectionLabel: string;
};

const getStatusInfo = (status: ApplicationStatusType): StatusInfo => {
  switch (status) {
    case 'PASS_PAPER':
      return { iconType: 'success', sectionLabel: '서류 전형 결과' };
    case 'FAIL_PAPER':
      return { iconType: 'fail', sectionLabel: '서류 전형 결과' };
    case 'PASS':
      return { iconType: 'success', sectionLabel: '최종 결과' };
    case 'FAIL':
      return { iconType: 'fail', sectionLabel: '최종 결과' };
    default:
      return { iconType: 'pending', sectionLabel: '서류 전형 결과' };
  }
};

const StatusIcon = ({ type }: { type: 'success' | 'fail' | 'pending' }) => {
  if (type === 'success') return <CheckSVG />;
  if (type === 'fail') return <XSvg />;
  return <ClockSvg />;
};

/* ========== Page Component ========== */

const VALID_STATUSES: ApplicationStatusType[] = ['PENDING', 'PASS_PAPER', 'FAIL_PAPER', 'PASS', 'FAIL'];

const StatusPage = () => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const mockStatus = searchParams.get('status') as ApplicationStatusType | null;
  const accessToken = session.data?.accessToken;
  const submitStatus = session.data?.submitStatus;

  const [applicationStatus, setApplicationStatus] = useState<ApplicationStatusType>(
    isMock && mockStatus && VALID_STATUSES.includes(mockStatus) ? mockStatus : 'PENDING',
  );
  const [interviewDate, setInterviewDate] = useState(isMock ? '2025.09.06 (토) 14:00' : '');
  const [interviewPlace, setInterviewPlace] = useState(isMock ? '가천대학교 AI관 301호' : '');
  const [hasInterview, setHasInterview] = useState<'CHECK' | 'UNCHECK' | 'PENDING'>('PENDING');
  const [isLoading, setIsLoading] = useState(!isMock);

  useEffect(() => {
    if (isMock) return;
    if (submitStatus !== undefined && submitStatus !== SUBMIT_STATUS.SUBMIT) {
      router.replace(USER.APPLY);
    }
  }, [submitStatus, router, isMock]);

  useEffect(() => {
    if (isMock) return;
    const fetchStatus = async () => {
      if (!accessToken) return;
      const { result } = await getUserApplication(accessToken);
      if (!isAxiosError(result)) {
        setApplicationStatus(result.applicationStatus);
        if (result.interview) {
          setInterviewDate(result.interview.fixedInterviewDate || '');
          setInterviewPlace(result.interview.place || '');
        }
        setIsLoading(false);
      }
    };
    if (submitStatus === SUBMIT_STATUS.SUBMIT && accessToken) {
      fetchStatus();
    }
  }, [submitStatus, accessToken, isMock]);

  const handleInterviewAttendance = async (attend: boolean) => {
    const confirmMsg = attend
      ? '면접에 참석하시겠습니까?'
      : '면접에 불참석하시겠습니까?\n불참석 시 면접 기회가 사라집니다.';

    if (!window.confirm(confirmMsg)) return;

    const status = attend ? 'CHECK' : 'UNCHECK';

    if (isMock) {
      setHasInterview(status);
      return;
    }

    const { result } = await patchInterviewAttendance(status, accessToken);

    if (!isAxiosError(result)) {
      setHasInterview(status);
      Alert.success(attend ? '면접 참석이 확인되었습니다.' : '면접 불참석이 접수되었습니다.');
    }
  };

  if (isLoading) return null;

  const statusMessage = APPLICATION_STATUS_MESSAGE[applicationStatus];
  const { iconType, sectionLabel } = getStatusInfo(applicationStatus);

  return (
    <PageContainer>
      <ContentWrapper>
        <Card>
          <SectionTitle>{sectionLabel}</SectionTitle>

          <StatusIconWrapper $type={iconType}>
            <StatusIcon type={iconType} />
          </StatusIconWrapper>

          <StatusTitle>{statusMessage.title}</StatusTitle>
          <StatusDescription>{statusMessage.description}</StatusDescription>

          {/* Interview info for PASS_PAPER */}
          {applicationStatus === 'PASS_PAPER' && (interviewDate || interviewPlace) && (
            <>
              <Divider />
              <InterviewInfoBox>
                <InterviewInfoLabel>면접 안내</InterviewInfoLabel>
                {interviewDate && (
                  <InterviewInfoRow>
                    <InterviewInfoText>일시: {interviewDate}</InterviewInfoText>
                  </InterviewInfoRow>
                )}
                {interviewPlace && (
                  <InterviewInfoRow>
                    <InterviewInfoText>장소: {interviewPlace}</InterviewInfoText>
                  </InterviewInfoRow>
                )}
              </InterviewInfoBox>
            </>
          )}

          {/* Interview attendance buttons */}
          {applicationStatus === 'PASS_PAPER' && hasInterview === 'PENDING' && (
            <InterviewButtonGroup>
              <AttendButton onClick={() => handleInterviewAttendance(true)}>면접 참석</AttendButton>
              <DeclineButton onClick={() => handleInterviewAttendance(false)}>면접 불참석</DeclineButton>
            </InterviewButtonGroup>
          )}

          {/* Interview attendance confirmed badge */}
          {applicationStatus === 'PASS_PAPER' && hasInterview !== 'PENDING' && (
            <AttendedBadge $attend={hasInterview === 'CHECK'}>
              {hasInterview === 'CHECK' ? '면접 참석 확인됨' : '면접 불참석'}
            </AttendedBadge>
          )}

          <Divider />

          <ActionButtonGroup>
            <SecondaryAction onClick={() => router.push(USER.APPLY_VIEW)}>내 지원서 보기</SecondaryAction>
            <SecondaryAction onClick={() => router.push(USER.HOME)}>홈으로 돌아가기</SecondaryAction>
          </ActionButtonGroup>
        </Card>
      </ContentWrapper>
    </PageContainer>
  );
};

export default StatusPage;
