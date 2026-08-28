import { APPLY_DATE, APPLY_PERIOD } from '@/constants';
import { KeyOf } from '@/types';

export class Schedule {
  /**
   * APPLY_DATE 등 일정 상수는 '+09:00'이 명시된 절대 시각이고,
   * new Date()도 서버 TZ와 무관하게 같은 절대 시각이므로 그대로 비교한다.
   * (KST 보정을 덧붙이면 9시간이 이중으로 더해져 모든 경계가 앞당겨진다)
   */
  static getCurrentPeriod(date: Date = new Date()): KeyOf<typeof APPLY_PERIOD> {
    if (date < APPLY_DATE.START) return APPLY_PERIOD.BEFORE;
    if (date <= APPLY_DATE.END) return APPLY_PERIOD.RECRUIT;
    return APPLY_PERIOD.AFTER;
  }
}
