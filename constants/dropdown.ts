import { APPLY_POSITION } from './search';

export const FILTER_DEFAULT_VALUE = {
  APPLICATION_STATUS: '합격 여부',
  INTERVIEW_STATUS: '면접 응시 여부',
} as const;

export const ORDER_LIST = ['ASC', 'DESC'] as const;
export const APPLICATION_STAUTS_LIST = ['PENDING', 'PASS_PAPER', 'FAIL_PAPER', 'PASS', 'FAIL'] as const;
export const INTERVIEW_STATUS_LIST = ['CHECK', 'UNCHECK', 'PENDING'] as const;

export const APPLICATION_STATUS_MAP = {
  FAIL_PAPER: '서류 탈락',
  PASS_PAPER: '서류 합격',
  FAIL: '최종 탈락',
  PASS: '최종 합격',
  PENDING: '보류중',
} as const;

export const INTERVIEW_STATUS_MAP = {
  CHECK: '면접 응시',
  UNCHECK: '면접 미응시',
} as const;

export const ORDER_MAP = {
  ASC: '오름차순',
  DESC: '내림차순',
} as const;

export const DROPDOWN_MAP = {
  ...APPLICATION_STATUS_MAP,
  ...INTERVIEW_STATUS_MAP,
  ...ORDER_MAP,
  ...APPLY_POSITION,
} as const;
