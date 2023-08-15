import { http } from '@/api/core';
import { POSITION_MAP } from '@/constants';
import {
  BaseResponse,
  GetApplicationRequest,
  GetApplicationResponse,
  PatchApplication,
  PostApplication,
  GetApplicationDetaiResponse,
  IdRequest,
  PatchApplicationDetailRequest,
  PatchApplicationDetailResponse,
} from '@/types';

export const getApplicationList = ({
  type,
}: GetApplicationRequest): Promise<BaseResponse<GetApplicationResponse[]>> => {
  if (type === POSITION_MAP.All) {
    return http.get({
      url: '/application',
    });
  }
  return http.get({
    url: `application?position=${type}`,
  });
};

export const postApplication = (application: PostApplication, token: string): Promise<BaseResponse<PostApplication>> =>
  http.post(
    {
      url: '/application',
      data: application,
    },
    token
  );

export const patchApplication = (application: PatchApplication): Promise<BaseResponse<PatchApplication>> =>
  http.patch({
    url: `/application`,
    data: application,
  });

export const getApplicationDetail = (id: IdRequest): Promise<BaseResponse<GetApplicationDetaiResponse>> =>
  http.get({
    url: `/application${id}`,
  });

export const patchApplicationDetail = ({
  id,
  applicationStatus,
  schedule,
}: PatchApplicationDetailRequest): Promise<BaseResponse<PatchApplicationDetailResponse>> =>
  http.patch({
    url: `/application${id}`,
    data: {
      applicationStatus,
      schedule,
    },
  });

export const getUserApplication = (): Promise<BaseResponse<GetApplicationDetaiResponse>> =>
  http.get({
    url: '/application/me',
  });
