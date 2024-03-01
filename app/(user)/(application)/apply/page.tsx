'use client';

import { getUserApplication } from '@/api';
import { ApplyProvider } from '@/app/lib';
import ApplyForm from '@/components/Form/ApplyForm';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Application, SubmitStatus } from '@/types';

const Apply = () => {
  const [application, setApplication] = useState<{ submitStatus: SubmitStatus; accessToken: string } & Application>();
  const session = useSession();

  useEffect(() => {
    const submitStatus = session.data?.submitStatus!;
    const accessToken = session.data?.accessToken!;

    const fetch = async () => {
      const { result } = await getUserApplication(accessToken);
      setApplication({ accessToken, submitStatus, ...result });
    };
    if (submitStatus && submitStatus !== 'NONE') {
      fetch();
    }
  }, []);

  return (
    <ApplyProvider application={{ ...application! }}>
      <ApplyForm />
    </ApplyProvider>
  );
};

export default Apply;
