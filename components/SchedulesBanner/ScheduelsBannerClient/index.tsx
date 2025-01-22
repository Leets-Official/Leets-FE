'use client';

import React, { useState } from 'react';
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

  const isEmailValid = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return emailRegex.test(value);
  };

  const handleSubscribe = async () => {
    if (isSubmitting) return;

    if (!isEmailValid(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await postMailSubscribe(email);
      if (res.result === true) alert('알림 신청이 완료되었습니다.');

      setEmail('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubscribe();
  };

  if (currentPhase.id === 3) {
    return (
      <BannerButton onClick={handleSubscribe} disabled={isSubmitting}>
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
        onKeyDown={handleKeyDown}
      />
      <BannerButton onClick={handleSubscribe} disabled={email === '' || isSubmitting}>
        {currentPhase.buttonText}
      </BannerButton>
    </>
  );
}
