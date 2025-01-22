'use client';

import { useEffect, useState } from 'react';
import { CountdownContainer, TimeBox, Separator } from './CountdownTimer.styled';

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

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
    <CountdownContainer>
      <TimeBox>
        <div className="time">{timeLeft.days}</div>
        <div className="label">일</div>
      </TimeBox>
      <Separator>:</Separator>
      <TimeBox>
        <div className="time">{timeLeft.hours}</div>
        <div className="label">시간</div>
      </TimeBox>
      <Separator>:</Separator>
      <TimeBox>
        <div className="time">{timeLeft.minutes}</div>
        <div className="label">분</div>
      </TimeBox>
      <Separator>:</Separator>
      <TimeBox>
        <div className="time">{timeLeft.seconds}</div>
        <div className="label">초</div>
      </TimeBox>
    </CountdownContainer>
  );
}
