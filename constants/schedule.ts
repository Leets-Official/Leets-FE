export const DEFAULT_TIME = {
  TIME_FORMAT: 'HH:mm',
  FULL_TIME_FORMAT: `YYYY-MM-DD HH:mm`,
} as const;

export const APPLY_PERIOD = {
  RECRUIT: 'RECRUIT',
  CLOSE: 'CLOSE',
} as const;

export const TIMELINE = {
  지원기간: '25.08.22 ~ 25.09.04',
  '면접 대상자 발표': '25.09.05',
  면접: '25.09.06 ~ 25.09.08',
  '최종 합격자 발표': '25.09.12',
  '정규 활동 시작': '25.09.18',
} as const;

export const APPLY_DATE = { START: new Date('2025-08-22T00:00:00+09:00'), END: new Date('2025-09-04T23:59:59+09:00') };
