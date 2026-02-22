export const APPLICATION_STATUS_TEXT_COLOR = {
  PENDING: 'rgba(21, 52, 100, 0.40)',
  PASS: 'rgba(39, 190, 34, 0.80)',
  PASS_PAPER: 'rgba(39, 190, 34, 0.80)',
  FAIL: 'rgba(240, 81, 81, 1)',
  FAIL_PAPER: 'rgba(240, 81, 81, 1)',
} as const;

export const APPLICATION_STATUS_BG_COLOR = {
  PENDING: 'rgba(21, 52, 100, 0.08)',
  PASS: 'rgba(39, 190, 34, 0.15)',
  PASS_PAPER: 'rgba(39, 190, 34, 0.15)',
  FAIL: 'rgba(240, 81, 81, 0.10)',
  FAIL_PAPER: 'rgba(240, 81, 81, 0.10)',
} as const;

export const INTERVIEW_ATTEND_STATUS_COLOR = {
  CHECK: '#3584fb',
  UNCHECK: '#F05151',
  PENDING: 'rgba(21, 52, 100, 0.15)',
} as const;
