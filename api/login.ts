import { http } from '@/api/core';
import {
  BaseResponse,
  LoginRequest,
  AdminLoginRequest,
  LoginResponse,
  MeRequest,
  MeResponse,
  AdminMeResponse,
} from '@/types';

export const postUserLogin = ({ idToken }: LoginRequest): Promise<BaseResponse<LoginResponse>> =>
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

export const getApplicant = ({ accessToken }: MeRequest): Promise<BaseResponse<MeResponse>> =>
  http.get({
    url: '/user/me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getAdmin = (): Promise<BaseResponse<AdminMeResponse>> =>
  http.get({
    url: '/admin/me',
  });
