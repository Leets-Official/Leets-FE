'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent, memo } from 'react';
import { USER, APPLICATION } from '@/constants';
import { Schedule, Alert } from '@/utils';
import { useDeviceChecker } from '@/hooks';
import * as S from './ApplyButton.styled';

const ApplyButton = () => {
  const router = useRouter();
  const { isDesktop } = useDeviceChecker();

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (!isDesktop) {
      Alert.error(APPLICATION.ASK_USE_DESKTOP);
      return;
    }
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
