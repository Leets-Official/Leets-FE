export const MAIN_COLOR = 'green' as const;

export const THEME_COLOR = { GREEN: 'green', BLUE: 'blue', YELLOW: 'yellow' } as const;

export const BACKGROUND_COLOR = {
  green: '#29B69A',
  blue: '#3685FC',
  yellow: '#FCB836',
} as const;

export const APPLY_BUTTON_COLOR = {
  green: '#10DAB2',
  blue: '#3685FC',
  yellow: '#FCB836',
} as const;

export const TEXT_COLOR = {
  green: 'black',
  blue: 'white',
  yellow: 'black',
} as const;

export const APPLICATION_STATUS_TEXT_COLOR = {
  PENDING: '#989898',
  PASS: '#1a9882',
  PASS_PAPER: '#1a9882',
  FAIL: '#eb3d4d',
  FAIL_PAPER: '#eb3d4d',
} as const;

export const APPLICATION_STATUS_BG_COLOR = {
  PENDING: '#e9e8e8',
  PASS: '#e9faf7',
  PASS_PAPER: '#e9faf7',
  FAIL: '#feecee',
  FAIL_PAPER: '#feecee',
} as const;

export const INTERVIEW_ATTEND_STATUS_COLOR = {
  CHECK: '#4a93ff',
  UNCHECK: '#f3758b',
  PENDING: '#e9e8e8',
} as const;
