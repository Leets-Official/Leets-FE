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
};

export type InterviewStatusType = 'CHECK' | 'UNCHECK' | 'PENDING';

export type GetApplicationResponse = {
  id: number;
  name: string;
  gpa: string;
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

export type GetApplicationDetaiResponse = Application & {
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

export type ApplicationDetailType = GetApplicationDetaiResponse;

export type PatchApplicationDetailRequest = {
  id: number;
  applicationStatus: ApplicationStatusType;
};

export type PatchApplicationDetailResponse = GetApplicationDetaiResponse;

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
