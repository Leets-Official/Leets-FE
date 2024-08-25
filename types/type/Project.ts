export type GetProjectResponse = {
  portfolioId: string;
  summary: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  logoImgName: string;
  mainImgName: string;
  serviceUrl: string;
  contributors: Array<{
    name: string;
    position: string;
    githubUrl: string;
    profileUrl: string;
    profile: string;
  }>;
};

export type GetProjectRequest = {
  portfolioId: string;
};

export type GetProjectListResponse = Array<
  Array<{
    portfolioId: number;
    name: string;
    mainImgName: string;
  }>
>;

export type GetProjectListRequest = {
  generation: number;
};
