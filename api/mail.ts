import { http } from '@/api/core';
import { BaseResponse, IdRequest } from '@/types';

export const postMail = (id: IdRequest): Promise<BaseResponse<boolean>> =>
  http.post({
    url: '/application',
    data: id,
  });
