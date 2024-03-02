'use client';

import { getUserApplication } from '@/api';
import { ApplyProvider } from '@/app/lib';
import ApplyForm from '@/components/Form/ApplyForm';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Application } from '@/types';
import { APPLICATION_DEFAULT } from '@/constants';

const Apply = () => {
  const [application, setApplication] = useState<Application>(APPLICATION_DEFAULT);
  const session = useSession();
  const accessToken = session.data?.accessToken!;
  const submitStatus = session.data?.submitStatus!;
  const applicatoinData = { ...application, submitStatus, accessToken };

  useEffect(() => {
    const fetch = async () => {
      const { result } = await getUserApplication(accessToken);
      setApplication(result);
    };
    if (submitStatus && submitStatus !== 'NONE') {
      fetch();
    }
  }, []);

  return (
    <ApplyProvider application={applicatoinData}>
      <ApplyForm />
    </ApplyProvider>
  );
};

export default Apply;
