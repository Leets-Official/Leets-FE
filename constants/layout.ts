export const CONTACT_LAYOUT = [
  { title: 'Leader', value: '김성민', hasLink: false },
  { title: 'Github', value: 'https://github.com/Collection50', hasLink: true },
  { title: 'Phone', value: '010 - 1234 - 5678', hasLink: false },
  { title: 'Open Kakao', value: 'https://open.kakao.com/o/sObD2U5e', hasLink: true },
] as const;

const PROJECT_TEXT = {
  title: 'Project',
  height: 384,
  benefits: [
    '웹페이지, 모바일 앱을 만들어 배포하며\n실무 경험을 쌓아요.',
    '6주간의 프로젝트를 통해 분야에 대한\n고민을 해결해요.',
    '여러 사람들과 함께 프로젝트를 진행하며\n소프트 스킬을 개발하고, 효과적으로\n협업하는 방법을 배워요.',
    '프로젝트 결과물은 기업, 대학원, 공모전\n등에 지원하거나 참여할 때 자신의 기술을\n보여주는 물리적 근거로 사용해요.',
  ],
};

const STUDY_TEXT = {
  title: `Study & Networking`,
  height: 455,
  benefits: [
    '전공, CS, 언어, 직무와 관련된\n스터디를 통해 전문성을 갖춰요.',
    '정기 스터디를 통해 지속적으로 성장해요.',
    '비슷한 관심사를 갖고 있는 사람과\n어울리며 인적 네트워크를 연결해요.',
    '사람들과의 네트워크는 미래의 협업과\n취업에서 유리하게 작용해요.',
    '졸업 프로젝트를 진행할 때 원활하게\n팀원을 조직해요.',
  ],
};

const ENTERTIANMENT_TEXT = {
  title: 'Entertainment',
  height: 434,
  benefits: [`공부할 때 열심히 공부하고, \n놀 때 신나게 즐겨요.`, '월 1회 진행되는 \nLEETS DAY!', 'LEET’S GO PICNIC'],
};

export const MOBILE_PROMOTION_LAYOUT = [
  {
    ...PROJECT_TEXT,
    height: 176,
  },
  {
    ...STUDY_TEXT,
    height: 210,
  },
  {
    ...ENTERTIANMENT_TEXT,
    height: 200,
  },
] as const;

export const PROMOTION_LAYOUT = [
  {
    ...PROJECT_TEXT,
  },
  {
    ...STUDY_TEXT,
    height: 455,
  },
  {
    ...ENTERTIANMENT_TEXT,
    height: 434,
  },
];

export const TIMELINE_LAYOUT = {
  지원기간: '23.03.02 ~ 23.03.10',
  '면접 대상자 발표': '23.03.12',
  면접: '23.03.13 ~ 23.03.14',
  '최종 합격자 발표': '23.03.16',
  '정규 활동 시작': '23.03.20',
} as const;

export const LOGIN_LAYOUT = [
  { key: 'id', placeholder: '아이디' },
  { key: 'password', placeholder: '비밀번호' },
] as const;
