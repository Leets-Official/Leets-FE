'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCurrentPhase } from '@/utils/ScheduleBanner';
import { APPLY_DATE, USER } from '@/constants';
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

const COUNTDOWN_TARGET: Record<number, Date> = {
  1: APPLY_DATE.START,
  2: APPLY_DATE.END,
};

const CTASection = () => {
  const currentPhase = getCurrentPhase();
  const router = useRouter();
  const phaseId = currentPhase?.id ?? null;
  const isDefault = phaseId === null;
  const showChip = phaseId === 1 || phaseId === 2;
  const countdownTarget = phaseId ? COUNTDOWN_TARGET[phaseId] : null;

  const handleApply = () => {
    gtag.event({
      action: 'click_apply_button_banner',
      category: 'banner',
      label: 'Apply Button in CTA Section Clicked',
      value: 1,
    });
    router.push(USER.POSITION);
  };

  return (
    <S.CTAContainer>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}>
        <S.CTAContent>
          {showChip && <S.Chip>Leets 7th Recruiting</S.Chip>}
          {isDefault && <S.Slogan>{'함께 도전하며\n우리의 가치를 증명하는 곳.'}</S.Slogan>}
          {currentPhase?.title && <S.SubHeadline>{currentPhase.title}</S.SubHeadline>}
          {currentPhase?.notice && <S.Tagline $mobileOnly={false}>{currentPhase.notice}</S.Tagline>}
          {isDefault && <S.Tagline $mobileOnly>{'Build, Collaborate, Upscale\nLeets!'}</S.Tagline>}
          {countdownTarget && <CountdownTimer targetDate={countdownTarget} />}
          {currentPhase?.buttonText && (
            <S.ButtonGroup>
              <Button variant="solid" colorScheme="blue" size="medium" onClick={handleApply}>
                {currentPhase.buttonText}
              </Button>
            </S.ButtonGroup>
          )}
        </S.CTAContent>
      </motion.div>
    </S.CTAContainer>
  );
};

export default CTASection;
