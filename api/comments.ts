import http from '@/api/core';
import { BaseResponse, PostCommentsRequest, CommentsResponse } from '@/types';
import { WithFetchConfig } from './config';

export const getComments = ({
  applicationId,
  accessToken,
}: {
  applicationId: string;
  accessToken: string;
}): Promise<BaseResponse<CommentsResponse>> => http.get(`/comments/${applicationId}`, WithFetchConfig({ accessToken }));

export const postComments = ({
  applicationId,
  content,
}: PostCommentsRequest): Promise<BaseResponse<FlatArray<CommentsResponse, 1>>> =>
  http.post(
    `/comments`,
    WithFetchConfig({
      body: { applicationId, content },
    })
  );
