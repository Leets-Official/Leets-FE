'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PAGINATION } from '@/constants';
import { ApplicationListType } from '@/types';

type PaginationResult = {
  currentPage: number;
  currentItems: Omit<ApplicationListType, 'position'>[];
  handlePageChange: (pageNumber: number) => void;
};

const usePagination = ({ items }: { items: ApplicationListType[] }): PaginationResult => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get(PAGINATION.QUERY);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(Number(pageNumber ?? 1));
  }, [pageNumber]);

  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    currentItems,
    handlePageChange,
  };
};

export { usePagination };
