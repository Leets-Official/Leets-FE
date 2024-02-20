'use client';

import { ApplicationType } from '@/types';
import { SEARCH_TARGET } from '@/constants';
import useSort from './useSort';
import useFilter from './useFilter';
import useSearch from './useSearch';

const useApplicationExplore = <T extends ApplicationType>({ applications }: { applications: T[] }) => {
  const { searchInput, handleSearchInput, searchedList } = useSearch({
    applications,
    searchTargets: Object.values(SEARCH_TARGET),
  });
  const { sort, setSortBy } = useSort();
  const { filteredList } = useFilter({ list: searchedList });
  return { searchInput, handleSearchInput, setSortBy, renderList: sort({ list: filteredList }) };
};

export default useApplicationExplore;
