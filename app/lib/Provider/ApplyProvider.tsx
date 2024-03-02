'use client';

import { APPLICATION_DEFAULT } from '@/constants';
import { ApplyContext } from '@/hooks/useApplyContext';
import { SubmitStatus } from '@/types';
import { ReactNode, useMemo } from 'react';

const ApplyProvider = ({
  children,
  application,
}: {
  children: ReactNode;
  application: typeof APPLICATION_DEFAULT & { accessToken: string; submitStatus: SubmitStatus };
}) => {
  const { enhancement, level, pros, goal, completion, position, submitStatus, accessToken, ...applicationInput } =
    application;
  const applicationText = { enhancement, level, pros, goal, completion };
  const value = useMemo(
    () => ({
      applicationInput: { ...applicationInput },
      applicationText,
      position,
      submitStatus,
      accessToken,
    }),
    []
  );

  return <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>;
};

export default ApplyProvider;
