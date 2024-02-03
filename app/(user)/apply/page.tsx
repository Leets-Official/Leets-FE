'use client';

import Nav from '@/components/Nav';
import LoginButton from '@/components/LoginButton';
import Form from '@/components/Form';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Common/Loading';
import { MAIN_COLOR, SESSION_STATUS, USER, APPLICATION } from '@/constants';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Alert } from '@/utils';
import { useDeviceChecker } from '@/hooks';
import { Schedule } from '@/utils/Schedule';
import * as S from './styled';

const Apply = () => {
  const router = useRouter();
  const { status, data } = useSession();
  const { isDesktop } = useDeviceChecker();

  useEffect(() => {
    if (!isDesktop) {
      Alert.error(APPLICATION.ASK_USE_DESKTOP);
      router.push(USER.HOME);
    }
    const period = Schedule.getCurrentPeriod(new Date());
    if (period === 'CLOSE') {
      router.push(USER.HOME);
    }
  });

  if (status === SESSION_STATUS.LOADING) {
    return <Loading color={MAIN_COLOR} />;
  }
  return (
    <S.ApplyContainer>
      <Nav color={MAIN_COLOR} />
      {data?.user ? <Form /> : <LoginButton />}
    </S.ApplyContainer>
  );
};

export default Apply;
