export type ThemeColor = 'green' | 'blue' | 'yellow';

export type BaseResponse<T> = {
  code: string;
  result: T;
  message: string;
};
