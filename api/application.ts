import http from '@/api/core';
import { POSITION_FILTER_MAP } from '@/constants';
import {
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationStatusResponse,
  PatchApplication,
  PostApplication,
  GetApplicationDetaiResponse,
  PatchApplicationDetailRequest,
  PatchApplicationDetailResponse,
} from '@/types';

export const getApplicationList = ({ position }: GetApplicationRequest) => {
  if (position === POSITION_FILTER_MAP.All) {
    return http.get<GetApplicationResponse[]>({
      url: '/application',
    });
  }
  if (position === 'SAVE') {
    return http.get<GetApplicationResponse[]>({
      url: `/application?status=${position}`,
    });
  }
  return http.get<GetApplicationResponse[]>({
    url: `/application?position=${position}`,
  });
};

export const postApplication = (application: PostApplication, accessToken: string) =>
  http.post<PostApplication>({
    url: '/application',
    data: application,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const patchApplication = (application: PatchApplication, accessToken: string) =>
  http.patch<PatchApplication>({
    url: `/application`,
    data: application,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getApplicationDetail = ({ id }: { id: string }, accessToken: string) =>
  http.get<GetApplicationDetaiResponse>({
    url: `/application/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const patchApplicationDetail = ({ id, applicationStatus }: PatchApplicationDetailRequest) =>
  http.patch<PatchApplicationDetailResponse>({
    url: `/application/${id}`,
    data: {
      applicationStatus,
    },
  });

export const getUserApplication = (accessToken: string) =>
  http.get<GetApplicationDetaiResponse>({
    url: '/application/me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getUserApplicationStatus = (accessToken: string) =>
  http.get<GetApplicationStatusResponse>({
    url: '/application/status',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getTemporaryApplication = (accessToken: string) =>
  http.get<GetApplicationDetaiResponse>({
    url: '/temporary-application',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const putTemporaryApplication = (
  application: Omit<PostApplication, 'submitStatus'>,
  accessToken: string,
) =>
  http.put<GetApplicationDetaiResponse>({
    url: '/temporary-application',
    data: application,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const postInterviewInformation = ({
  id,
  fixedInterviewDate,
  place,
}: {
  id: number;
  fixedInterviewDate: string;
  place: string;
}) =>
  http.post<GetApplicationDetaiResponse>({
    url: '/interview',
    data: {
      applicationId: id,
      fixedInterviewDate,
      place,
    },
  });

export const patchInterviewInformation = ({
  id,
  fixedInterviewDate,
  place,
}: {
  id: number;
  fixedInterviewDate: string;
  place: string;
}) =>
  http.patch<GetApplicationDetaiResponse>({
    url: `/interview/${id}`,
    data: {
      fixedInterviewDate,
      place,
    },
  });

export const patchInterviewAttendance = (
  hasInterview: 'CHECK' | 'UNCHECK',
  uid: string,
  accessToken: string,
) =>
  http.patch<GetApplicationDetaiResponse>({
    url: '/interview',
    data: { uid, hasInterview },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
