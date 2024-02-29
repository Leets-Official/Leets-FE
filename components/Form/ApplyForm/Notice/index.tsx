'use client';

import { useState } from 'react';
import DropDownArrow from '@/public/assets/image/DropDownArrow.svg';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './Notice.styled';

const Notice = () => {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  return (
    <S.NoticeContainer>
      <S.NoticeTitle onClick={toggleHandler}>
        주의사항
        <S.ImageContainer $isToggle={isToggle}>
          <DropDownArrow />
        </S.ImageContainer>
      </S.NoticeTitle>
      <AnimatePresence>
        {isToggle && (
          <motion.div
            key="accordionContent"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <S.NoticeTextContainer>
              <S.Notice>
                - 제출 시 <S.Highlight>변경하거나 수정</S.Highlight>할 수 없습니다.
              </S.Notice>
              <S.Notice>
                - <S.Highlight>제출하기</S.Highlight>를 클릭해야 최종 지원 처리됩니다.
              </S.Notice>
              <S.Notice>- 모든 안내사항은 로그인 시 사용한 메일로 안내됩니다.</S.Notice>
              <S.Notice>- 선호 일자와 면접 일자는 달라질 수 있습니다.</S.Notice>
            </S.NoticeTextContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </S.NoticeContainer>
  );
};

export default Notice;
