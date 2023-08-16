import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { POSITION_MAP, APPLICATION_STATUS_MAP, POSITION_ENGLIST_MAP, SUBMIT_STATUS } from '@/constants';
import { Applicant } from './User';
import { KeyOf, ValueOf } from '../Helper';

export type ApplicationInput = {
  name: string;
  sid: string;
  gpa: string;
  major: string;
  algorithm: string;
  project: string;
  career: string;
  portfolio: string;
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

export type IdRequest = { id: number };

export type ApplicationStatusType = keyof typeof APPLICATION_STATUS_MAP;

export type GetApplicationRequest = {
  type: KeyOf<typeof POSITION_MAP>;
};

export type GetApplicationResponse = {
  id: number;
  name: string;
  gpa: number;
  grade: number;
  position: string;
  interview: string;
  hasInterview: string;
  applicationStatus: ApplicationStatusType;
};

export type ApplicationListType = GetApplicationResponse;

export type PositionType = keyof typeof POSITION_ENGLIST_MAP;

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
  updatedAt: string;
  interviewDate: string;
  applicationStatus: ApplicationStatusType;
};

export type ApplicationDetailType = GetApplicationDetaiResponse;

export type PatchApplicationDetailRequest = {
  id: number;
  applicationStatus: ApplicationStatusType;
  schedule: string;
};

export type PatchApplicationDetailResponse = GetApplicationDetaiResponse;

export type GetUserApplicationResponse = GetApplicationDetaiResponse;

export type ApplicationInputProp = {
  position: PositionType;
  changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: any) => void;
  application: ApplicationInput;
};

export type ApplicationTextareaProp = {
  position: PositionType;
  text: ApplicationTextarea;
  setText: Dispatch<SetStateAction<ApplicationTextarea>>;
  application: ApplicationTextarea;
};

export type ApplicationPassStatus = {
  $isPass: boolean;
};
