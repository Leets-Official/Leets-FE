import { http } from '@/api/core';
import { BaseResponse, LoginRequest, AdminLoginRequest, LoginResponse } from '@/types';

export const postSignIn = ({ idToken }: LoginRequest): Promise<BaseResponse<LoginResponse>> =>
  http.post({
    url: '/user/login',
    data: {
      idToken,
    },
  });

export const postAdminLogin = ({ id, password }: AdminLoginRequest): Promise<BaseResponse<LoginResponse>> =>
  http.post({
    url: '/admin/login',
    data: {
      id,
      password,
    },
  });
