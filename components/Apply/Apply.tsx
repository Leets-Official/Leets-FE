'use client';

import Nav from '@/components/Nav';
import LoginButton from '@/components/LoginButton';
import Form from '@/components/Form';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Common/Loading';
import { MAIN_COLOR, SESSION_STATUS, USER, APPLY_PERIOD, APPLICATION } from '@/constants';
import { useEffect } from 'react';
import { Schedule } from '@/utils/Schedule';
import { useRouter } from 'next/navigation';
import { Alert } from '@/utils';
import { useDeviceChecker } from '@/hooks';
import * as S from './Apply.styled';

const Apply = () => {
  const { status, data } = useSession();
  const router = useRouter();
  const color = MAIN_COLOR;
  const isDesktop = useDeviceChecker();

  useEffect(() => {
    const currentPeriod = Schedule.getCurrentPeriod(new Date());
    if (currentPeriod === APPLY_PERIOD.CLOSE) {
      Alert.error(APPLICATION.NOT_RECRUIT_PERIOD);
      router.push(USER.HOME);
    }
    if (!isDesktop) {
      Alert.error(APPLICATION.ASK_USE_DESKTOP);
      router.push(USER.HOME);
    }
  });

  if (status === SESSION_STATUS.LOADING) {
    return <Loading color={color} />;
  }
  return (
    <S.ApplyContainer>
      <Nav color={color} />
      {data?.user ? <Form color={color} email={data.user.email as string} token={data.accessToken} /> : <LoginButton />}
    </S.ApplyContainer>
  );
};

export default Apply;
