import { useRouter } from 'next/navigation';
import { useQueryCreator } from '@/hooks';
import { PAGINATION } from '@/constants';
import * as S from './Pagination.styled';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line
  onPageChange: (pageNumber: number) => void;
};

const getPageNumbers = (currentPage: number, totalPages: number) => {
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  if (endPage <= 0) {
    return [1];
  }
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const router = useRouter();
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const queryCreator = useQueryCreator();

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      const query = queryCreator(PAGINATION.QUERY, String(pageNumber));
      router.push(query);
      onPageChange(pageNumber);
    }
  };
  const handleFirstPage = () => {
    handlePageChange(1);
  };
  const handleLastPage = () => {
    handlePageChange(totalPages);
  };
  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };
  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <S.Navigation>
      <S.ButtonBox>
        <S.FirstPage onClick={handleFirstPage} disabled={currentPage === 1} />
      </S.ButtonBox>
      <S.ButtonBox>
        <S.PrevPage onClick={handlePrevPage} disabled={currentPage === 1} />
      </S.ButtonBox>
      {pageNumbers.map((pageNumber) => (
        <S.ButtonBox
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          disabled={currentPage === pageNumber}
          selected={currentPage === pageNumber}>
          {pageNumber}
        </S.ButtonBox>
      ))}
      <S.ButtonBox>
        <S.NextPage onClick={handleNextPage} disabled={currentPage >= totalPages} />
      </S.ButtonBox>
      <S.ButtonBox>
        <S.LastPage onClick={handleLastPage} disabled={currentPage >= totalPages} />
      </S.ButtonBox>
    </S.Navigation>
  );
};

export default Pagination;
