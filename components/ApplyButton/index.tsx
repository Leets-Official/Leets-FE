'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent, memo } from 'react';
import { USER } from '@/constants';
import * as gtag from '@/lib/gtag';
import * as S from './ApplyButton.styled';

const ApplyButton = () => {
  const router = useRouter();

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();
    gtag.event({
      action: 'click_apply_button_bottom',
      category: 'Bottom Button_apply',
      label: 'Apply Button Clicked',
      value: 1,
    });
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
