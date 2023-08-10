import { useState, ChangeEvent, useMemo } from 'react';
import { SearchList } from '@/types';
import { SEARCH_TARGETS, PAGINATION } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from '@/utils';
import { useQueryCreator } from './useQueryCreator';

type Applicant = {
  name: string;
};

const useSearch = ({ list }: SearchList<Applicant>) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>('');
  const renderList = useMemo(() => {
    if (!searchInput) {
      return list;
    }
    return list.filter((elem) => Search.isInclude(`${elem[SEARCH_TARGETS.NAME]}`, searchInput));
  }, [searchInput, list]);
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