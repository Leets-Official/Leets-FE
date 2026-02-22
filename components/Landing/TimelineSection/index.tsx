'use client';

import { memo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { TIMELINE, USER } from '@/constants';
import * as gtag from '@/lib/gtag';
import Button from '@/components/Common/Button';
import * as S from './TimelineSection.styled';

const TimelineSection = () => {
  const router = useRouter();

  const handleApply = () => {
    gtag.event({
      action: 'click_apply_button_timeline',
      category: 'timeline',
      label: 'Apply Button in Timeline Clicked',
      value: 1,
    });
    router.push(USER.POSITION);
  };

  const entries = Object.entries(TIMELINE);

  return (
    <S.Section>
      <S.SectionInner>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <S.Title>Timeline</S.Title>
        </motion.div>

        <S.TimelineContainer>
          {entries.map(([key, value], index) => (
            <motion.div
              key={key}
              style={{ width: '100%' }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <S.TimelineRow>
                <S.MarkerColumn>
                  <S.TimelineMarker />
                  {index < entries.length - 1 && <S.TimelineSpacer />}
                </S.MarkerColumn>
                <S.EntryContent>
                  <S.EntryKey>{key}</S.EntryKey>
                  <S.EntryValue>{value}</S.EntryValue>
                </S.EntryContent>
              </S.TimelineRow>
            </motion.div>
          ))}
        </S.TimelineContainer>

        <S.ButtonContainer>
          <Button variant="solid" colorScheme="blue" size="medium" onClick={handleApply}>
            지원하기
          </Button>
        </S.ButtonContainer>
      </S.SectionInner>
    </S.Section>
  );
};

export default memo(TimelineSection);
