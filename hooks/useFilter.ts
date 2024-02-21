'use client';

import { ApplicationType } from '@/types';
import { APPLICATION_DEFAULT_FILTER_CONDITION } from '@/constants';
import { Search } from '@/utils';
import useApplicationFilterContext from './useApplicationFilterContext';

const generateFilterConditions = ({ applicationStatus, hasInterview }: typeof APPLICATION_DEFAULT_FILTER_CONDITION) => {
  return Search.makeFilterConditionObj({
    filterValueList: [applicationStatus, hasInterview],
  });
};

const useFilter = <T extends ApplicationType>({ list }: { list: T[] }) => {
  const { query } = useApplicationFilterContext()!;
  const filteredList = Search.filter(list, generateFilterConditions(query));

  return { filteredList };
};

export default useFilter;
