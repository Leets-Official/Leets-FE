import { http } from '@/api/core';
import { POSITION_INFO } from '@/constants';
import {
  BaseResponse,
  GetApplicationResponse,
  PatchApplication,
  PostApplication,
  GetApplicationDetaiResponse,
  IdRequest,
  PatchApplicationDetailRequest,
  PatchApplicationDetailResponse,
  KeyOf,
} from '@/types';

export const getApplication = ({
  type,
}: {
  type: KeyOf<typeof POSITION_INFO>;
}): Promise<BaseResponse<GetApplicationResponse[]>> => {
  if (type === POSITION_INFO.All) {
    return http.get({
      url: '/application',
    });
  }
  return http.get({
    url: `application?position=${type}`,
  });
};

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
