import {
  APPLY_POSITION,
  APPLICATION_STATUS_MAP,
  ROUND_LABEL,
  SHORT_INFO_LAYOUT,
  LONG_INFO_LAYOUT,
  SELF_INTRODUCTION_LAYOUT,
} from '@/constants';
import { ApplicationDetailType, CommentsResponse } from '@/types';
import { Formatter } from '../Formatter';

const INTERVIEW_ATTEND_LABEL = {
  CHECK: '응시',
  UNCHECK: '미응시',
  PENDING: '미정',
} as const;

/** 표 셀에서 줄바꿈과 파이프가 표를 깨뜨리지 않도록 치환한다. */
const escapeTableCell = (value: string) => value.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');

const formatDateTime = (value?: string | null) => (value ? Formatter.formatInterviewDateTime(value) : '-');

/**
 * 지원서 상세를 Markdown 문자열로 만든다.
 * 화면과 동일한 레이아웃 상수를 사용하므로 문항이 바뀌어도 자동으로 따라간다.
 */
export const buildApplicationMarkdown = (
  application: ApplicationDetailType,
  comments: CommentsResponse,
): string => {
  const labeled: Record<string, unknown> = {
    ...application,
    position: APPLY_POSITION[application.position] ?? application.position,
    round: ROUND_LABEL[application.round ?? 'REGULAR'],
  };
  const read = (key: string) => String(labeled[key] ?? '').trim();

  const lines: string[] = [];

  lines.push(`# ${read('name') || '이름 없음'} · ${read('position')} · ${read('round')}`);
  lines.push('');
  lines.push(`- 지원서 번호: ${application.id}`);
  lines.push(`- 접수 일시: ${formatDateTime(application.appliedAt)}`);
  lines.push(`- 합격 상태: ${APPLICATION_STATUS_MAP[application.applicationStatus] ?? application.applicationStatus}`);
  lines.push('');

  lines.push('## 인적 정보');
  lines.push('');
  lines.push('| 항목 | 내용 |');
  lines.push('| --- | --- |');
  SHORT_INFO_LAYOUT.forEach(({ title, value }) => {
    lines.push(`| ${title} | ${escapeTableCell(read(value))} |`);
  });
  lines.push(`| 이메일 | ${escapeTableCell(application.user?.email ?? '')} |`);
  lines.push('');

  lines.push('## 링크');
  lines.push('');
  lines.push(application.portfolio || '-');
  lines.push('');

  LONG_INFO_LAYOUT.forEach(({ title, value }) => {
    const content = read(value);
    if (!content) return;
    lines.push(`## ${title}`);
    lines.push('');
    lines.push(content);
    lines.push('');
  });

  lines.push('## 자기소개서');
  lines.push('');
  SELF_INTRODUCTION_LAYOUT.forEach(({ title, value }, index) => {
    lines.push(`### ${index + 1}. ${title}`);
    lines.push('');
    lines.push(read(value) || '-');
    lines.push('');
  });

  lines.push('## 면접 정보');
  lines.push('');
  lines.push(`- 면접 일시: ${formatDateTime(application.interview?.fixedInterviewDate)}`);
  lines.push(`- 면접 장소: ${application.interview?.place || '-'}`);
  lines.push('');

  lines.push(`## 운영진 코멘트 (${comments.length})`);
  lines.push('');
  if (comments.length === 0) {
    lines.push('작성된 코멘트가 없습니다.');
    lines.push('');
  } else {
    comments.forEach(({ admin, content, createdAt }) => {
      lines.push(`**${admin?.name ?? '알 수 없음'}** · ${formatDateTime(createdAt)}`);
      lines.push('');
      lines.push(content);
      lines.push('');
    });
  }

  return lines.join('\n');
};

/** 지원서_192_김건우_백엔드.md */
export const buildApplicationFileName = (application: ApplicationDetailType) => {
  const position = APPLY_POSITION[application.position] ?? application.position;
  const safeName = (application.name || '이름없음').replace(/[\\/:*?"<>|\s]/g, '');
  return `지원서_${application.id}_${safeName}_${position}.md`;
};
