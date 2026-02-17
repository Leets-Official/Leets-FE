'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCurrentPhase } from '@/utils/ScheduleBanner';
import { USER } from '@/constants';
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

function getCTAContent(phaseId: number | null) {
  switch (phaseId) {
    case 3:
      return {
        showChip: true,
        subHeadline: 'Leets 7기 모집이 시작되었습니다!',
        tagline: '2월 26일 23:59에 접수 마감',
        mobileOnlyTagline: false,
        showCountdown: true,
        showApplyButton: true,
      };
    case 1:
    case 2:
      return {
        showChip: true,
        subHeadline: 'Leets와 함께 도전할 당신을\n기다리고 있어요.',
        tagline: '2026년 2월 모집 예정',
        mobileOnlyTagline: false,
        showCountdown: true,
        showApplyButton: false,
      };
    default:
      return {
        showChip: false,
        subHeadline: null,
        tagline: 'Build, Collaborate, Upscale\nLeets!',
        mobileOnlyTagline: true,
        showCountdown: false,
        showApplyButton: false,
      };
  }
}

const CTASection = () => {
  const currentPhase = getCurrentPhase();
  const router = useRouter();
  const phaseId = currentPhase?.id ?? null;
  const { showChip, subHeadline, tagline, mobileOnlyTagline, showCountdown, showApplyButton } = getCTAContent(phaseId);

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
          <S.Slogan>{'함께 도전하며\n우리의 가치를 증명하는 곳.'}</S.Slogan>
          {subHeadline && <S.SubHeadline>{subHeadline}</S.SubHeadline>}
          {tagline && <S.Tagline $mobileOnly={mobileOnlyTagline}>{tagline}</S.Tagline>}
          {showCountdown && currentPhase && (
            <CountdownTimer targetDate={currentPhase.endDate} />
          )}
          {showApplyButton && (
            <S.ButtonGroup>
              <Button variant="solid" colorScheme="blue" size="large" onClick={handleApply}>
                지원하기
              </Button>
            </S.ButtonGroup>
          )}
        </S.CTAContent>
      </motion.div>
    </S.CTAContainer>
  );
};

export default CTASection;
