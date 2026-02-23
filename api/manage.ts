import http from '@/api/core';

export const getProfile = () => http.get<any>({ url: '/profile/me' });

export const saveProfile = (data: { position: string; link: string; profileImage?: string }) =>
  http.post<any>({ url: '/profile', data });

export const saveProject = (data: {
  category: string;
  title: string;
  summary: string;
  description: string;
  mainImage?: string;
  members: Array<{ name: string; position: string; url: string }>;
}) => http.post<any>({ url: '/portfolios', data });

export const getPresignedUrl = (fileName: string) =>
  http.post<{ url: string }>({ url: '/storages/pre-authenticated-url', params: { fileName } });
