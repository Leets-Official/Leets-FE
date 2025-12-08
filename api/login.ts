import http from '@/api/core';
import { LoginRequest, AdminLoginRequest, LoginResponse, MeRequest, MeResponse, AdminMeResponse } from '@/types';

export const postUserLogin = ({ idToken }: LoginRequest) =>
  http.post<LoginResponse>({ url: '/user/login', data: { idToken } });

export const postAdminLogin = ({ username, password }: AdminLoginRequest) =>
  http.post<LoginResponse>({
    url: '/admin/login',
    data: {
      username,
      password,
    },
  });

export const getApplicant = ({ accessToken }: MeRequest) =>
  http.get<MeResponse>({
    url: '/user/me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getAdmin = (accessToken: string) =>
  http.get<AdminMeResponse>({
    url: '/admin/me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
