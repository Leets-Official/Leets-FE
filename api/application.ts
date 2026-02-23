import http from '@/api/core';
import { POSITION_FILTER_MAP } from '@/constants';
import {
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationStatusResponse,
  PatchApplication,
  PostApplication,
  GetApplicationDetailResponse,
  PatchApplicationDetailRequest,
  PatchApplicationDetailResponse,
} from '@/types';

export const getApplicationList = ({ position, status }: GetApplicationRequest) => {
  const params: string[] = [];

  if (position && position !== POSITION_FILTER_MAP.All) {
    params.push(`position=${position}`);
  }
  if (status) {
    params.push(`status=${status}`);
  }
  const query = params.length ? `?${params.join('&')}` : '';
  return http.get<GetApplicationResponse[]>({ url: `/application${query}` });
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
  http.get<GetApplicationDetailResponse>({
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
  http.get<GetApplicationDetailResponse>({
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
  http.get<GetApplicationDetailResponse>({
    url: '/temporary-application',
    silent: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const putTemporaryApplication = (
  application: Omit<PostApplication, 'submitStatus'>,
  accessToken: string,
) =>
  http.put<GetApplicationDetailResponse>({
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
  http.post<GetApplicationDetailResponse>({
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
  http.patch<GetApplicationDetailResponse>({
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
  http.patch<GetApplicationDetailResponse>({
    url: '/interview',
    data: { uid, hasInterview },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
