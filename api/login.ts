import http from '@/api/core';
import { LoginRequest, AdminLoginRequest, LoginResponse, MeRequest, MeResponse, AdminMeResponse } from '@/types';
import { WithFetchConfig } from './config';

export const postUserLogin = ({ idToken }: LoginRequest) =>
  http.post<LoginResponse>('/user/login', WithFetchConfig({ body: idToken }));

export const postAdminLogin = ({ id, password }: AdminLoginRequest) =>
  http.post<LoginResponse>('/admin/login', WithFetchConfig({ body: { id, password } }));

export const getApplicant = ({ accessToken }: MeRequest) =>
  http.get<MeResponse>('/user/me', WithFetchConfig({ accessToken }));

export const getAdmin = (accessToken: string) =>
  http.get<AdminMeResponse>('/admin/me', WithFetchConfig({ accessToken }));
