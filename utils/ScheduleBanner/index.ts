import { SchedulePhase } from '@/types/type/Schedule';

export const schedulePhases: SchedulePhase[] = [
  {
    id: 1,
    startDate: getKSTDate(new Date('2025-01-01')),
    endDate: getKSTDate(new Date('2025-02-12'), true),
    title: '함께 성장할 수 있는 건',
    subtitle: '결국 Leets이기에.',
    notice: '2025년 2월 모집예정',
    buttonText: '오픈 알림 신청하기',
  },
  {
    id: 2,
    startDate: getKSTDate(new Date('2025-02-13')),
    endDate: getKSTDate(new Date('2025-02-23'), true),
    title: 'Leets와 같이 성장할 여러분을 기다리고 있어요.',
    subtitle: '',
    notice: '2025년 2월 24일 모집 시작',
    buttonText: '오픈 알림 신청하기',
  },
  {
    id: 3,
    startDate: getKSTDate(new Date('2025-02-24')),
    endDate: getKSTDate(new Date('2025-03-06'), true),
    title: 'Leets 5기 모집이 시작되었습니다!',
    subtitle: '',
    notice: '2025년 3월 7일 마감',
    buttonText: '5기 지원하러 가기',
  },
  {
    id: 4,
    startDate: getKSTDate(new Date('2025-03-07')),
    endDate: getKSTDate(new Date('2025-03-19'), true),
    title: 'Leets 5기 지원이 마감되었습니다.',
    subtitle: '',
    notice: '',
    buttonText: '',
  },
];

function getKSTDate(date: Date, isEndOfDay = false): Date {
  const utcUnixTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const diffKSTFromUTC = 9 * 60 * 60 * 1000;
  const adjustedDate = new Date(utcUnixTime + diffKSTFromUTC);
  if (isEndOfDay) {
    adjustedDate.setHours(23, 59, 59, 999);
  } else {
    adjustedDate.setHours(0, 0, 0, 0);
  }
  return adjustedDate;
}

export function getCurrentPhase(): SchedulePhase | null {
  const now = getKSTDate(new Date());
  return (
    schedulePhases.find((phase) => {
      return now >= phase.startDate && now <= phase.endDate;
    }) || null
  );
}
