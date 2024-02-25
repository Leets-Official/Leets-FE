export type GetProjectResponse = {
  portfolioId: string;
  summary: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  logoImgUrl: string;
  mainImgUrl: string;
  serviceUrl: string;
  contributors: Array<{
    name: string;
    position: string;
    githubUrl: string;
  }>;
};

export type GetProjectRequest = {
  portfolioId: string;
};

export type GetProjectListResponse = Array<
  Array<{
    portfolioId: number;
    name: string;
    coverImgUrl: string;
  }>
>;

export type GetProjectListRequest = {
  generation: number;
};
