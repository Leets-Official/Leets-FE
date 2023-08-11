import { http } from '@/api/core';
import { LoginRequest, LoginResponse, BaseResponse } from '@/types';

export const postLogin = ({ id, password }: LoginRequest): Promise<BaseResponse<LoginResponse>> =>
  http.post({
    url: '/admin/login',
    data: {
      id,
      password,
    },
  });
