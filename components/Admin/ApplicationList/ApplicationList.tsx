'use client';

import { useEffect, useState, useMemo } from 'react';
import SearchBar from '@/components/Admin/SearchBar';
import Pagination from '@/components/Admin/Pagination';
import FilterDropDown from '@/components/Common/FilterDropDown';
import {
  APPLICATION_STAUTS_LIST,
  INTERVIEW_STATUS_LIST,
  ORDER_LIST,
  APPLICATION_FILTER_LIST,
  DROPDOWN_MAP,
  PAGINATION,
  SORT_TARGET,
  SORT_METHOD,
  SEARCH_TARGET,
  NUMBER,
} from '@/constants';
import { useSearch, usePagination, useQueryCreator } from '@/hooks';
import { Formatter, Search } from '@/utils';
import { KeyOf, SortByType, ApplicationType } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import * as S from './ApplicationList.styled';

const ApplicationList = ({ applications }: { applications: ApplicationType[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryCreator = useQueryCreator();
  const { searchInput, onChangeHandler, renderList } = useSearch({
    applications,
    searchTargets: Object.values(SEARCH_TARGET),
  });
  const [applicationCondition, setApplicationCondition] = useState(APPLICATION_FILTER_LIST);
  const filterConditions = useMemo(
    () =>
      Search.makeFilterConditionObj({
        filterValueList: [applicationCondition.applicationStatus, applicationCondition.hasInterview],
      }),
    [applicationCondition]
  );
  const [sortBy, setSortBy] = useState<SortByType>({ target: null, method: SORT_METHOD.ASC });
  const filteredList = Search.filter(renderList, filterConditions, sortBy);
  const { currentPage, currentItems, handlePageChange } = usePagination({
    items: filteredList,
  });

  const initHandler = () => {
    setApplicationCondition(APPLICATION_FILTER_LIST);
  };

  useEffect(() => {
    if (Object.entries(filterConditions).length && searchParams.get(PAGINATION.QUERY) !== '1') {
      const query = queryCreator(PAGINATION.QUERY, PAGINATION.DEFAULT_PAGE);
      router.push(query);
    }
  }, [filterConditions]);

  return (
    <S.ApplicationContainer>
      <S.SearchContainer>
        <SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
        <S.DropDownContainer>
          <FilterDropDown
            list={APPLICATION_STAUTS_LIST}
            selected={applicationCondition.applicationStatus as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) =>
              setApplicationCondition((prev) => ({ ...prev, applicationStatus: selected as string }))
            }
          />
          <FilterDropDown
            list={INTERVIEW_STATUS_LIST}
            selected={applicationCondition.hasInterview as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) =>
              setApplicationCondition((prev) => ({ ...prev, hasInterview: selected as string }))
            }
          />
          <FilterDropDown
            list={ORDER_LIST}
            selected={applicationCondition.gpa as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) => setApplicationCondition((prev) => ({ ...prev, gpa: selected as string }))}
            sortTarget={SORT_TARGET.GPA}
            setSortBy={setSortBy}
            initOtherSort={() =>
              setApplicationCondition({
                ...applicationCondition,
                fixedInterviewDate: APPLICATION_FILTER_LIST.fixedInterviewDate,
              })
            }
          />
          <FilterDropDown
            list={ORDER_LIST}
            selected={applicationCondition.fixedInterviewDate as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) =>
              setApplicationCondition((prev) => ({ ...prev, fixedInterviewDate: selected as string }))
            }
            sortTarget={SORT_TARGET.INTERVIEW_DATE}
            setSortBy={setSortBy}
            initOtherSort={() =>
              setApplicationCondition({
                ...applicationCondition,
                gpa: APPLICATION_FILTER_LIST.gpa,
              })
            }
          />
        </S.DropDownContainer>
        <S.InitFilterButton onClick={initHandler}>
          초기화
          <S.ImageContainer>
            <S.ImageContainer />
          </S.ImageContainer>
        </S.InitFilterButton>
      </S.SearchContainer>
      <S.ApplicationColumn>
        <S.Name>이름</S.Name>
        <S.GPA>학점</S.GPA>
        <S.Grade>학년</S.Grade>
        <S.Position>파트</S.Position>
        <S.InterviewDate>면접 일시</S.InterviewDate>
        <S.InterviewStatus>면접 응시 여부</S.InterviewStatus>
        <S.StatusContainer>합격 여부</S.StatusContainer>
      </S.ApplicationColumn>
      <S.AapplicationComponentContainer>
        {currentItems.map(
          ({ id, name, gpa, grade, job, interview: { fixedInterviewDate, hasInterview }, applicationStatus }) => (
            <S.Application key={id} onClick={() => router.push(`/admin/application/${id}`)}>
              <S.Name>{name}</S.Name>
              <S.GPA>{gpa}</S.GPA>
              <S.Grade>{grade}</S.Grade>
              <S.Position>{job}</S.Position>
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
      </S.AapplicationComponentContainer>
      <S.PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredList.length / NUMBER.TEN)}
          onPageChange={handlePageChange}
        />
      </S.PaginationContainer>
    </S.ApplicationContainer>
  );
};

export default ApplicationList;
