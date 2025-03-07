export const DEFAULT_TIME = {
  TIME_FORMAT: 'HH:mm',
  FULL_TIME_FORMAT: `YYYY-MM-DD HH:mm`,
} as const;

export const APPLY_PERIOD = {
  RECRUIT: 'RECRUIT',
  CLOSE: 'CLOSE',
} as const;

export const TIMELINE = {
  지원기간: '25.02.24 ~ 25.03.07',
  '면접 대상자 발표': '25.03.09',
  면접: '25.03.10 ~ 25.03.14',
  '최종 합격자 발표': '25.03.16',
  '정규 활동 시작': '25.03.20',
} as const;

export const APPLY_DATE = { START: new Date('2025-02-24T00:00:00+09:00'), END: new Date('2025-03-08T23:59:59+09:00') };
