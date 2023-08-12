export const SEARCH_TARGETS = {
  NAME: 'name',
  APPLICATION_STATUS: 'applicationStatus',
  INTERVIEW_STATUS: 'interviewStatus',
  GPA: 'gpa',
  INTERVIEW_DATE: 'interviewDate',
} as const;

export const SORT_TARGETS = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export const PAGINATION = {
  QUERY: 'pageNumber',
  DEFAULT_PAGE: '1',
} as const;

export const POSITION_INFO = {
  All: 'All',
  dev: '개발',
  design: '디자인',
} as const;

export const POSITION_TYPES = Object.keys(POSITION_INFO) as (keyof typeof POSITION_INFO)[];
