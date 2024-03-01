'use client';

import { APPLICATION_DEFAULT } from '@/constants';
import { ApplyContext } from '@/hooks/useApplyContext';
import { SubmitStatus } from '@/types';
import { ReactNode, useMemo } from 'react';

const ApplyProvider = ({
  children,
  application: { result = APPLICATION_DEFAULT, submitStatus = 'NONE', accessToken = '' },
}: {
  children: ReactNode;
  application: { result?: typeof APPLICATION_DEFAULT; submitStatus?: SubmitStatus; accessToken: string };
}) => {
  const { enhancement, level, pros, goal, completion, user, position } = result;
  const { email } = user;
  const applicationText = { enhancement, level, pros, goal, completion };
  const applicationInput = { ...user, ...result };
  const value = useMemo(() => ({ applicationInput, applicationText, position, submitStatus, email, accessToken }), []);

  return <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>;
};

export default ApplyProvider;
