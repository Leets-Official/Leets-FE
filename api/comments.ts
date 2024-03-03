import http from '@/api/core';
import { PostCommentsRequest, CommentsResponse } from '@/types';

export const getComments = ({ applicationId, accessToken }: { applicationId: string; accessToken: string }) =>
  http.get<CommentsResponse>({
    url: `/comments/${applicationId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const postComments = ({ applicationId, content }: PostCommentsRequest) =>
  http.post<FlatArray<CommentsResponse, 1>>({
    url: '/comments',
    data: {
      applicationId,
      content,
    },
  });
