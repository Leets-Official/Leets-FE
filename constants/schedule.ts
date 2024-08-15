export const DEFAULT_TIME = {
  TIME_FORMAT: 'HH:mm',
  FULL_TIME_FORMAT: `YYYY-MM-DD HH:mm`,
} as const;

export const APPLY_PERIOD = {
  RECRUIT: 'RECRUIT',
  CLOSE: 'CLOSE',
} as const;

export const TIMELINE = {
  지원기간: '24.08.26 ~ 24.09.06',
  '면접 대상자 발표': '24.09.08',
  면접: '24.09.09 ~ 24.09.11',
  '최종 합격자 발표': '24.09.12',
  '정규 활동 시작': '24.09.12',
} as const;

export const APPLY_DATE = { START: new Date('2024-08-26T12:00:00+09:00'), END: new Date('2024-09-06T23:59:59+09:00') };
