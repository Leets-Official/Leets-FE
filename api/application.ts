import { http } from '@/api/core';
import {
  BaseResponse,
  GetApplicationResponse,
  PatchApplication,
  PostApplication,
  GetApplicationDetaiResponse,
  IdRequest,
  PatchApplicationDetailRequest,
  PatchApplicationDetailResponse,
} from '@/types';

export const getApplication = (): Promise<BaseResponse<GetApplicationResponse[]>> =>
  http.get({
    url: '/application',
  });

export const postApplication = (application: PostApplication): Promise<BaseResponse<PostApplication>> =>
  http.post({
    url: '/application',
    data: application,
  });

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
}: PatchApplicationDetailRequest): Promise<BaseResponse<PatchApplicationDetailResponse>> =>
  http.patch({
    url: `/application${id}`,
    data: {
      applicationStatus,
    },
  });

export const getUserApplication = (): Promise<BaseResponse<GetApplicationDetaiResponse>> =>
  http.get({
    url: '/application/me',
  });
