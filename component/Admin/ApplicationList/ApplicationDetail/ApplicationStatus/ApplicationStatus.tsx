'use client';

import FilterDropDown from '@/component/Admin/FilterDropDown';
import {
  APPLICATION_STATUS_MAP,
  APPLICATION_STAUTS_LIST,
  DETAIL_APPLICATION_DATA,
  DROPDOWN_MAP,
  DEFAULT_TIME,
  CHANGE_APPLICATION_STATUS,
} from '@/constants';
import { useState } from 'react';
import { KeyOf, ApplicationStatusType } from '@/types';
import dayjs from 'dayjs';
import { Alert, Formatter } from '@/utils';
import axios from 'axios';
import * as api from '@/api';
import * as S from './ApplicationStatus.styled';

type ApplicationStatusProps = {
  id: number;
  applicationStatus: ApplicationStatusType;
  applicationDate: string;
  interviewDate: string;
};

const ApplicationStatus = ({ id, applicationStatus, applicationDate, interviewDate }: ApplicationStatusProps) => {
  const [applicationCondition, setApplicationCondition] = useState(DETAIL_APPLICATION_DATA);
  const isPass = applicationStatus.includes('PASS');
  const [schedule, setSchedule] = useState<string>('');

  const onChangeDate = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format();

    if (formattedDate) {
      setSchedule(Formatter.convertStringToUTC(formattedDate.toString()));
    } else {
      setSchedule('');
    }
  };

  const changeApplication = async () => {
    const { result } = await api.patchApplicationDetail({ id, applicationStatus, schedule });
    if (!axios.isAxiosError(result)) {
      Alert.success(CHANGE_APPLICATION_STATUS.SUCCESS);
    } else {
      Alert.error(CHANGE_APPLICATION_STATUS.FAIL);
    }
  };

  return (
    <S.ApplicationStatusContainer>
      <S.TitleContainer>
        <S.Title>합격 상태</S.Title>
        <S.ApplicationStatus $isPass={isPass}>{APPLICATION_STATUS_MAP[applicationStatus]}</S.ApplicationStatus>
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
      <S.DateContainer>{Formatter.formatDate(applicationDate).longDateTime}</S.DateContainer>
      <S.SubHeader>면접 일시</S.SubHeader>
      <S.DateContainer>{interviewDate}</S.DateContainer>
      <S.SubHeader>면접 일시 변경</S.SubHeader>
      <S.RangePicker
        showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
        format={DEFAULT_TIME.FULL_TIME_FORMAT}
        onChange={(date) => onChangeDate(date)}
      />
      <S.ButtonContainer>
        <S.ChangeButton onClick={changeApplication}>변경하기</S.ChangeButton>
      </S.ButtonContainer>
    </S.ApplicationStatusContainer>
  );
};

export default ApplicationStatus;
