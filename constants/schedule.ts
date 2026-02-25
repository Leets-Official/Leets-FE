export const DEFAULT_TIME = {
  TIME_FORMAT: 'HH:mm',
  FULL_TIME_FORMAT: `YYYY-MM-DD HH:mm`,
} as const;

export const APPLY_PERIOD = {
  BEFORE: 'BEFORE', // 지원 시작 전
  RECRUIT: 'RECRUIT', // 지원 기간 중
  AFTER: 'AFTER', // 지원 기간 종료 후
} as const;

export const TIMELINE = {
  지원기간: '26.02.26 ~ 26.03.08',
  '면접 대상자 발표': '26.03.10',
  면접: '26.03.11 ~ 26.03.13',
  '최종 합격자 발표': '26.03.15',
  OT: '26.03.16',
} as const;

export const APPLY_DATE = { START: new Date('2026-02-26T00:00:00+09:00'), END: new Date('2026-03-08T23:59:59+09:00') };

export const INTERVIEW_RESPONSE_DEADLINE = new Date('2026-03-10T23:59:59+09:00');
export const INTERVIEW_END_DATE = new Date('2026-03-13T23:59:59+09:00');
export const FINAL_RESULT_DATE = new Date('2026-03-15T18:00:00+09:00');
