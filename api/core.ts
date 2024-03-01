import { HTTP_METHODS } from '@/constants';
import { BaseResponse } from '@/types';
import { Alert } from '@/utils';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { baseUrl, baseHeader, isServer } from './config';

const createMethods =
  (method: keyof typeof HTTP_METHODS) =>
  async <T>(url: string, config?: RequestInit, callback?: () => void): Promise<BaseResponse<T>> => {
    try {
      const response = await fetch(`${baseUrl}${url}`, {
        method,
        headers: { ...baseHeader, ...config?.headers },
        body: config?.body,
        cache: config?.cache ?? 'force-cache',
        credentials: 'same-origin',
        next: config?.next,
      });

      const { result } = await response.json();
      const { message } = result;

      if (message) {
        throw message;
      }
      return { result };
    } catch (err) {
      if (!isServer) {
        Alert.error(err as string);
      }
      callback?.();
      return Promise.reject(err);
    }
  };

export default {
  get: createMethods(HTTP_METHODS.GET),
  post: createMethods(HTTP_METHODS.POST),
  patch: createMethods(HTTP_METHODS.PATCH),
  put: createMethods(HTTP_METHODS.PUT),
  delete: createMethods(HTTP_METHODS.DELETE),
};
