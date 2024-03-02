import http from '@/api/core';

import { GetProjectRequest, GetProjectResponse, GetProjectListRequest, GetProjectListResponse } from '@/types';

export const getProjectList = ({ generation }: GetProjectListRequest) => {
  if (generation) {
    return http.get<GetProjectListResponse>(`/portfolios?generation=${generation}`);
  }
  return http.get<GetProjectListResponse>(`/portfolios`);
};

export const getProject = ({ portfolioId }: GetProjectRequest) =>
  http.get<GetProjectResponse>(`/portfolios/${portfolioId}`);
