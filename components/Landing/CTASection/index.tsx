'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCurrentPhase, getNextPhaseBoundary } from '@/utils/ScheduleBanner';
import { ROUND_SCHEDULE, USER, SUBMIT_STATUS } from '@/constants';
import { useSessionData } from '@/hooks';
import * as gtag from '@/lib/gtag';
import Button from '@/components/Common/Button';
import * as S from './CTASection.styled';

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <S.CountdownWrapper>
      <S.TimeBox>
        <div className="time">{timeLeft.days}</div>
        <div className="label">일</div>
      </S.TimeBox>
      <S.Separator>:</S.Separator>
      <S.TimeBox>
        <div className="time">{timeLeft.hours}</div>
        <div className="label">시간</div>
      </S.TimeBox>
      <S.Separator>:</S.Separator>
      <S.TimeBox>
        <div className="time">{timeLeft.minutes}</div>
        <div className="label">분</div>
      </S.TimeBox>
      <S.Separator>:</S.Separator>
      <S.TimeBox>
        <div className="time">{timeLeft.seconds}</div>
        <div className="label">초</div>
      </S.TimeBox>
    </S.CountdownWrapper>
  );
}

// 접수 관련 구간(1: 모집 예정, 2: 정규 접수중, 4: 추가 접수중)에만 카운트다운을 노출한다.
const COUNTDOWN_TARGET: Record<number, Date> = {
  1: ROUND_SCHEDULE.REGULAR.applyStart,
  2: ROUND_SCHEDULE.REGULAR.applyEnd,
  4: ROUND_SCHEDULE.ADDITIONAL.applyEnd,
};

const CTASection = () => {
  const [currentPhase, setCurrentPhase] = useState(getCurrentPhase);

  // 접수 시작·마감 시각에 페이지를 열어둔 채여도 새로고침 없이 배너가 전환되도록,
  // 다음 단계 경계에 맞춰 타이머를 걸고 스스로 재예약한다.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      const boundary = getNextPhaseBoundary();
      if (!boundary) return;

      // setTimeout 의 최대 지연 한계와 장시간 대기 중의 시계 오차를 피하려고
      // 1시간 단위로 끊어서 다시 예약한다.
      const delay = Math.min(Math.max(boundary.getTime() - Date.now() + 500, 0), 60 * 60 * 1000);

      timer = setTimeout(() => {
        setCurrentPhase(getCurrentPhase());
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => clearTimeout(timer);
  }, []);
  const router = useRouter();
  const { submitStatus } = useSessionData();
  const phaseId = currentPhase?.id ?? null;
  const isDefault = phaseId === null;
  const showChip = phaseId === 1 || phaseId === 2 || phaseId === 4;
  const countdownTarget = phaseId ? (COUNTDOWN_TARGET[phaseId] ?? null) : null;
  const isSubmitted = submitStatus === SUBMIT_STATUS.SUBMIT;

  const handleApply = () => {
    gtag.event({
      action: 'click_apply_button_banner',
      category: 'banner',
      label: 'Apply Button in CTA Section Clicked',
      value: 1,
    });
    router.push(USER.POSITION);
  };

  const handleCheckStatus = () => {
    router.push(USER.APPLY_STATUS);
  };

  return (
    <S.CTAContainer>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}>
        <S.CTAContent>
          {showChip && <S.Chip>Leets 8th Recruiting</S.Chip>}
          {isDefault && <S.Slogan>{'함께 도전하며\n우리의 가치를 증명하는 곳.'}</S.Slogan>}
          {currentPhase?.title && <S.SubHeadline>{currentPhase.title}</S.SubHeadline>}
          {currentPhase?.notice && <S.Tagline $mobileOnly={false}>{currentPhase.notice}</S.Tagline>}
          {isDefault && <S.Tagline $mobileOnly>{'Build, Collaborate, Upscale\nLeets!'}</S.Tagline>}
          {countdownTarget && <CountdownTimer targetDate={countdownTarget} />}
          {isSubmitted ? (
            <S.ButtonGroup>
              <Button variant="solid" colorScheme="blue" size="medium" onClick={handleCheckStatus}>
                지원 상태 조회
              </Button>
            </S.ButtonGroup>
          ) : (
            currentPhase?.buttonText && (
              <S.ButtonGroup>
                <Button variant="solid" colorScheme="blue" size="medium" onClick={handleApply}>
                  {currentPhase.buttonText}
                </Button>
              </S.ButtonGroup>
            )
          )}
        </S.CTAContent>
      </motion.div>
    </S.CTAContainer>
  );
};

export default CTASection;
