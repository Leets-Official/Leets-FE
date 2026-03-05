'use client';

import { useSearchParams } from 'next/navigation';
import { NUMBER, PAGINATION } from '@/constants';

const usePagination = () => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get(PAGINATION.QUERY);
  const currentPage = Number(pageNumber ?? NUMBER.ONE);

  const indexOfLastItem = currentPage * NUMBER.TEN;
  const indexOfFirstItem = indexOfLastItem - NUMBER.TEN;

  return {
    currentPage,
    handlePageChange: (_page: number) => {},
    indices: { start: indexOfFirstItem, end: indexOfLastItem },
  };
};

export default usePagination;
