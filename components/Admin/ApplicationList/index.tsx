'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SearchBar from '@/components/Admin/SearchBar';
import Pagination from '@/components/Admin/Pagination';
import StatusDropdown from '@/components/Admin/StatusDropdown';
import { DROPDOWN_MAP, NUMBER, POSITION_TYPES, POSITION_FILTER_MAP } from '@/constants';
import { usePagination, useApplicationExplore, useApplicationFilterContext } from '@/hooks';
import { Formatter } from '@/utils';
import { KeyOf, ApplicationType, InterviewStatusType, ApplicationStatusType } from '@/types';
import * as S from './ApplicationList.styled';

const POSITION_LABEL: Record<string, string> = {
  All: '전체',
  FRONTEND: 'FE',
  BACKEND: 'BE',
  BX_BI: 'D',
  PM: 'PM',
  SAVE: '임시',
};

/* UX_UI는 D 탭(BX_BI)에 통합 — 별도 탭 미노출 */
const VISIBLE_POSITION_TYPES = POSITION_TYPES.filter((pos) => pos !== 'UX_UI');

const STATUS_OPTIONS = [
  { value: '', label: '합격 여부' },
  { value: 'PENDING', label: '보류중' },
  { value: 'PASS_PAPER', label: '서류 합격' },
  { value: 'FAIL_PAPER', label: '서류 탈락' },
  { value: 'PASS', label: '최종 합격' },
  { value: 'FAIL', label: '최종 탈락' },
];

const INTERVIEW_OPTIONS = [
  { value: '', label: '면접 여부' },
  { value: 'CHECK', label: '응시' },
  { value: 'UNCHECK', label: '미응시' },
  { value: 'PENDING', label: '미정' },
];

const SORT_OPTIONS = [
  { value: '', label: '면접 날짜' },
  { value: 'ASC', label: '오름차순' },
  { value: 'DESC', label: '내림차순' },
];

interface ApplicationListProps {
  applications: ApplicationType[];
  position: KeyOf<typeof POSITION_FILTER_MAP>;
  onPositionChange: (pos: KeyOf<typeof POSITION_FILTER_MAP>) => void;
}

const ApplicationList = ({ applications, position, onPositionChange }: ApplicationListProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  /* URL searchParams에서 필터 값 읽기 */
  const filterStatus = searchParams.get('status') ?? '';
  const filterInterview = searchParams.get('interview') ?? '';
  const filterSort = searchParams.get('sort') ?? '';

  const { initQuery } = useApplicationFilterContext()!;
  const { searchInput, handleSearchInput, renderList } = useApplicationExplore({ applications });
  const {
    currentPage,
    handlePageChange,
    indices: { start, end },
  } = usePagination();

  /* 검색어 변경 시 첫 페이지로 리셋 */
  useEffect(() => {
    handlePageChange(1);
  }, [searchInput]);

  /* 필터 값을 URL에 반영하고 페이지 1로 리셋 */
  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    params.delete('pageNumber');
    router.replace(`${pathname}?${params.toString()}`);
    handlePageChange(1);
  };

  /* 프론트 필터링 + 정렬 */
  const filteredList = renderList
    .filter((item) => !filterStatus || item.applicationStatus === (filterStatus as ApplicationStatusType))
    .filter((item) => !filterInterview || item.interview.hasInterview === (filterInterview as InterviewStatusType))
    .sort((a, b) => {
      if (!filterSort) return 0;
      const dateA = a.interview.fixedInterviewDate ? new Date(a.interview.fixedInterviewDate).getTime() : 0;
      const dateB = b.interview.fixedInterviewDate ? new Date(b.interview.fixedInterviewDate).getTime() : 0;
      return filterSort === 'ASC' ? dateA - dateB : dateB - dateA;
    });

  const resetAll = () => {
    initQuery(); // push(pathname) → URL params 전체 초기화
    handlePageChange(1);
  };

  return (
    <S.ApplicationContainer>
      {/* Controls: search left / filters right on PC; stacked on mobile */}
      <S.ControlsRow>
        <S.SearchWrapper>
          <SearchBar value={searchInput} onChangeHandler={handleSearchInput} />
        </S.SearchWrapper>
        <S.FiltersGroup>
          <S.TabsContainer>
            {VISIBLE_POSITION_TYPES.map((pos) => (
              <S.Tab key={pos} $active={pos === position || (pos === 'BX_BI' && position === 'UX_UI')} onClick={() => onPositionChange(pos)}>
                {POSITION_LABEL[pos] ?? pos}
              </S.Tab>
            ))}
          </S.TabsContainer>
          <StatusDropdown value={filterStatus} options={STATUS_OPTIONS} onChange={(v) => updateFilter('status', v)} placeholder="합격 여부" />
          <StatusDropdown value={filterInterview} options={INTERVIEW_OPTIONS} onChange={(v) => updateFilter('interview', v)} placeholder="면접 여부" />
          <StatusDropdown value={filterSort} options={SORT_OPTIONS} onChange={(v) => updateFilter('sort', v)} placeholder="면접 날짜" />
          <S.InitFilterButton onClick={resetAll}>초기화</S.InitFilterButton>
        </S.FiltersGroup>
      </S.ControlsRow>

      {/* Table */}
      <S.TableWrapper>
        {/* Header */}
        <S.TableHeader>
          <S.ColName>이름</S.ColName>
          <S.ColGrade>학년</S.ColGrade>
          <S.ColPosition>파트</S.ColPosition>
          <S.ColInterviewDate>면접 일시</S.ColInterviewDate>
          <S.ColInterviewCombined>면접 여부/일시</S.ColInterviewCombined>
          <S.ColInterviewStatus>면접</S.ColInterviewStatus>
          <S.ColStatus>합격 상태</S.ColStatus>
        </S.TableHeader>

        {/* Body */}
        <S.TableBody>
          {filteredList
            .slice(start, end)
            .map(({ id, name, grade, career, interview: { fixedInterviewDate, hasInterview }, applicationStatus }) => (
              <S.TableRow key={id} href={`/admin/application/${id}`}>
                <S.ColName>{name}</S.ColName>
                <S.ColGrade>{grade}</S.ColGrade>
                <S.ColPosition>{career}</S.ColPosition>
                <S.ColInterviewDate>{Formatter.formatInterviewDate(fixedInterviewDate)}</S.ColInterviewDate>
                <S.ColInterviewCombined>
                  <S.InterviewDot $hasInterview={hasInterview} />
                  {Formatter.formatInterviewDate(fixedInterviewDate) || '미정'}
                </S.ColInterviewCombined>
                <S.ColInterviewStatus>
                  <S.InterviewDot $hasInterview={hasInterview} />
                </S.ColInterviewStatus>
                <S.ColStatus>
                  <S.StatusBadge $applicationStatus={applicationStatus}>
                    {DROPDOWN_MAP[applicationStatus]}
                  </S.StatusBadge>
                </S.ColStatus>
              </S.TableRow>
            ))}
        </S.TableBody>

        {/* Pagination */}
        <S.PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredList.length / NUMBER.TEN)}
            onPageChange={handlePageChange}
          />
        </S.PaginationWrapper>
      </S.TableWrapper>
    </S.ApplicationContainer>
  );
};

export default ApplicationList;
