'use client';

import React, { useState, useEffect } from 'react';
import { getCurrentPhase } from '@/utils/ScheduleBanner';
import type { SchedulePhase } from '@/types/type/Schedule';
import { BannerButton } from './BannerButton';
import { BannerInput } from './BannerInput';
import { CountdownTimer } from './CountdownTimer';
import { BannerContainer, BannerContent, BannerTextBlock, ButtonWrapper } from './SchedulesBanner.styled';

export default function ScheduleBanner() {
  const [currentPhase, setCurrentPhase] = useState<SchedulePhase | null>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setCurrentPhase(getCurrentPhase());
    const interval = setInterval(() => setCurrentPhase(getCurrentPhase()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!currentPhase) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { email, phase: currentPhase?.id });
  };

  return (
    <BannerContainer>
      <BannerContent>
        <BannerTextBlock id={currentPhase.id}>
          <p className="phaseTitle">Leets 5th Recruiting</p>
          <h1 className="title">
            {currentPhase.title}
            <br />
            {currentPhase.subtitle}
          </h1>
          <p className="notice">{currentPhase.notice}</p>
          {currentPhase.id > 1 && (
            <p className="subtitle">
              <CountdownTimer targetDate={currentPhase.endDate} />
            </p>
          )}
        </BannerTextBlock>

        <ButtonWrapper>
          {currentPhase.showInput && (
            <BannerInput
              type="email"
              placeholder="사전 알림을 받기 위한 메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <BannerButton>{currentPhase.buttonText}</BannerButton>
        </ButtonWrapper>
      </BannerContent>
    </BannerContainer>
  );
}
