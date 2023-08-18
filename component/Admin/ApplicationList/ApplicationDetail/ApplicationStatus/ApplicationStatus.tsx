'use client';

import FilterDropDown from '@/component/Admin/FilterDropDown';
import {
  APPLICATION_STATUS_MAP,
  APPLICATION_STAUTS_LIST,
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
import { useRouter } from 'next/navigation';
import * as S from './ApplicationStatus.styled';

type ApplicationStatusProps = {
  id: number;
  applicationStatus: ApplicationStatusType;
  updatedAt: string;
  fixedInterviewDate: string;
};

const ApplicationStatus = ({ id, applicationStatus, updatedAt, fixedInterviewDate }: ApplicationStatusProps) => {
  const [selectedApplicationStatus, setSelectedApplicationCondition] = useState(applicationStatus || 'PENDING');
  const isPass = applicationStatus.includes('PASS');
  const [newInterviewDate, setFixedInterviewDate] = useState<string>(fixedInterviewDate);
  const router = useRouter();

  const onChangeDate = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format();

    if (formattedDate) {
      setFixedInterviewDate(Formatter.convertStringToUTC(formattedDate.toString()));
    } else {
      setFixedInterviewDate('');
    }
  };

  const changeApplication = async () => {
    const { result } = await api.patchApplicationDetail({
      id,
      applicationStatus: selectedApplicationStatus as ApplicationStatusType,
      fixedInterviewDate: newInterviewDate,
    });
    if (!axios.isAxiosError(result)) {
      Alert.success(CHANGE_APPLICATION_STATUS.SUCCESS);
      router.refresh();
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
        selected={selectedApplicationStatus as KeyOf<typeof DROPDOWN_MAP>}
        setSelected={(selected) => setSelectedApplicationCondition(selected)}
        customWidth={60}
      />
      <S.SubHeader>접수 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(updatedAt)}</S.DateContainer>
      <S.SubHeader>면접 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(fixedInterviewDate)}</S.DateContainer>
      <S.SubHeader>면접 일시 변경</S.SubHeader>
      {fixedInterviewDate ? (
        <S.RangePicker
          showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
          defaultValue={dayjs(newInterviewDate)}
          format={DEFAULT_TIME.FULL_TIME_FORMAT}
          onChange={(date) => onChangeDate(date)}
        />
      ) : (
        <S.RangePicker
          showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
          format={DEFAULT_TIME.FULL_TIME_FORMAT}
          onChange={(date) => onChangeDate(date)}
        />
      )}
      <S.ButtonContainer>
        <S.ChangeButton onClick={changeApplication}>변경하기</S.ChangeButton>
      </S.ButtonContainer>
    </S.ApplicationStatusContainer>
  );
};

export default ApplicationStatus;
