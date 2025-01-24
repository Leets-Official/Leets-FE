'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getCurrentPhase } from '@/utils/ScheduleBanner';
import { CountdownTimer } from './CountdownTimer';
import SchedulesBannerClient from './ScheduelsBannerClient';
import styles from './SchedulesBanner.module.css';

export const HeaderAnimation = {
  ready: {
    opacity: 0,
  },
  start: { opacity: 1, transition: { duration: 1, delay: 0.1 } },
} as const;

export default function ScheduleBanner() {
  const currentPhase = getCurrentPhase();

  if (!currentPhase) return null;

  return (
    <motion.div
      className={styles.bannerContainer}
      key={currentPhase.id}
      initial={{ y: -100, opacity: 0 }}
      animate="start"
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 1 }}>
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
