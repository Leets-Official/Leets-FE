'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent, memo } from 'react';
import { USER } from '@/constants';
import * as S from './ApplyButton.styled';

const ApplyButton = () => {
  const router = useRouter();

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();
    router.push(USER.POSITION);
  };

  return (
    <S.Container>
      <S.ApplyButton href={USER.POSITION} onClick={clickHandler}>
        지원하기
      </S.ApplyButton>
    </S.Container>
  );
};

export default memo(ApplyButton);
