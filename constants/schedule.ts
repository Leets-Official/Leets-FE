export const DEFAULT_TIME = {
  TIME_FORMAT: 'HH:mm',
  FULL_TIME_FORMAT: `YYYY-MM-DD HH:mm`,
} as const;

export const APPLY_PERIOD = {
  RECRUIT: 'RECRUIT',
  CLOSE: 'CLOSE',
} as const;

export const TIMELINE = {
  지원기간: '26.02.26 ~ 26.03.08',
  '면접 대상자 발표': '26.03.10',
  면접: '26.03.11 ~ 26.03.13',
  '최종 합격자 발표': '26.03.15',
  OT: '26.03.16',
} as const;

export const APPLY_DATE = { START: new Date('2026-02-26T00:00:00+09:00'), END: new Date('2026-03-08T23:59:59+09:00') };
