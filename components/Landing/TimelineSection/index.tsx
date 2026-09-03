'use client';

import { memo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { TIMELINE, USER } from '@/constants';
import * as gtag from '@/lib/gtag';
import Button from '@/components/Common/Button';
import * as S from './TimelineSection.styled';

const LEETS_INSTAGRAM = 'https://instagram.com/leets_official';

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

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <S.TimelineNote>
            1주차부터 매주 수요일 18시에 정규 모임이 진행됩니다.
            <br />
            자세한 일정은{' '}
            <S.NoteLink href={LEETS_INSTAGRAM} target="_blank" rel="noopener noreferrer">
              인스타그램
            </S.NoteLink>
            에서 확인해 주세요.
          </S.TimelineNote>

          <S.NoticeBox>
            <S.NoticeTitle>1주차 일정 변경 안내</S.NoticeTitle>
            <S.NoticeText>
              교내 축제 일정으로 1주차 정규 모임이 <S.NoticeStrong>9월 16일에서 9월 23일로</S.NoticeStrong> 한 주
              순연되었습니다.
              <br />
              OT는 9월 14일 그대로 진행됩니다.
            </S.NoticeText>
          </S.NoticeBox>
        </motion.div>

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
