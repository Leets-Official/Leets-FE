import React from 'react';
import { getCurrentPhase } from '@/utils/ScheduleBanner';
import { BannerButton } from './BannerButton';
import { BannerInput } from './BannerInput';
import { CountdownTimer } from './CountdownTimer';
import styles from './SchedulesBanner.module.css';

export default function ScheduleBanner() {
  const currentPhase = getCurrentPhase();

  if (!currentPhase) return null;

  return (
    <div className={styles.bannerContainer} key={currentPhase.id}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerTextBlock}>
          <p className={styles.phaseTitle}>Leets 5th Recruiting</p>
          <p className={`${styles.title} ${currentPhase.id === 1 ? styles.titlePhase1 : ''}`}>
            {currentPhase.title}
            <br />
            {currentPhase.subtitle}
          </p>
          <p className={styles.notice}>{currentPhase.notice}</p>
          {currentPhase.id > 1 && (
            <p className={styles.subtitle}>
              <CountdownTimer targetDate={currentPhase.endDate} />
            </p>
          )}
        </div>

        <div className={`${styles.buttonWrapper} ${currentPhase.id !== 3 ? styles.buttonWrapperNotPhase3 : ''}`}>
          {currentPhase.id !== 3 && (
            <BannerInput type="email" placeholder="사전 알림을 받기 위한 메일을 입력해주세요" />
          )}
          <BannerButton>{currentPhase.buttonText}</BannerButton>
        </div>
      </div>
    </div>
  );
}
