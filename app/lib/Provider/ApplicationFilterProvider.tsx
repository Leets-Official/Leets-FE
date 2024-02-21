'use client';

import { APPLICATION_DEFAULT_FILTER_CONDITION } from '@/constants';
import { ReactNode, createContext, useMemo } from 'react';
import useQuery from '../../../hooks/useQuery';

interface ApplicationFilter {
  query: typeof APPLICATION_DEFAULT_FILTER_CONDITION;
  setQuery: <V extends object>(object: V, predicate?: boolean) => void;
  initQuery: () => void;
}

export const ApplicationFilterContext = createContext<ApplicationFilter | null>(null);

const ApplicationFilterProvider = ({ children }: { children: ReactNode }) => {
  const { query, setQuery, initQuery } = useQuery(APPLICATION_DEFAULT_FILTER_CONDITION);
  const contextValue = useMemo(() => ({ query, setQuery, initQuery }), [query, setQuery, initQuery]);

  return <ApplicationFilterContext.Provider value={contextValue}>{children}</ApplicationFilterContext.Provider>;
};

export default ApplicationFilterProvider;
