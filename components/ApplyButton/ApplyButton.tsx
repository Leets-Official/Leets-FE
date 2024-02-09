'use client';

import { ThemeColor } from '@/types';
import { USER, APPLICATION } from '@/constants';
import { MouseEvent, memo } from 'react';
import { useRouter } from 'next/navigation';
import { Schedule, Alert } from '@/utils';
import { useDeviceChecker } from '@/hooks';
import * as S from './ApplyButton.styled';

const ApplyButton = ({ color }: { color: ThemeColor }) => {
  const router = useRouter();
  const { isDesktop } = useDeviceChecker();

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();

    const period = Schedule.getCurrentPeriod();
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
      <S.ApplyButton href={USER.LOGIN} color={color} onClick={clickHandler}>
        지원하기
      </S.ApplyButton>
    </S.Container>
  );
};

export default memo(ApplyButton);
