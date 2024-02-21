'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { NUMBER, PAGINATION } from '@/constants';

const usePagination = () => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get(PAGINATION.QUERY);
  const [currentPage, setCurrentPage] = useState<number>(NUMBER.ONE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(Number(pageNumber ?? NUMBER.ONE));
  }, [pageNumber]);

  const indexOfLastItem = currentPage * NUMBER.TEN;
  const indexOfFirstItem = indexOfLastItem - NUMBER.TEN;

  return {
    currentPage,
    handlePageChange,
    indices: { start: indexOfFirstItem, end: indexOfLastItem },
  };
};

export default usePagination;
