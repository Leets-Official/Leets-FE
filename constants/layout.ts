export const CONTACT_LAYOUT = [
  { title: 'Leader', value: '김성민', hasLink: false },
  { title: 'Github', value: 'https://github.com/Leets-Official', hasLink: true },
  { title: 'Mail', value: 'leetsland@gmail.com', hasLink: false },
  { title: 'Open Kakao', value: 'https://pf.kakao.com/_LtLyG', hasLink: true },
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
  benefits: [`공부할 때 열심히 공부하고, \n놀 때 신나게 즐겨요.`, '월 1회 진행되는 \nLeets DAY!', 'Leet’s PLAY!'],
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
  { title: 'Leets에 지원한 동기와 개발 동아리 중 Leets를 선택한 이유는 무엇인지 작성해주세요.', value: 'motive' },
  {
    title: '지난 방학 동안 자기개발을 위해 어떠한 노력을 했는지와 이번 학기 목표나 계획을 작성해주세요.',
    value: 'schedule',
  },
  {
    title:
      '개발자/디자이너로서 가장 중요하다고 생각되는 능력은 무엇이며, 해당 능력을 향상시키기 위해 어떠한 노력을 했는지 작성해주세요.',
    value: 'capability',
  },
  {
    title: '갈등 상황을 해결하였던 경험이나, 갈등 상황이 발생하였을 때 어떻게 해결할 것인지에 대하여 작성해주세요.',
    value: 'conflict',
  },
  {
    title: '결과와 상관없이 열정과 최선을 다했던 경험과, 그 과정에서 변화한 점과 느낀점은 무엇이었는지 작성해주세요.',
    value: 'passion',
  },
] as const;
