import http from '@/api/core';
import { POSITION_FILTER_MAP } from '@/constants';
import {
  GetApplicationRequest,
  GetApplicationResponse,
  PatchApplication,
  PostApplication,
  GetApplicationDetaiResponse,
  PatchApplicationDetailRequest,
  PatchApplicationDetailResponse,
} from '@/types';
import { WithFetchConfig } from './config';

export const getApplicationList = ({ position }: GetApplicationRequest) => {
  if (position === POSITION_FILTER_MAP.All) {
    return http.get<GetApplicationResponse[]>('/application');
  }
  if (position === 'SAVE') {
    return http.get<GetApplicationResponse[]>(`/application?status=${position.toLowerCase()}`);
  }
  return http.get<GetApplicationResponse[]>(`/application?position=${position.toLowerCase()}`);
};

export const postApplication = (application: PostApplication, accessToken: string) =>
  http.post<PostApplication>(
    '/application',
    WithFetchConfig({
      body: application,
      accessToken,
      cache: 'no-store',
    })
  );

export const patchApplication = (application: PatchApplication, accessToken: string) =>
  http.patch<PatchApplication>(
    `/application`,
    WithFetchConfig({
      body: application,
      accessToken,
      cache: 'no-store',
    })
  );

export const getApplicationDetail = ({ id }: { id: string }, accessToken: string) =>
  http.get<GetApplicationDetaiResponse>(
    `/application/${id}`,
    WithFetchConfig({
      accessToken,
    })
  );

export const patchApplicationDetail = ({ id, applicationStatus }: PatchApplicationDetailRequest) =>
  http.patch<PatchApplicationDetailResponse>(`/application/${id}`, WithFetchConfig({ body: applicationStatus }));

export const getUserApplication = (accessToken: string) =>
  http.get<GetApplicationDetaiResponse>('/application/me', WithFetchConfig({ accessToken, cache: 'no-store' }));

export const postInterviewInformation = ({
  id,
  fixedInterviewDate,
  place,
}: {
  id: number;
  fixedInterviewDate: string;
  place: string;
}) =>
  http.post<GetApplicationDetaiResponse>(
    '/interview',
    WithFetchConfig({
      body: {
        id,
        fixedInterviewDate,
        place,
      },
    })
  );

export const patchInterviewInformation = ({
  id,
  fixedInterviewDate,
  place,
}: {
  id: number;
  fixedInterviewDate: string;
  place: string;
}) =>
  http.patch<GetApplicationDetaiResponse>(
    `/interview/${id}`,
    WithFetchConfig({
      body: {
        fixedInterviewDate,
        place,
      },
    })
  );
