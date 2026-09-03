import { Dispatch, SetStateAction } from 'react';
import { APPLICATION_STATUS_MAP, SUBMIT_STATUS, POSITION_FILTER_MAP, APPLY_POSITION } from '@/constants';
import { Applicant } from './User';
import { KeyOf, ValueOf } from '../Helper';

type ApplicationLink = {
  portfolio: string;
};

export type ApplicationInput = ApplicationLink & {
  name: string;
  grade: string;
  major: string;
  algorithm: string;
  project: string;
  phone: string;
  interviewDay: string;
  interviewTime: string;
  sid: string;
};

export type ApplicationTextarea = {
  motive: string;
  capability: string;
  conflict: string;
  expectation: string;
  passion: string;
};

export type Application = ApplicationInput & ApplicationTextarea & { position: PositionType };

export type Input = {
  id: string;
  value: string;
};

export type SubmitStatus = ValueOf<typeof SUBMIT_STATUS>;

export type ApplicationStatusType = KeyOf<typeof APPLICATION_STATUS_MAP>;

export type GetApplicationRequest = {
  position: KeyOf<typeof POSITION_FILTER_MAP>;
  status?: string;
};

export type InterviewStatusType = 'CHECK' | 'UNCHECK' | 'PENDING';

export type GetApplicationResponse = {
  id: number;
  name: string;
  grade: string;
  position: string;
  career: string;
  interview: {
    fixedInterviewDate: string;
    hasInterview: InterviewStatusType;
  };
  applicationStatus: ApplicationStatusType;
  phone: string;
};

export type ApplicationType = GetApplicationResponse;

export type PositionType = KeyOf<typeof APPLY_POSITION>;

export type PatchApplication = Application & {
  position: PositionType;
  submitStatus: SubmitStatus;
};

export type PostApplication = PatchApplication;

export type GetApplicationDetailResponse = Application & {
  user: Applicant;
  id: number;
  grade: string;
  updatedAt: string;
  appliedAt: string;
  applicationStatus: ApplicationStatusType;
  position: PositionType;
  interview: {
    place: string;
    fixedInterviewDate: string;
    id: number;
  };
};

/**
 * GET/PUT /temporary-application 실제 응답 스펙.
 * ApplicationResponse와 달리 `user` 객체가 없고, 미입력 필드는 null 로 올 수 있다.
 * 이전에는 GetApplicationDetailResponse 로 잘못 타이핑되어 있어
 * 존재하지 않는 `user.name` 접근이 컴파일 타임에 걸러지지 않았다.
 */
export type TemporaryApplicationResponse = {
  name: string | null;
  phone: string | null;
  major: string | null;
  grade: string | null;
  project: string | null;
  algorithm: string | null;
  portfolio: string | null;
  position: PositionType | null;
  career: string | null;
  interviewDay: string | null;
  interviewTime: string | null;
  motive: string | null;
  expectation: string | null;
  capability: string | null;
  conflict: string | null;
  passion: string | null;
};

export type ApplicationDetailType = GetApplicationDetailResponse;

export type PatchApplicationDetailRequest = {
  id: number;
  applicationStatus: ApplicationStatusType;
};

export type PatchApplicationDetailResponse = GetApplicationDetailResponse;

export type GetApplicationStatusResponse = {
  id: number;
  status: ApplicationStatusType;
  hasInterview: InterviewStatusType;
  interviewDate: string;
  interviewPlace: string;
};

export type ApplicationInputProp = {
  position: PositionType;
  input: ApplicationInput;
  setInput: Dispatch<SetStateAction<ApplicationInput>>;
};

export type ApplicationTextareaProp = {
  position: PositionType;
  text: ApplicationTextarea;
  setText: Dispatch<SetStateAction<ApplicationTextarea>>;
};
