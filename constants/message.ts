export const UNEXPECTED_ERROR = '예기치 못한 에러가 발생했습니다.' as const;

export const APPLICATION = {
  COMPLETE_SAVE: '저장 완료되었습니다.',
  COMPLETE_SUBMIT: '지원 완료되었습니다.',
  EXIST_APPLICATION: '이미 지원서가 접수되었습니다.',
} as const;

export const CHANGE_APPLICATION_STATUS = {
  SUCCESS: '변경 완료되었습니다.',
  FAIL: '변경에 실패했습니다',
} as const;
