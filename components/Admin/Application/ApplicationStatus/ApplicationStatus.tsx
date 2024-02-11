'use client';

import FilterDropDown from '@/components/Common/FilterDropDown';
import {
  APPLICATION_STATUS_MAP,
  APPLICATION_STAUTS_LIST,
  DROPDOWN_MAP,
  DEFAULT_TIME,
  CHANGE_APPLICATION_STATUS,
  APPLICATION,
} from '@/constants';
import { useEffect, useState } from 'react';
import { ApplicationDetailType, KeyOf } from '@/types';
import dayjs from 'dayjs';
import { Alert, Formatter } from '@/utils';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { patchInterviewInformation, postInterviewInformation, patchApplicationDetail } from '@/api';
import * as S from './ApplicationStatus.styled';

const ApplicationStatus = ({
  id,
  applicationStatus,
  updatedAt,
  appliedAt,
  interview: { fixedInterviewDate, place },
}: ApplicationDetailType) => {
  const [selectedApplicationStatus, setSelectedApplicationCondition] = useState(applicationStatus);
  const [newInterviewDate, setFixedInterviewDate] = useState<string>(fixedInterviewDate);
  const router = useRouter();
  const [newPlace, setNewPlace] = useState<string>('');

  const handleDate = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format();

    if (formattedDate) {
      setFixedInterviewDate(Formatter.convertStringToUTC(formattedDate.toString()));
    } else {
      setFixedInterviewDate('');
    }
  };

  const submitApplicationStatus = async () => {
    if (!appliedAt) {
      Alert.error(APPLICATION.REJECT_CHANGE_APPLICATION_STATUS);
      return;
    }
    if (selectedApplicationStatus === 'PASS_PAPER' && !newInterviewDate) {
      Alert.error(APPLICATION.ASK_INPUT_DATE);
      return;
    }
    const { result: interviewResult } =
      place || fixedInterviewDate
        ? await patchInterviewInformation({
            id,
            fixedInterviewDate: newInterviewDate,
            place: newPlace,
          })
        : await postInterviewInformation({
            id,
            fixedInterviewDate: newInterviewDate,
            place: newPlace,
          });
    const { result: applicationPatchResult } = await patchApplicationDetail({
      id,
      applicationStatus: selectedApplicationStatus,
    });

    if (!isAxiosError(applicationPatchResult) && !isAxiosError(interviewResult)) {
      Alert.success(CHANGE_APPLICATION_STATUS.SUCCESS);
      router.refresh();
    }
  };

  useEffect(() => {
    setSelectedApplicationCondition(applicationStatus);
  }, [applicationStatus]);

  useEffect(() => {
    setFixedInterviewDate(fixedInterviewDate);
  }, [fixedInterviewDate]);

  useEffect(() => {
    setNewPlace(place);
  }, [place]);

  return (
    <S.ApplicationStatusContainer>
      <S.TitleContainer>
        <S.Title>합격 상태</S.Title>
        <S.ApplicationStatus $applicationStatus={applicationStatus}>
          {APPLICATION_STATUS_MAP[applicationStatus]}
        </S.ApplicationStatus>
      </S.TitleContainer>
      <S.SubHeader>합격 상태 변경</S.SubHeader>
      <FilterDropDown
        list={APPLICATION_STAUTS_LIST}
        selected={selectedApplicationStatus as KeyOf<typeof DROPDOWN_MAP>}
        setSelected={(selected) => setSelectedApplicationCondition(selected)}
        customWidth={60}
      />
      <S.SubHeader>저장 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(updatedAt)}</S.DateContainer>
      <S.SubHeader>접수 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(appliedAt)}</S.DateContainer>
      <S.SubHeader>면접 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(fixedInterviewDate)}</S.DateContainer>
      <S.SubHeader>면접 장소</S.SubHeader>
      <S.DateContainer>
        <S.Place defaultValue={place || ''} onChange={(e) => setNewPlace(e.target.value)} />
      </S.DateContainer>
      <S.SubHeader>면접 일시</S.SubHeader>
      {fixedInterviewDate ? (
        <S.DateInput
          showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
          value={dayjs(fixedInterviewDate)}
          format={DEFAULT_TIME.FULL_TIME_FORMAT}
          onChange={handleDate}
        />
      ) : (
        <S.DateInput
          showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
          format={DEFAULT_TIME.FULL_TIME_FORMAT}
          onChange={handleDate}
        />
      )}
      <S.ButtonContainer>
        <S.ChangeButton onClick={submitApplicationStatus}>변경하기</S.ChangeButton>
      </S.ButtonContainer>
    </S.ApplicationStatusContainer>
  );
};

export default ApplicationStatus;
