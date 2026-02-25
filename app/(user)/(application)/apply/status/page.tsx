'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSessionData } from '@/hooks';
import styled from 'styled-components';
import { isAxiosError } from 'axios';
import { SUBMIT_STATUS, USER, APPLICATION_STATUS_MESSAGE } from '@/constants';
import { getUserApplicationStatus, patchInterviewAttendance } from '@/api';
import { Alert, Schedule, Formatter } from '@/utils';
import { colors, spacing } from '@/styles/theme';
import { ApplicationStatusType } from '@/types';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import CopyrightFooter from '@/components/Common/CopyrightFooter';

import Confetti from '@/components/Common/Confetti';

/* ========== Styled Components ========== */

const PageContainer = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(180deg, rgba(53, 132, 251, 0) 0%, rgba(53, 132, 251, 0.2) 100%), ${colors.neutral.lightBg};
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
  padding: 120px 20px;
  gap: 40px;
  flex: 1;

  @media (max-width: 820px) {
    padding: 60px ${spacing.page.mobilePadding};
    gap: 30px;
  }
`;

const StatusTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const StatusRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
`;

const NameText = styled.span`
  font-size: 36px;
  font-weight: 762;
  color: ${colors.blue[800]};
  letter-spacing: -0.72px;
  line-height: 43.2px;

  @media (max-width: 820px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;

const LabelText = styled.span`
  font-size: 36px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.72px;
  line-height: 43.2px;

  @media (max-width: 820px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;

const StatusValue = styled.span`
  font-size: 64px;
  font-weight: 762;
  color: ${colors.blue[500]};
  letter-spacing: -1.28px;
  line-height: 76.8px;

  @media (max-width: 820px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.6px;
  }
`;

const StatusSuffix = styled.span`
  font-size: 64px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -1.28px;
  line-height: 76.8px;

  @media (max-width: 820px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.6px;
  }
`;

const InfoText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.blue[800]};
  letter-spacing: -0.48px;
  line-height: 28.8px;
  text-align: center;
  white-space: pre-line;

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
  }
`;

const SolidButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.56px;
  line-height: 33.6px;
  width: 320px;
  height: 66px;
  border-radius: 99px;
  border: none;
  background: ${colors.blue[500]};
  color: ${colors.neutral.white};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
    width: 180px;
    height: 33px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 820px) {
    gap: 12px;
  }
`;

const AttendButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.56px;
  line-height: 33.6px;
  white-space: nowrap;
  min-width: 300px;
  border-radius: 99px;
  border: none;
  background: ${colors.blue[500]};
  color: ${colors.neutral.white};
  cursor: pointer;
  transition: opacity 0.2s ease;
  padding: 16px 36px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
    min-width: 120px;
    padding: 8px 14px;
  }
`;

const DeclineButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.56px;
  line-height: 33.6px;
  white-space: nowrap;
  border-radius: 99px;
  border: 1.4px solid ${colors.blue[500]};
  background: transparent;
  color: ${colors.blue[500]};
  cursor: pointer;
  transition: opacity 0.2s ease;
  padding: 16px 36px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
    padding: 8px 14px;
    border-width: 1px;
  }
`;

const AttendedBadge = styled.div<{ $attend: boolean }>`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.56px;
  line-height: 33.6px;
  padding: 16px 36px;
  border-radius: 99px;
  background: ${({ $attend }) => ($attend ? 'rgba(39, 190, 34, 0.1)' : 'rgba(207, 17, 17, 0.1)')};
  color: ${({ $attend }) => ($attend ? colors.state.success : colors.state.error)};

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
    padding: 8px 14px;
  }
`;

const ViewLink = styled.button`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  line-height: 19.2px;
  color: rgba(21, 52, 100, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(21, 52, 100, 0.7);
  }

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
  }
`;

const FailStatusValue = styled.span`
  font-size: 48px;
  font-weight: 600;
  color: ${colors.blue[800]};
  opacity: 0.5;
  letter-spacing: -0.96px;
  line-height: 57.6px;

  @media (max-width: 820px) {
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: -0.48px;
  }
`;

const FailSuffix = styled.span`
  font-size: 48px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.96px;
  line-height: 57.6px;

  @media (max-width: 820px) {
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: -0.48px;
  }
`;

const DeadlineHint = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.5);
  letter-spacing: -0.32px;
  line-height: 22px;
  text-align: center;

  @media (max-width: 820px) {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.24px;
  }
`;

const FailInfoText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.blue[800]};
  opacity: 0.55;
  letter-spacing: -0.4px;
  line-height: 30px;
  text-align: center;
  white-space: pre-line;

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
  }
`;

/* ========== Helper ========== */

const STATUS_LABEL: Record<ApplicationStatusType, string> = {
  PENDING: '서류 심사중',
  PASS_PAPER: '서류 합격',
  FAIL_PAPER: '서류 탈락',
  PASS: '최종 합격',
  FAIL: '최종 탈락',
};

/* ========== Page Component ========== */

const VALID_STATUSES: ApplicationStatusType[] = ['PENDING', 'PASS_PAPER', 'FAIL_PAPER', 'PASS', 'FAIL'];

const StatusPage = () => {
  const { accessToken, submitStatus, uid: rawUid, userName: rawUserName, status } = useSessionData();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const mockStatus = searchParams.get('status') as ApplicationStatusType | null;
  const uid = rawUid || '';
  const userName = rawUserName || '';

  const [applicationStatus, setApplicationStatus] = useState<ApplicationStatusType>(
    isMock && mockStatus && VALID_STATUSES.includes(mockStatus) ? mockStatus : 'PENDING',
  );
  const [interviewDate, setInterviewDate] = useState(isMock ? '2026.03.11 (수) 14:00' : '');
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
    if (status === 'loading') return;

    const fetchStatus = async () => {
      if (!accessToken) {
        setIsLoading(false);
        return;
      }
      const { result } = await getUserApplicationStatus(accessToken);
      if (!isAxiosError(result)) {
        setApplicationStatus(result.status);
        setHasInterview(result.hasInterview ?? 'PENDING');
        setInterviewDate(result.interviewDate ? Formatter.formatInterviewDateTime(result.interviewDate) : '');
        setInterviewPlace(result.interviewPlace || '');
      }
      setIsLoading(false);
    };

    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      fetchStatus();
    } else {
      setIsLoading(false);
    }
  }, [submitStatus, accessToken, isMock, status]);

  const handleInterviewAttendance = async (attend: boolean) => {
    const confirmMsg = attend
      ? '면접에 참석하시겠습니까?'
      : '면접에 불참석하시겠습니까?\n불참석 시 면접 기회가 사라집니다.';

    if (!window.confirm(confirmMsg)) return;

    const attendStatus = attend ? 'CHECK' : 'UNCHECK';

    if (isMock) {
      setHasInterview(attendStatus);
      return;
    }

    const { result } = await patchInterviewAttendance(attendStatus, uid, accessToken);

    if (!isAxiosError(result)) {
      setHasInterview(attendStatus);
      Alert.success(attend ? '면접 참석이 확인되었습니다.' : '면접 불참석이 접수되었습니다.');
    }
  };

  if (isLoading) return null;

  const INTERVIEW_RESPONSE_DEADLINE = new Date('2026-03-10T23:59:59+09:00');
  const isBeforeDeadline = Schedule.getKSTDate(new Date()) <= INTERVIEW_RESPONSE_DEADLINE;

  const isFail = applicationStatus === 'FAIL' || applicationStatus === 'FAIL_PAPER';
  const isPass = applicationStatus === 'PASS';
  const statusMessage = APPLICATION_STATUS_MESSAGE[applicationStatus];
  const statusLabel = STATUS_LABEL[applicationStatus];
  const showInterviewInfo = applicationStatus === 'PASS_PAPER' && (interviewDate || interviewPlace);
  const showInterviewButtons = applicationStatus === 'PASS_PAPER' && hasInterview === 'PENDING' && isBeforeDeadline;
  const showInterviewBadge = applicationStatus === 'PASS_PAPER' && hasInterview !== 'PENDING';
  const canChangeInterview = showInterviewBadge && isBeforeDeadline;

  const interviewInfoText = [
    interviewPlace && `면접 장소: ${interviewPlace}`,
    interviewDate && `면접 일시: ${interviewDate}`,
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <PageContainer>
      <HeaderTemplate variant="black" />
      {isPass && <Confetti />}
      <Section>
        <StatusTextBlock>
          <StatusRow>
            <NameText>{isMock ? '홍길동' : userName}</NameText>
            <LabelText>님의 지원 상태는</LabelText>
          </StatusRow>
          <StatusRow>
            {isFail ? (
              <>
                <FailStatusValue>{statusLabel}</FailStatusValue>
                <FailSuffix>입니다.</FailSuffix>
              </>
            ) : (
              <>
                <StatusValue>{statusLabel}</StatusValue>
                <StatusSuffix>입니다.</StatusSuffix>
              </>
            )}
          </StatusRow>
        </StatusTextBlock>

        {isFail ? (
          <FailInfoText>{statusMessage.description}</FailInfoText>
        ) : (
          <InfoText>{showInterviewInfo ? interviewInfoText : statusMessage.description}</InfoText>
        )}

        {/* Interview attendance buttons for PASS_PAPER (PENDING) */}
        {showInterviewButtons && (
          <>
            <DeadlineHint>3월 10일 23:59까지 응답해 주세요.</DeadlineHint>
            <ButtonGroup>
              <AttendButton onClick={() => handleInterviewAttendance(true)}>면접 참석</AttendButton>
              <DeclineButton onClick={() => handleInterviewAttendance(false)}>면접 불참</DeclineButton>
            </ButtonGroup>
            <ViewLink onClick={() => router.push(USER.APPLY_VIEW)}>내 지원서 보기</ViewLink>
          </>
        )}

        {/* Interview attendance badge (responded) */}
        {showInterviewBadge && (
          <>
            <AttendedBadge $attend={hasInterview === 'CHECK'}>
              {hasInterview === 'CHECK' ? '면접 참석 확인됨' : '면접 불참석'}
            </AttendedBadge>
            {canChangeInterview && (
              <>
                <DeadlineHint>3월 10일 23:59 이전까지 변경 가능합니다.</DeadlineHint>
                <ButtonGroup>
                  <AttendButton onClick={() => handleInterviewAttendance(true)}>면접 참석</AttendButton>
                  <DeclineButton onClick={() => handleInterviewAttendance(false)}>면접 불참</DeclineButton>
                </ButtonGroup>
              </>
            )}
            <ViewLink onClick={() => router.push(USER.APPLY_VIEW)}>내 지원서 보기</ViewLink>
          </>
        )}

        {/* View button for non-PASS_PAPER statuses */}
        {applicationStatus !== 'PASS_PAPER' && (
          <SolidButton onClick={() => router.push(USER.APPLY_VIEW)}>내 지원서 보기</SolidButton>
        )}
      </Section>

      <CopyrightFooter />
    </PageContainer>
  );
};

export default StatusPage;
