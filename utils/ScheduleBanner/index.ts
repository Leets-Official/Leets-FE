import { SchedulePhase } from '@/types/type/Schedule';

export const schedulePhases: SchedulePhase[] = [
  {
    id: 1,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-02-31'),
    title: '함께 성장할 수 있는 건',
    subtitle: '결국 Leets이기에.',
    notice: '2025년 3월 모집예정',
    buttonText: '오픈 알림 신청하기',
  },
  {
    id: 2,
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-23'),
    title: 'Leets와 같이 성장할 여러분을 기다리고 있어요.',
    subtitle: '',
    notice: '2025년 3월 24일 모집시작',
    buttonText: '오픈 알림 신청하기',
  },
  {
    id: 3,
    startDate: new Date('2025-03-24'),
    endDate: new Date('2025-04-31'),
    title: 'Leets 5기 모집이 시작되었습니다!',
    subtitle: '',
    notice: '2025년 3월 15일 마감',
    buttonText: '5기 지원하러 가기',
  },
];

export function getCurrentPhase(): SchedulePhase | null {
  const now = new Date('2025-02-16').toISOString();
  return (
    schedulePhases.find((phase) => now >= phase.startDate.toISOString() && now <= phase.endDate.toISOString()) || null
  );
}
