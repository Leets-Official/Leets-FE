import { useState } from 'react';
import { ThemeColor } from '@/types';
import DropDownArrow from '@/public/assets/image/DropDownArrow.svg';
import * as S from './Notice.styled';

const Notice = ({ color }: { color: ThemeColor }) => {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  return (
    <S.NoticeContainer>
      <S.NoticeTitle onClick={toggleHandler} color={color}>
        주의사항
        <S.ImageContainer $isToggle={isToggle}>
          <DropDownArrow />
        </S.ImageContainer>
      </S.NoticeTitle>
      {isToggle && (
        <S.NoticeTextContainer>
          <S.Notice>- 제출 시 변경하거나 수정할 수 없습니다.</S.Notice>
          <S.Notice>- 모든 안내사항은 로그인 시 사용한 메일로 안내됩니다.</S.Notice>
          <S.Notice>- 선호 일자와 면접 일자는 달라질 수 있습니다.</S.Notice>
        </S.NoticeTextContainer>
      )}
    </S.NoticeContainer>
  );
};

export default Notice;
