'use client';

import { getUserApplication } from '@/api';
import { ApplyProvider } from '@/app/lib';
import ApplyForm from '@/components/Form/ApplyForm';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const Apply = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [application, setApplication] = useState<{ submitStatus: string; token: string }>();
  const session = useSession();
  const submitStatus = session.data?.submitStatus!;
  const token = session.data?.accessToken!;

  useEffect(() => {
    const fetch = async () => {
      const { result } = await getUserApplication(token);
      setApplication({ token, submitStatus, ...result });
    };
    if (submitStatus && submitStatus !== 'NONE') {
      fetch();
    }
    setIsLoading(false);
  }, [isLoading]);

  return (
    <ApplyProvider application={{ ...application!, submitStatus }}>
      <ApplyForm />
    </ApplyProvider>
  );
};

export default Apply;
