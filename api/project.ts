import { http } from '@/api/core';
import {
  BaseResponse,
  GetProjectRequest,
  GetProjectResponse,
  GetProjectListRequest,
  GetProjectListResponse,
} from '@/types';

export const getProjectList = ({
  generation,
}: GetProjectListRequest): Promise<BaseResponse<GetProjectListResponse>> => {
  if (generation) {
    return http.get({
      url: `/portfolios`,
      params: { generation },
    });
  }
  return http.get({
    url: `/portfolios`,
  });
};

export const getProject = ({ portfolioId }: GetProjectRequest): Promise<BaseResponse<GetProjectResponse>> =>
  http.get({
    url: `/portfolios/${portfolioId}`,
  });
