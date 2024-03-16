export const DEFAULT_TIME = {
  TIME_FORMAT: 'HH:mm',
  FULL_TIME_FORMAT: `YYYY-MM-DD HH:mm`,
} as const;

export const APPLY_PERIOD = {
  RECRUIT: 'RECRUIT',
  CLOSE: 'CLOSE',
} as const;

export const TIMELINE = {
  지원기간: '24.03.04 ~ 24.03.15',
  '면접 대상자 발표': '24.03.19',
  면접: '24.03.20 ~ 24.03.26',
  '최종 합격자 발표': '24.03.27',
  '정규 활동 시작': '24.03.28',
} as const;

export const APPLY_DATE = { START: new Date('2024-03-16T14:00:00+09:00'), END: new Date('2024-03-17T17:59:59+09:00') };
