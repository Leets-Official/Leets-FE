'use client';

import { useState } from 'react';
import { ApplicationType, SortByType } from '@/types';
import { SORT_METHOD } from '@/constants';
import { Search } from '@/utils';

const useSort = () => {
  const [sortBy, setSortBy] = useState<SortByType>({ target: null, method: SORT_METHOD.ASC });

  const sort = <T extends ApplicationType>({ list }: { list: T[] }) => {
    return sortBy.target ? Search.sort(list, sortBy) : list;
  };

  return { sort, setSortBy };
};

export default useSort;
