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
  지원기간: '26.08.28 ~ 26.09.03',
  '면접 대상자 발표': '26.09.04',
  면접: '26.09.07 ~ 26.09.11',
  '최종 합격자 발표': '26.09.12',
  OT: '26.09.14',
  '1주차': '26.09.23',
} as const;

export const APPLY_DATE = { START: new Date('2026-08-28T00:00:00+09:00'), END: new Date('2026-09-03T23:59:59+09:00') };
// 파트별 조기 마감(7기 추가 모집 대응). 8기는 전 파트 마감이 같아 APPLY_DATE.END와 동일한 값으로 비활성화.
export const APPLY_DATE_EARLY_END = new Date('2026-09-03T23:59:59+09:00');

export const PAPER_RESULT_DATE = new Date('2026-09-04T18:00:00+09:00');
export const INTERVIEW_RESPONSE_DEADLINE = new Date('2026-09-05T23:59:59+09:00');
export const INTERVIEW_END_DATE = new Date('2026-09-11T23:59:59+09:00');
export const FINAL_RESULT_DATE = new Date('2026-09-12T18:00:00+09:00');
