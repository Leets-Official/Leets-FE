import { ACCESS_TOKEN } from '@/constants';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { getCookie } from 'cookies-next';

export const isServer = typeof window === 'undefined';
export const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseHeader = {
  'Content-Type': 'application/json',
};

export const WithFetchConfig = <T>({
  header,
  body,
  accessToken,
  next,
}: {
  header?: RequestInit['headers'];
  body?: T;
  accessToken?: string;
  next?: RequestInit['next'];
}) => {
  const headers = {
    ...header,
    Authorization: `Bearer ${accessToken ?? getCookie(ACCESS_TOKEN)}`,
  };
  return { headers, body: JSON.stringify(body), next };
};
