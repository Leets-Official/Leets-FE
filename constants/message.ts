export const UNEXPECTED_ERROR = '예기치 못한 에러가 발생했습니다.' as const;

export const APPLICATION = {
  COMPLETE_SAVE: '저장 완료되었습니다.',
  COMPLETE_SUBMIT: '지원 완료되었습니다.',
  EXIST_APPLICATION: '이미 지원서가 접수되었습니다.',
  NOT_RECRUIT_PERIOD: '지원 기간이 아닙니다.',
  CONFIRM_SUBMIT: '제출하시겠습니까? 수정할 수 없습니다.',
  CONFIRM_MOVE: '이동하실건가요? 데이터는 저장되지 않습니다.',
  ASK_USE_DESKTOP: '데스크탑 환경에서 지원하실 수 있습니다.',
  REJECT_CHANGE_APPLICATION_STATUS: '제출하지 않은 지원자의 값은\n변경할 수 없습니다.',
  ASK_INPUT_DATE: '면접 일시를 입력해야 합니다.',
  ASK_ITERVIEW_INFO: '면접 정보를 입력해야 합니다.',
} as const;

export const CHANGE_APPLICATION_STATUS = {
  SUCCESS: '변경 완료되었습니다.',
  FAIL: '변경에 실패했습니다',
} as const;

export const APPLICATION_STATUS_MESSAGE = {
  PENDING: {
    title: '서류 심사 중',
    description: '지원서가 검토되고 있습니다.\n결과는 3월 10일에 발표됩니다.',
  },
  PASS_PAPER: {
    title: '서류 합격',
    description: '축하합니다! 서류 전형에 합격하셨습니다.\n아래에서 면접 참석 여부를 선택해 주세요.',
  },
  FAIL_PAPER: {
    title: '서류 탈락',
    description: '아쉽지만 이번에는 함께하지 못하게 되었습니다.\n다음 번에 더 좋은 기회로 다시 만나뵙길 바랍니다.',
  },
  PASS: {
    title: '최종 합격',
    description:
      '축하합니다! 최종 합격하셨습니다.\n\nOT는 3월 16일에 진행됩니다.\n자세한 안내는 카톡방 초대 후 안내드리겠습니다.',
  },
  FAIL: {
    title: '최종 탈락',
    description: '아쉽지만 이번에는 함께하지 못하게 되었습니다.\n다음 번에 더 좋은 기회로 다시 만나뵙길 바랍니다.',
  },
} as const;
