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
    const period = Schedule.getCurrentPeriod();
    console.log('period', period);
    if (period === 'CLOSE') {
      Alert.error(APPLICATION.NOT_RECRUIT_PERIOD);
      return;
    }
    if (!isDesktop) {
      Alert.error(APPLICATION.ASK_USE_DESKTOP);
      return;
    }
    router.push(USER.LOGIN);
  };

  return (
    <S.Container>
      <S.ApplyButton href={USER.LOGIN} onClick={clickHandler}>
        지원하기
      </S.ApplyButton>
    </S.Container>
  );
};

export default memo(ApplyButton);
