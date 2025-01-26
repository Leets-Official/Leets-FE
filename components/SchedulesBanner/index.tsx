'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCurrentPhase } from '@/utils/ScheduleBanner';
import { CountdownTimer } from './CountdownTimer';
import SchedulesBannerClient from './ScheduelsBannerClient';
import styles from './SchedulesBanner.module.css';

export default function ScheduleBanner() {
  const currentPhase = getCurrentPhase();
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const rect = document.querySelector(`.${styles.bannerContainer}`)?.getBoundingClientRect();
    if (rect) {
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      const isInView = elementTop < windowHeight * 0.5 && elementBottom > windowHeight * 0.5;
      setInView(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!currentPhase) return null;

  return (
    <motion.div
      className={styles.bannerContainer}
      key={currentPhase.id}
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerTextBlock}>
          <div className={styles.phaseTitle}>Leets 5th Recruiting</div>
          <div className={`${styles.title} ${currentPhase.id === 1 ? styles.titlePhase1 : ''}`}>
            {currentPhase.title}
            <br />
            {currentPhase.subtitle}
          </div>
          <div className={styles.notice}>{currentPhase.notice}</div>
          {currentPhase.id > 1 && (
            <div className={styles.subtitle}>
              <CountdownTimer targetDate={currentPhase.endDate} />
            </div>
          )}
        </div>

        <div className={`${styles.buttonWrapper} ${currentPhase.id !== 3 ? styles.buttonWrapperNotPhase3 : ''}`}>
          <SchedulesBannerClient currentPhase={currentPhase} />
        </div>
      </div>
    </motion.div>
  );
}
