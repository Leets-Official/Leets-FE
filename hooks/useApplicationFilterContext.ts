'use client';

import { ApplicationFilterContext } from '@/app/lib/Provider/ApplicationFilterProvider';
import { useContext } from 'react';

const useApplicationFilterContext = () => {
  const context = useContext(ApplicationFilterContext);
  return context;
};

export default useApplicationFilterContext;
