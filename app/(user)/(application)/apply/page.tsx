'use client';

import Form from '@/components/Form';
import { USER, APPLICATION } from '@/constants';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Alert } from '@/utils';
import { useDeviceChecker } from '@/hooks';
import { Schedule } from '@/utils/Schedule';

const Apply = () => {
  const router = useRouter();
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
  }, []);

  return <Form />;
};

export default Apply;
