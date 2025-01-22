'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDeviceChecker } from '@/hooks';
import { Alert, Schedule } from '@/utils';
import { USER, APPLICATION } from '@/constants';
import { postMailSubscribe } from '@/api/subscribe';
import type { SchedulePhase } from '@/types/type/Schedule';
import { BannerInput } from '../BannerInput';
import { BannerButton } from '../BannerButton';

interface SchedulesBannerClientProps {
  currentPhase: SchedulePhase;
}

export default function SchedulesBannerClient({ currentPhase }: SchedulesBannerClientProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { isDesktop } = useDeviceChecker();

  const clickApply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const period = Schedule.getCurrentPeriod();
    if (period === 'CLOSE') {
      Alert.error(APPLICATION.NOT_RECRUIT_PERIOD);
      return;
    }
    if (!isDesktop) {
      Alert.error(APPLICATION.ASK_USE_DESKTOP);
      return;
    }
    router.push(USER.LOGIN);
  };

  const isEmailValid = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return emailRegex.test(value);
  };

  const handleSubscribe = async () => {
    if (isSubmitting) return;

    if (!isEmailValid(email)) {
      Alert.error('이메일 형식이 올바르지 않습니다.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await postMailSubscribe(email);
      if (res.result === true) Alert.success('알림 신청이 완료되었습니다.');

      setEmail('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (currentPhase.id === 3) {
    return (
      <BannerButton onClick={clickApply} disabled={isSubmitting}>
        {currentPhase.buttonText}
      </BannerButton>
    );
  }

  return (
    <>
      <BannerInput
        type="email"
        placeholder="사전 알림을 받기 위한 메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <BannerButton onClick={handleSubscribe} disabled={email === '' || isSubmitting}>
        {currentPhase.buttonText}
      </BannerButton>
    </>
  );
}
