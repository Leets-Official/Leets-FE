import http from '@/api/core';

export type MailSubscribeSuccess = true;
export interface MailSubscribeError {
  httpStatus: number;
  message: string;
  code: string;
}

export const postMailSubscribe = (email: string) =>
  http.post<MailSubscribeSuccess | MailSubscribeError>({
    url: '/mail/subscribe',
    data: {
      email,
    },
  });
