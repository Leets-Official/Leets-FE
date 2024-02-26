export const CONTACT_LAYOUT = [
  { title: 'Leader', value: '김성민', hasLink: false },
  { title: 'Github', value: 'https://github.com/Leets-Official', hasLink: true },
  { title: 'Mail', value: 'leetsland@gmail.com', hasLink: false },
  { title: 'Open Kakao', value: 'https://open.kakao.com/o/sObD2U5e', hasLink: true },
] as const;

const PROJECT_TEXT = {
  title: 'Project',
  height: 384,
  benefits: [
    '웹페이지, 모바일 앱을 만들어 배포하며\n실무 경험을 쌓아요.',
    '프로젝트를 통해 분야에 대해 깊게 공부해요.',
    '여러 사람들과 함께 프로젝트를 진행하며\n소프트 스킬을 개발하고, 효과적으로\n협업하는 방법을 배워요.',
    '프로젝트 결과물은 기업, 대학원, 공모전\n등에 지원하거나 참여할 때 자신의 기술을\n보여주는 물리적 근거로 사용해요.',
  ],
};

const STUDY_TEXT = {
  title: `Study & Networking`,
  height: 455,
  benefits: [
    '전공과 직무와 관련된\n스터디를 통해 전문성을 갖춰요.',
    '정기적으로 진행되는 스터디를 통해\n지속적으로 성장해요.',
    '비슷한 관심사를 갖고 있는 사람과\n어울리며 인적 네트워크를 연결해요.',
    '사람들과의 네트워크는 미래의 협업과\n취업에서 유리하게 작용해요.',
    '서로의 성장을 응원하는 분위기에서\n더 넓고 더 깊게 공부해요.',
  ],
};

const ENTERTIANMENT_TEXT = {
  title: 'Entertainment',
  height: 434,
  benefits: [`공부할 때 열심히 공부하고, \n놀 때 신나게 즐겨요.`, '월 1회 진행되는 \nLEETS DAY!', 'LEET’S PLAY!'],
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
];

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

export const SHORT_INFO_LAYOUT = [
  { title: '이름', value: 'name' },
  { title: '학년', value: 'grade' },
  { title: '전공', value: 'major' },
  { title: '희망 직무', value: 'career' },
  { title: '전화번호', value: 'phone' },
  { title: '희망 면접 날짜', value: 'interviewDay' },
  { title: '희망 면접 시간', value: 'interviewTime' },
  { title: '지원 파트', value: 'position' },
] as const;

export const LONG_INFO_LAYOUT = [
  { title: '알고리즘', value: 'algorithm' },
  { title: '프로젝트 경험', value: 'project' },
] as const;

export const SELF_INTRODUCTION_LAYOUT = [
  { title: 'Leets에 들어와서 얻어가고 싶은 것은 무엇인가요?', value: 'goal' },
  { title: '무언가 열심히 해서 얻은 경험은 무엇인가요?', value: 'completion' },
  { title: '본인의 장단점을 구체적인 경험을 바탕으로 소개해주세요.', value: 'pros' },
  {
    title:
      '개발 실력을 1부터 10까지 점수로 표현해주세요. 점수에 대한 이유를 공부한 과정을 기반으로 작성해주시고, 앞으로의 학습 계획에 대해 자세히 소개해주세요.',
    value: 'level',
  },
  {
    title: '소프트웨어 개발을 더 잘하고 싶어서 시도했던 경험을 적어주세요.',
    value: 'enhancement',
  },
] as const;
