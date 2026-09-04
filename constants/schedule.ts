export const DEFAULT_TIME = {
  TIME_FORMAT: 'HH:mm',
  FULL_TIME_FORMAT: `YYYY-MM-DD HH:mm`,
} as const;

export const APPLY_PERIOD = {
  BEFORE: 'BEFORE', // 지원 시작 전
  RECRUIT: 'RECRUIT', // 지원 기간 중
  AFTER: 'AFTER', // 지원 기간 종료 후
} as const;

/** 모집 회차. 정규 서탈자는 추가 모집에 재지원할 수 없으므로 유저당 지원서는 항상 1건이다. */
export const ROUND = {
  REGULAR: 'REGULAR', // 정규 모집
  ADDITIONAL: 'ADDITIONAL', // 추가 모집
} as const;

export const TIMELINE = {
  지원기간: '26.08.28 ~ 26.09.03',
  '면접 대상자 발표': '26.09.04',
  '추가 모집': '26.09.04 ~ 26.09.06',
  면접: '26.09.07 ~ 26.09.11',
  '최종 합격자 발표': '26.09.12',
  OT: '26.09.14',
  '1주차': '26.09.23',
} as const;

/**
 * 회차별 일정. 모든 값은 '+09:00'이 명시된 절대 시각이므로
 * 서버 TZ와 무관하게 new Date()와 그대로 비교할 수 있다.
 * (KST 보정을 덧붙이면 9시간이 이중으로 더해져 모든 경계가 앞당겨진다)
 */
export const ROUND_SCHEDULE = {
  REGULAR: {
    applyStart: new Date('2026-08-28T00:00:00+09:00'),
    applyEnd: new Date('2026-09-03T23:59:59+09:00'),
    paperResult: new Date('2026-09-04T18:00:00+09:00'),
    interviewResponseDeadline: new Date('2026-09-05T23:59:59+09:00'),
    interviewStart: new Date('2026-09-07T00:00:00+09:00'),
    interviewEnd: new Date('2026-09-11T23:59:59+09:00'),
  },
  ADDITIONAL: {
    applyStart: new Date('2026-09-04T20:00:00+09:00'),
    applyEnd: new Date('2026-09-06T23:59:59+09:00'),
    paperResult: new Date('2026-09-07T18:00:00+09:00'),
    interviewResponseDeadline: new Date('2026-09-08T23:59:59+09:00'),
    interviewStart: new Date('2026-09-09T00:00:00+09:00'),
    interviewEnd: new Date('2026-09-11T23:59:59+09:00'),
  },
} as const;

/** 최종 합격자 발표는 정규·추가를 한 번에 진행하므로 회차와 무관한 단일 시각이다. */
export const FINAL_RESULT_DATE = new Date('2026-09-12T18:00:00+09:00');

/** 서류 결과가 처음 공개되는 시각. 이 시각 전에는 어떤 회차도 결과가 없다. */
export const EARLIEST_PAPER_RESULT_DATE = ROUND_SCHEDULE.REGULAR.paperResult;

/* ===== 하위 호환 별칭 ===== */

/** @deprecated 회차별 일정은 ROUND_SCHEDULE 을 사용할 것. 랜딩 카운트다운 등 정규 기준 표시에만 남겨둔다. */
export const APPLY_DATE = {
  START: ROUND_SCHEDULE.REGULAR.applyStart,
  END: ROUND_SCHEDULE.REGULAR.applyEnd,
};

/**
 * 파트별 조기 마감. 8기는 정규·추가 모두 전 파트 마감이 같아
 * 마지막 접수 종료 시각과 동일한 값으로 두어 비활성화한다.
 * (정규 마감 시각으로 두면 추가 모집 기간에 BACKEND 파트가 막힌다)
 */
export const APPLY_DATE_EARLY_END = ROUND_SCHEDULE.ADDITIONAL.applyEnd;

/** @deprecated 회차별 값은 ROUND_SCHEDULE[round].paperResult 를 사용할 것. */
export const PAPER_RESULT_DATE = ROUND_SCHEDULE.REGULAR.paperResult;
/** @deprecated 회차별 값은 ROUND_SCHEDULE[round].interviewResponseDeadline 을 사용할 것. */
export const INTERVIEW_RESPONSE_DEADLINE = ROUND_SCHEDULE.REGULAR.interviewResponseDeadline;
/** @deprecated 회차별 값은 ROUND_SCHEDULE[round].interviewEnd 를 사용할 것. */
export const INTERVIEW_END_DATE = ROUND_SCHEDULE.REGULAR.interviewEnd;
