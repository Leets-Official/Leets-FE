import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { ACCESS_TOKEN, HTTP_METHODS, UNEXPECTED_ERROR } from '@/constants';
import { LocalStorage, Alert } from '@/utils';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

const handleRequest = (config: AxiosRequestConfig) => {
  const TOKEN = LocalStorage.getItem(ACCESS_TOKEN);
  return TOKEN
    ? {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    : config;
};

const handleResponse = <T>(response: AxiosResponse<T>) => {
  return response.data;
};

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const { message = null } = error.response?.data.result || {};
    Alert.error(message);
    return { result: error };
  }
  Alert.error(UNEXPECTED_ERROR);
  throw Error(UNEXPECTED_ERROR);
};

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig): Promise<any> =>
    _axiosInstance({ ...handleRequest(config), method: methodType })
      .then(handleResponse)
      .catch(handleError);

export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
