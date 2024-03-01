'use client';

import { APPLICATION_INPUT_DEFAULT, APPLICATION_TEXT_DEFAULT } from '@/constants';
import { createContext, useContext } from 'react';

export const ApplyContext = createContext({
  applicationInput: APPLICATION_INPUT_DEFAULT,
  applicationText: APPLICATION_TEXT_DEFAULT,
  position: 'DEV',
  submitStatus: 'NONE',
  email: '',
  accessToken: '',
});

const useApplyContext = () => {
  const context = useContext(ApplyContext);
  return context;
};

export default useApplyContext;
