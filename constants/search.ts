export const SEARCH_TARGET = {
  NAME: 'name',
  APPLICATION_STATUS: 'applicationStatus',
  INTERVIEW_STATUS: 'interviewStatus',
} as const;

export const SORT_METHOD = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export const SORT_TARGET = {
  GPA: 'gpa',
  INTERVIEW_DATE: 'interviewDate',
} as const;

export const PAGINATION = {
  QUERY: 'pageNumber',
  DEFAULT_PAGE: '1',
} as const;

export const APPLY_POSITION = {
  DEV: '개발',
  DESIGN: '디자인',
} as const;

export const POSITION_ENGLISH_MAP = {
  ...APPLY_POSITION,
  SAVE: '임시 저장',
} as const;

export const POSITION_MAP = {
  All: 'All',
  ...POSITION_ENGLISH_MAP,
} as const;

export const POSITION_TYPES = Object.keys(POSITION_MAP) as (keyof typeof POSITION_MAP)[];
