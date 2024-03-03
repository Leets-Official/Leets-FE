import http from '@/api/core';

import { GetProjectRequest, GetProjectResponse, GetProjectListRequest, GetProjectListResponse } from '@/types';

export const getProjectList = ({ generation }: GetProjectListRequest) => {
  if (generation) {
    return http.get<GetProjectListResponse>({ url: `/portfolios?generation=${generation}` });
  }
  return http.get<GetProjectListResponse>({ url: `/portfolios` });
};

export const getProject = ({ portfolioId }: GetProjectRequest) =>
  http.get<GetProjectResponse>({ url: `/portfolios/${portfolioId}` });
