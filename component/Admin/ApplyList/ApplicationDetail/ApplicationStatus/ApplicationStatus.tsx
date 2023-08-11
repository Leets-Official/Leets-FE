import FilterDropDown from '@/component/Admin/FilterDropDown';
import {
  APPLICATIONS_MAP,
  APPLICATION_STAUTS_LIST,
  DETAIL_APPLICATION_DATA,
  DROPDOWN_MAP,
  DEFAULT_TIME,
  DEFAULT_SCHEDULE,
} from '@/constants';
import { useState } from 'react';
import { KeyOf } from '@/types';
import dayjs from 'dayjs';
import { Formatter } from '@/utils';
import * as S from './ApplicationStatus.styled';

const ApplicationStatus = ({
  applicationStatus,
  applicationDate,
  interviewDate,
}: {
  applicationStatus: KeyOf<typeof APPLICATIONS_MAP>;
  applicationDate: string;
  interviewDate: string;
}) => {
  const [applicationCondition, setApplicationCondition] = useState(DETAIL_APPLICATION_DATA);
  const isPass = applicationStatus.includes('PASS');
  const [schedule, setSchedule] = useState(DEFAULT_SCHEDULE);
  const onChangeDate = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format();

    if (formattedDate) {
      setSchedule({
        interview: Formatter.convertStringToUTC(formattedDate.toString()),
      });
    } else {
      setSchedule(DEFAULT_SCHEDULE);
    }
  };

  // TODO: PATCH API

  return (
    <S.ApplicationStatusContainer>
      <S.TitleContainer>
        <S.Title>합격 상태</S.Title>
        <S.ApplicationStatus isPass={isPass}>{APPLICATIONS_MAP[applicationStatus]}</S.ApplicationStatus>
      </S.TitleContainer>
      <S.SubHeader>합격 상태 변경</S.SubHeader>
      <FilterDropDown
        list={APPLICATION_STAUTS_LIST}
        selected={applicationCondition.applicationStatus as KeyOf<typeof DROPDOWN_MAP>}
        setSelected={(selected) =>
          setApplicationCondition((prev) => ({ ...prev, applicationStatus: selected as string }))
        }
        customWidth={60}
      />
      <S.SubHeader>접수 일시</S.SubHeader>
      <S.DateContainer>{applicationDate}</S.DateContainer>
      <S.SubHeader>면접 일시</S.SubHeader>
      <S.DateContainer>{interviewDate}</S.DateContainer>
      <S.SubHeader>면접 일시 변경</S.SubHeader>
      <S.RangePicker
        showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
        format={DEFAULT_TIME.FULL_TIME_FORMAT}
        onChange={(range) => onChangeDate(range)}
      />
      <S.ButtonContainer>
        <S.ChangeButton>변경하기</S.ChangeButton>
      </S.ButtonContainer>
    </S.ApplicationStatusContainer>
  );
};

export default ApplicationStatus;
