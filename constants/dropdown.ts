export const DEFAULT_VALUE = {
  APPLICATION_STATUS: '합격 여부',
  INTERVIEW_STATUS: '면접 응시 여부',
} as const;

export const ORDER_LIST = ['ASC', 'DESC'] as const;

export const APPLICATION_STAUTS_LIST = ['PASS_PAPER', 'FAIL_PAPER', 'PASS', 'FAIL'] as const;

export const INTERVIEW_STATUS_LIST = ['CHECK', 'UNCHECK'] as const;

export const DROPDOWN_MAP = {
  1: '1학기',
  2: '2학기',
  3: '3학년',
  4: '4학년',
} as const;
