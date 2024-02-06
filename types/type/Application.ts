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
  gpa: string;
  major: string;
  algorithm: string;
  project: string;
  job: string;
  phone: string;
  interviewDay: string;
  interviewTime: string;
};

export type ApplicationTextarea = {
  enhancement: string;
  level: string;
  pros: string;
  goal: string;
  completion: string;
};

export type Application = ApplicationInput & ApplicationTextarea;

export type Input = {
  id: string;
  value: string;
};

export type SubmitStatus = ValueOf<typeof SUBMIT_STATUS>;

export type IdRequest = { id: string };

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
  job: string;
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

export type PostApplication = Application &
  PatchApplication & {
    email?: string;
    submitStatus: SubmitStatus;
  };

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
  };
};

export type ApplicationDetailType = GetApplicationDetaiResponse;

export type PatchApplicationDetailRequest = {
  id: number;
  applicationStatus: ApplicationStatusType;
};

export type PatchApplicationDetailResponse = GetApplicationDetaiResponse;

export type GetUserApplicationResponse = GetApplicationDetaiResponse;

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
