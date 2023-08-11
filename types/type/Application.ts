import { APPLICATION_STATUS_MAP } from '@/constants';
import { Applicant } from './User';

export type Application = {
  name: string;
  sid: string;
  gpa: string;
  major: string;
  algorithm: string;
  portfolio: string;
  position: string;
  link: string;
  phone: string;
  interviewDay: string;
  interviewTime: string;

  enhancement: string;
  level: string;
  pros: string;
  goal: string;
  completion: string;
};

export type Input = {
  id: string;
  value: string;
};

export type IdRequest = { id: string };

export type ApplicationStatus = keyof typeof APPLICATION_STATUS_MAP;

export type GetApplicationResponse = {
  name: string;
  gpa: 0;
  grade: 0;
  position: string;
  interview: string;
  hasInterview: string;
  applicationStatus: ApplicationStatus;
};

export type PatchApplication = Application;

export type PostApplication = Application;

export type GetApplicationDetaiResponse = Applicant &
  Application & {
    id: number;
    updatedAt: string;
    createdAt: string;
  };

export type PatchApplicationDetailRequest = IdRequest & {
  applicationStatus: ApplicationStatus;
};

export type PatchApplicationDetailResponse = GetApplicationDetaiResponse;

export type GetUserApplicationResponse = GetApplicationDetaiResponse;
