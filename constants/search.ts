import { POSITION_ENGLIST_MAP } from './dropdown';

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

export const POSITION_MAP = {
  All: 'All',
  ...POSITION_ENGLIST_MAP,
} as const;

export const POSITION_TYPES = Object.keys(POSITION_MAP) as (keyof typeof POSITION_MAP)[];
