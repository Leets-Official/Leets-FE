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
  const { filterCondition } = useApplicationFilterContext()!;
  const filteredList = Search.filter(list, generateFilterConditions(filterCondition));

  return { filteredList };
};

export default useFilter;
