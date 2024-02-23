import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { ACCESS_TOKEN, HTTP_METHODS, UNEXPECTED_ERROR } from '@/constants';
import { Alert } from '@/utils';
import { getCookie } from 'cookies-next';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

const handleRequest = (config: AxiosRequestConfig, token?: string) => {
  const accessToken = getCookie(ACCESS_TOKEN);
  return !token && !accessToken
    ? config
    : {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token ?? accessToken}`,
        },
      };
};

const handleResponse = <T>(response: AxiosResponse<T>) => response.data;

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const { message = UNEXPECTED_ERROR } = error.response?.data.result || {};
    Alert.error(message);
    return { result: error };
  }
  Alert.error(UNEXPECTED_ERROR);
  throw Error(UNEXPECTED_ERROR);
};

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig, token?: string): Promise<any> =>
    _axiosInstance({ ...handleRequest(config, token), method: methodType })
      .then(handleResponse)
      .catch(handleError);

export const http = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
