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
import { useRouter } from 'next/navigation';
import { patchInterviewInformation, postInterviewInformation, patchApplicationDetail } from '@/api';
import { isAxiosError } from 'axios';
import * as S from './ApplicationStatus.styled';

const ApplicationStatus = ({
  id,
  applicationStatus,
  updatedAt,
  appliedAt,
  interview: { fixedInterviewDate, place, id: interviewId },
}: ApplicationDetailType) => {
  const [selectedApplicationStatus, setSelectedApplicationCondition] = useState(applicationStatus);
  const [newInterviewDate, setFixedInterviewDate] = useState<string>(fixedInterviewDate);
  const router = useRouter();
  const [newPlace, setNewPlace] = useState<string>('');

  const handleDate = (date: unknown | null) => {
    const dayjsDate = dayjs.isDayjs(date) ? (date as dayjs.Dayjs) : null;
    const formattedDate = dayjsDate?.format();

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

    const isInterviewFixed = place || fixedInterviewDate;
    const interviewRequest = isInterviewFixed ? patchInterviewInformation : postInterviewInformation;
    const requestId = isInterviewFixed ? interviewId : id;

    const allPassed = (
      await Promise.all([
        interviewRequest({
          id: requestId,
          fixedInterviewDate: newInterviewDate,
          place: newPlace,
        }),
        patchApplicationDetail({
          id,
          applicationStatus: selectedApplicationStatus,
        }),
      ])
    ).every(({ result }) => !isAxiosError(result));

    if (!allPassed) {
      Alert.error(CHANGE_APPLICATION_STATUS.FAIL);
      return;
    }

    Alert.success(CHANGE_APPLICATION_STATUS.SUCCESS);
    router.refresh();
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
      {/* 합격 상태 헤더 */}
      <S.TitleContainer>
        <S.Title>합격 상태</S.Title>
        <S.ApplicationStatus $applicationStatus={applicationStatus}>
          {APPLICATION_STATUS_MAP[applicationStatus]}
        </S.ApplicationStatus>
      </S.TitleContainer>

      <S.Divider />

      {/* 합격 상태 변경 */}
      <S.SubHeader>합격 상태 변경하기</S.SubHeader>
      <FilterDropDown
        defaultValue="합격 상태"
        list={APPLICATION_STAUTS_LIST}
        selected={selectedApplicationStatus as KeyOf<typeof DROPDOWN_MAP>}
        setSelected={(selected) => setSelectedApplicationCondition(selected)}
        customWidth={100}
      />

      {/* 접수 일시 */}
      <S.SubHeader>접수 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(appliedAt) || '—'}</S.DateContainer>

      {/* 임시저장 일시 */}
      <S.SubHeader>임시저장 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(updatedAt) || '—'}</S.DateContainer>

      {/* 현재 면접 일시 */}
      <S.SubHeader>현재 면접 일시</S.SubHeader>
      <S.DateContainer>{Formatter.normalizeDate(fixedInterviewDate) || '—'}</S.DateContainer>

      {/* 면접 장소 */}
      <S.SubHeader>면접 장소</S.SubHeader>
      <S.Place
        defaultValue={place || ''}
        placeholder="면접 장소를 입력해 주세요"
        onChange={(e) => setNewPlace(e.target.value)}
      />

      {/* 면접 일시 변경 */}
      <S.SubHeader>면접 일시 변경</S.SubHeader>
      {fixedInterviewDate ? (
        <S.DateInput
          showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
          value={fixedInterviewDate ? dayjs(fixedInterviewDate) : null}
          format={DEFAULT_TIME.FULL_TIME_FORMAT}
          onChange={handleDate}
          getPopupContainer={(trigger) =>
            window.innerWidth <= 819 ? trigger.parentElement || document.body : document.body
          }
        />
      ) : (
        <S.DateInput
          showTime={{ format: DEFAULT_TIME.TIME_FORMAT }}
          format={DEFAULT_TIME.FULL_TIME_FORMAT}
          onChange={handleDate}
          getPopupContainer={(trigger) =>
            window.innerWidth <= 819 ? trigger.parentElement || document.body : document.body
          }
        />
      )}

      {/* 저장 버튼 */}
      <S.ButtonContainer>
        <S.ChangeButton onClick={submitApplicationStatus}>저장하기</S.ChangeButton>
      </S.ButtonContainer>
    </S.ApplicationStatusContainer>
  );
};

export default ApplicationStatus;
