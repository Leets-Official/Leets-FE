'use client';

import { APPLICATION_DEFAULT_FILTER_CONDITION } from '@/constants';
import { ReactNode, createContext, useState, Dispatch, SetStateAction, useMemo } from 'react';

interface ApplicationFilter {
  filterCondition: typeof APPLICATION_DEFAULT_FILTER_CONDITION;
  setFilterCondition: Dispatch<SetStateAction<typeof APPLICATION_DEFAULT_FILTER_CONDITION>>;
}

export const ApplicationFilterContext = createContext<ApplicationFilter | null>(null);

const ApplicationFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterCondition, setFilterCondition] = useState(APPLICATION_DEFAULT_FILTER_CONDITION);
  const contextValue = useMemo(() => ({ filterCondition, setFilterCondition }), [filterCondition, setFilterCondition]);

  return <ApplicationFilterContext.Provider value={contextValue}>{children}</ApplicationFilterContext.Provider>;
};

export default ApplicationFilterProvider;
