export const UNEXPECTED_ERROR = '예기치 못한 에러가 발생했습니다.' as const;

export const APPLICATION = {
  COMPLETE_SAVE: '저장 완료되었습니다.',
  COMPLETE_SUBMIT: '지원 완료되었습니다.',
  EXIST_APPLICATION: '이미 지원서가 접수되었습니다.',
  NOT_RECRUIT_PERIOD: '지원 기간이 아닙니다.',
  CONFIRM_SUBMIT: '제출하시겠습니까? 수정할 수 없습니다.',
  CONFIRM_MOVE: '이동하실건가요? 데이터는 저장되지 않습니다.',
  ASK_USE_DESKTOP: '데스크탑 환경에서 지원하실 수 있습니다.',
} as const;

export const CHANGE_APPLICATION_STATUS = {
  SUCCESS: '변경 완료되었습니다.',
  FAIL: '변경에 실패했습니다',
} as const;
