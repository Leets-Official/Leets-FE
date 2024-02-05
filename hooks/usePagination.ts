'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { NUMBER, PAGINATION } from '@/constants';
import { ApplicationType } from '@/types';

type PaginationResult = {
  currentPage: number;
  currentItems: Omit<ApplicationType, 'position'>[];
  handlePageChange: (pageNumber: number) => void;
};

const usePagination = ({ items }: { items: ApplicationType[] }): PaginationResult => {
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
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    currentItems,
    handlePageChange,
  };
};

export default usePagination;
