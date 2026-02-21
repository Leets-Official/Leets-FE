'use client';

import SearchBar from '@/components/Admin/SearchBar';
import Pagination from '@/components/Admin/Pagination';
import FilterDropDown from '@/components/Common/FilterDropDown';
import {
  APPLICATION_STAUTS_LIST,
  INTERVIEW_STATUS_LIST,
  ORDER_LIST,
  DROPDOWN_MAP,
  SORT_TARGET,
  NUMBER,
} from '@/constants';
import { usePagination, useApplicationExplore, useApplicationFilterContext } from '@/hooks';
import { Formatter } from '@/utils';
import { KeyOf, ApplicationType } from '@/types';
import * as S from './ApplicationList.styled';

const ApplicationList = ({ applications }: { applications: ApplicationType[] }) => {
  const { query, setQuery, initQuery } = useApplicationFilterContext()!;
  const { searchInput, handleSearchInput, setSortBy, renderList } = useApplicationExplore({
    applications,
  });
  const {
    currentPage,
    handlePageChange,
    indices: { start, end },
  } = usePagination();

  return (
    <S.ApplicationContainer>
      <S.SearchContainer>
        <SearchBar value={searchInput} onChangeHandler={handleSearchInput} />
        <S.DropDownContainer>
          <FilterDropDown
            list={APPLICATION_STAUTS_LIST}
            defaultValue="합격 여부"
            selected={query.applicationStatus as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) => setQuery({ ...query, applicationStatus: selected })}
          />
          <FilterDropDown
            defaultValue="면접 응시 여부"
            list={INTERVIEW_STATUS_LIST}
            selected={query.hasInterview as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) => setQuery({ ...query, hasInterview: selected })}
          />
          <FilterDropDown
            defaultValue="면접 일시"
            list={ORDER_LIST}
            selected={query.fixedInterviewDate as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) => setQuery({ ...query, fixedInterviewDate: selected })}
            sortTarget={SORT_TARGET.INTERVIEW_DATE}
            setSortBy={setSortBy}
            initOtherSort={() =>
              setQuery({
                ...query,
              })
            }
          />
        </S.DropDownContainer>
        <S.InitFilterButton onClick={initQuery}>
          초기화
          <S.ImageContainer>
            <S.ImageContainer />
          </S.ImageContainer>
        </S.InitFilterButton>
      </S.SearchContainer>
      <S.ApplicationColumn>
        <S.Name>이름</S.Name>
        <S.Grade>학년</S.Grade>
        <S.Position>파트</S.Position>
        <S.InterviewDate>면접 일시</S.InterviewDate>
        <S.InterviewStatus>면접 응시 여부</S.InterviewStatus>
        <S.StatusContainer>합격 여부</S.StatusContainer>
      </S.ApplicationColumn>
      <S.ApplicationComponentContainer>
        {renderList
          .slice(start, end)
          .map(
            ({ id, name, grade, career, interview: { fixedInterviewDate, hasInterview }, applicationStatus }) => (
              <S.Application key={id} href={`/admin/application/${id}`}>
                <S.Name>{name}</S.Name>
                <S.Grade>{grade}</S.Grade>
                <S.Position>{career}</S.Position>
                <S.InterviewDate>{Formatter.normalizeDate(fixedInterviewDate)}</S.InterviewDate>
                <S.InterviewStatus>
                  <S.CheckInterview $hasInterview={hasInterview} />
                </S.InterviewStatus>
                <S.StatusContainer>
                  <S.Status $applicationStatus={applicationStatus}>{DROPDOWN_MAP[applicationStatus]}</S.Status>
                </S.StatusContainer>
              </S.Application>
            )
          )}
      </S.ApplicationComponentContainer>
      <S.PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(renderList.length / NUMBER.TEN)}
          onPageChange={handlePageChange}
        />
      </S.PaginationContainer>
    </S.ApplicationContainer>
  );
};

export default ApplicationList;
