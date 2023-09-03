'use client';

import { useState, ChangeEvent, useMemo } from 'react';
import { SearchList, ApplicationListType } from '@/types';
import { PAGINATION } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from '@/utils';
import { useQueryCreator } from './useQueryCreator';

const useSearch = ({ applications, searchTargets }: SearchList<ApplicationListType>) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>('');
  const renderList = useMemo(() => {
    if (!searchInput) {
      return applications;
    }
    return applications.filter((application) =>
      searchTargets.some((searchTarget) => Search.isInclude(`${application[searchTarget]}`, searchInput))
    );
  }, [searchInput, applications]);
  const queryCreator = useQueryCreator();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const shouldSetPageNumber =
    searchParams.get(PAGINATION.QUERY) !== PAGINATION.DEFAULT_PAGE || !searchParams.has(PAGINATION.QUERY);
  if (searchInput && shouldSetPageNumber) {
    const query = queryCreator(PAGINATION.QUERY, PAGINATION.DEFAULT_PAGE);
    router.replace(query);
  }

  return {
    searchInput,
    onChangeHandler,
    renderList,
  };
};

export { useSearch };
