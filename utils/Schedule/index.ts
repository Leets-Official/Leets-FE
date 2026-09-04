import { APPLY_PERIOD, ROUND_SCHEDULE } from '@/constants';
import { KeyOf } from '@/types';
import { RoundType, RoundSchedule } from '@/types/type/Schedule';

const ROUND_KEYS = Object.keys(ROUND_SCHEDULE) as RoundType[];

export class Schedule {
  /**
   * ROUND_SCHEDULE 의 일정 상수는 '+09:00'이 명시된 절대 시각이고,
   * new Date()도 서버 TZ와 무관하게 같은 절대 시각이므로 그대로 비교한다.
   * (KST 보정을 덧붙이면 9시간이 이중으로 더해져 모든 경계가 앞당겨진다)
   *
   * 정규·추가 모집 두 구간의 합집합으로 판정한다. 구간 사이(정규 마감 후
   * 추가 접수 시작 전)는 AFTER 로 떨어져 지원 폼이 닫힌다.
   */
  static getCurrentPeriod(date: Date = new Date()): KeyOf<typeof APPLY_PERIOD> {
    const firstStart = ROUND_KEYS.map((key) => ROUND_SCHEDULE[key].applyStart).reduce((min, start) =>
      start < min ? start : min,
    );

    if (date < firstStart) return APPLY_PERIOD.BEFORE;
    if (this.getOpenRound(date)) return APPLY_PERIOD.RECRUIT;
    return APPLY_PERIOD.AFTER;
  }

  /** 지금 접수를 받고 있는 회차. 접수 기간이 아니면 null. */
  static getOpenRound(date: Date = new Date()): RoundType | null {
    return (
      ROUND_KEYS.find((key) => {
        const { applyStart, applyEnd } = ROUND_SCHEDULE[key];
        return date >= applyStart && date <= applyEnd;
      }) ?? null
    );
  }

  /** 회차별 일정. 알 수 없는 값이면 정규 일정으로 보수적으로 처리한다. */
  static getScheduleFor(round: RoundType | null | undefined): RoundSchedule {
    return round && ROUND_SCHEDULE[round] ? ROUND_SCHEDULE[round] : ROUND_SCHEDULE.REGULAR;
  }
}
