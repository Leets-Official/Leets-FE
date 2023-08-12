import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { POSITION_MAP, APPLICATION_STATUS_MAP, POSITION_ENGLIST_MAP } from '@/constants';
import { Applicant } from './User';
import { KeyOf } from '../Helper';

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

export type IdRequest = { id: string };

export type ApplicationStatus = keyof typeof APPLICATION_STATUS_MAP;

export type GetApplicationRequest = {
  type: KeyOf<typeof POSITION_MAP>;
};

export type GetApplicationResponse = {
  name: string;
  gpa: 0;
  grade: 0;
  position: string;
  interview: string;
  hasInterview: string;
  applicationStatus: ApplicationStatus;
};

export type ApplicationListType = GetApplicationResponse;

export type PatchApplication = Application;

export type PositionType = keyof typeof POSITION_ENGLIST_MAP;

export type PostApplication = Application & {
  email?: string;
  position: PositionType;
};

export type GetApplicationDetaiResponse = Applicant &
  Application & {
    id: number;
    updatedAt: string;
    createdAt: string;
    interviewDate: string;
    applicationStatus: ApplicationStatus;
  };

export type ApplicationDetailType = GetApplicationDetaiResponse;

export type PatchApplicationDetailRequest = {
  id: number;
  applicationStatus: ApplicationStatus;
  schedule: string;
};

export type PatchApplicationDetailResponse = GetApplicationDetaiResponse;

export type GetUserApplicationResponse = GetApplicationDetaiResponse;

export type ApplicationInputProp = {
  position: PositionType;
  changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: any) => void;
};

export type ApplicationTextareaProp = {
  position: PositionType;
  text: ApplicationTextarea;
  setText: Dispatch<SetStateAction<ApplicationTextarea>>;
};
