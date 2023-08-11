import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PAGINATION } from '@/constants';

type ApplicationList = {
  uid: string;
  name: string;
  gpa: string;
  grade: string;
  career: string;
  interviewDate: string;
  interviewStatus: string;
  applicationStatus: string;
};

type PaginationResult = {
  currentPage: number;
  currentItems: ApplicationList[];
  handlePageChange: (pageNumber: number) => void;
};

const usePagination = ({ items }: { items: ApplicationList[] }): PaginationResult => {
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
