import { http } from '@/api/core';
import { BaseResponse, PostCommentsRequest, CommentsResponse } from '@/types';

export const getComments = ({
  applicationId,
  accessToken,
}: {
  applicationId: string;
  accessToken: string;
}): Promise<BaseResponse<CommentsResponse>> =>
  http.get({
    url: `/comments/${applicationId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const postComments = ({
  applicationId,
  content,
}: PostCommentsRequest): Promise<BaseResponse<FlatArray<CommentsResponse, 1>>> =>
  http.post({
    url: `/comments`,
    data: {
      applicationId,
      content,
    },
  });
