import http from '@/api/core';
import { LoginRequest, AdminLoginRequest, LoginResponse, MeRequest, MeResponse, AdminMeResponse } from '@/types';
import { WithFetchConfig } from './config';

export const postUserLogin = ({ idToken }: LoginRequest) =>
  http.post<LoginResponse>('/user/login', WithFetchConfig({ body: idToken, cache: 'no-store' }));

export const postAdminLogin = ({ id, password }: AdminLoginRequest) =>
  http.post<LoginResponse>('/admin/login', WithFetchConfig({ body: { id, password }, cache: 'no-store' }));

export const getApplicant = ({ accessToken }: MeRequest) =>
  http.get<MeResponse>('/user/me', WithFetchConfig({ accessToken, cache: 'no-store' }));

export const getAdmin = (accessToken: string) =>
  http.get<AdminMeResponse>('/admin/me', WithFetchConfig({ accessToken, cache: 'no-store' }));
