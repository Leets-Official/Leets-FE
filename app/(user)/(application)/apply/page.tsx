'use client';

import { getUserApplication } from '@/api';
import ApplyForm from '@/components/Form/ApplyForm';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Application } from '@/types';
import { APPLICATION_DEFAULT } from '@/constants';

const Apply = () => {
  const [application, setApplication] = useState<Application>(APPLICATION_DEFAULT);
  const session = useSession();
  const accessToken = session.data?.accessToken;
  const submitStatus = session.data?.submitStatus!;
  const { motive, capability, conflict, schedule, passion, position, user, ...applicationInput } = application;
  const applicationText = { motive, capability, conflict, schedule, passion };
  const applicationData = {
    applicationInput: {
      ...applicationInput,
      phone: user.phone,
    },
    applicationText,
    submitStatus,
    position,
    accessToken,
  };

  useEffect(() => {
    const fetch = async () => {
      const { result } = await getUserApplication(accessToken);
      setApplication(result);
    };
    if (submitStatus && submitStatus !== 'NONE') {
      fetch();
    }
  }, [submitStatus]);

  return <ApplyForm application={applicationData} />;
};

export default Apply;
