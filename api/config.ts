// FIXME: temporary deprecated
import { ACCESS_TOKEN } from '@/constants';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { getCookie } from 'cookies-next';

export const isServer = typeof window === 'undefined';
export const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseHeader = {
  'Content-Type': 'application/json',
};

export const WithFetchConfig = <T>({
  body,
  accessToken,
  ...rest
}: {
  body?: T;
  accessToken?: string;
} & Omit<RequestInit, 'body'>) => {
  const headers = {
    ...rest.headers,
    Authorization: `Bearer ${accessToken ?? getCookie(ACCESS_TOKEN)}`,
  };

  return { ...rest, headers, body: JSON.stringify(body) };
};
