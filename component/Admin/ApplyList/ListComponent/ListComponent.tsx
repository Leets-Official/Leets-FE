'use client';

import { useState } from 'react';
import SearchBar from '@/component/Admin/SearchBar';
import Pagination from '@/component/Admin/Pagination';
import PositionFilter from '@/component/Admin/PositionFilter';
import FilterDropDown from '@/component/Admin/FilterDropDown';
import {
  APPLICATION_STAUTS_LIST,
  INTERVIEW_STATUS_LIST,
  MOCK_DATA,
  ORDER_LIST,
  SEARCH_TARGETS,
  APPPLICATION_LIST,
  DROPDOWN_MAP,
  PAGINATION,
} from '@/constants';
import { useSearch, usePagination, useQueryCreator } from '@/hooks';
import { Search } from '@/utils';
import { KeyOf, SortByType } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import * as S from './ListComponent.styled';
import Status from './Status';

const ListComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [checkedIdsSet, setCheckedIdsSet] = useState(new Set());
  const queryCreator = useQueryCreator();
  const { searchInput, onChangeHandler, renderList } = useSearch({
    list: MOCK_DATA,
  });
  const [applicationCondition, setApplicationCondition] = useState(APPPLICATION_LIST);
  const filterConditions = Search.makeFilterConditionObj({
    filterValueList: [applicationCondition.applicationStatus, applicationCondition.interviewStatus],
  });
  const [sortBy, setSortBy] = useState<SortByType>({ target: null, method: null });
  const filteredList = Search.filter(renderList, filterConditions, sortBy);
  const { currentPage, currentItems, handlePageChange } = usePagination({
    items: filteredList,
  });
  const allCheckboxesChecked = checkedIdsSet.size === currentItems.length && currentItems.length > 0;

  const toggleAllCheckboxes = () => {
    if (allCheckboxesChecked) {
      setCheckedIdsSet(() => new Set());
    } else {
      const newCheckedIdsSet = new Set(currentItems.map(({ uid }) => uid));
      setCheckedIdsSet(() => newCheckedIdsSet);
    }
  };

  const toggleCheckbox = (id: string) => {
    const newCheckedIdsSet = new Set(checkedIdsSet);
    if (newCheckedIdsSet.has(id)) {
      newCheckedIdsSet.delete(id);
    } else {
      newCheckedIdsSet.add(id);
    }
    setCheckedIdsSet(() => newCheckedIdsSet);
  };

  const initHandler = () => {
    setApplicationCondition(APPPLICATION_LIST);
  };

  if (Object.entries(filterConditions).length && searchParams.get(PAGINATION.QUERY) !== '1') {
    const query = queryCreator(PAGINATION.QUERY, PAGINATION.DEFAULT_PAGE);
    router.push(query);
  }

  return (
    <S.ApplicationContainer>
      <PositionFilter />
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
            selected={applicationCondition.interviewStatus as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) =>
              setApplicationCondition((prev) => ({ ...prev, interviewStatus: selected as string }))
            }
          />
          <FilterDropDown
            list={ORDER_LIST}
            selected={applicationCondition.gpa as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) => setApplicationCondition((prev) => ({ ...prev, gpa: selected as string }))}
            sortTarget={SEARCH_TARGETS.GPA}
            setSortBy={setSortBy}
            otherSortInit={() => {
              setApplicationCondition({
                ...applicationCondition,
                interviewDate: APPPLICATION_LIST.interviewDate,
              });
            }}
          />
          <FilterDropDown
            list={ORDER_LIST}
            selected={applicationCondition.interviewDate as KeyOf<typeof DROPDOWN_MAP>}
            setSelected={(selected) =>
              setApplicationCondition((prev) => ({ ...prev, interviewDate: selected as string }))
            }
            sortTarget={SEARCH_TARGETS.INTERVIEW_DATE}
            setSortBy={setSortBy}
            otherSortInit={() => {
              setApplicationCondition({
                ...applicationCondition,
                gpa: APPPLICATION_LIST.gpa,
              });
            }}
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
        <S.Name>
          <S.Checkbox type="checkbox" checked={allCheckboxesChecked} onChange={toggleAllCheckboxes} />
          이름
        </S.Name>
        <S.GPA>학점</S.GPA>
        <S.Grade>학년</S.Grade>
        <S.Position>파트</S.Position>
        <S.InterviewDate>면접 일시</S.InterviewDate>
        <S.InterviewStatus>면접 응시 여부</S.InterviewStatus>
        <S.Status>합격 여부</S.Status>
      </S.ApplicationColumn>
      {currentItems.map(({ uid, name, gpa, grade, career, interviewDate, interviewStatus, applicationStatus }) => (
        <S.Application key={uid} onClick={() => router.push(`/admin/${uid}`)}>
          <S.Name>
            <S.Checkbox type="checkbox" checked={checkedIdsSet.has(uid)} onChange={() => toggleCheckbox(uid)} />
            {name}
          </S.Name>
          <S.GPA>{gpa}</S.GPA>
          <S.Grade>{grade}</S.Grade>
          <S.Position>{career}</S.Position>
          <S.InterviewDate>{interviewDate}</S.InterviewDate>
          <S.InterviewStatus>
            {interviewStatus === 'CHECK' ? <S.CheckInterview /> : <S.UnCheckInterview />}
          </S.InterviewStatus>
          <S.Status>
            <Status status={applicationStatus} />
          </S.Status>
        </S.Application>
      ))}
      <S.PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredList.length / 10)}
          onPageChange={handlePageChange}
        />
      </S.PaginationContainer>
    </S.ApplicationContainer>
  );
};

export default ListComponent;
