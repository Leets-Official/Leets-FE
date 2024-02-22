export type BaseResponse<T> = {
  code: string;
  result: T;
  message: string;
};

export type BackgroundColor = 'black' | 'white';
