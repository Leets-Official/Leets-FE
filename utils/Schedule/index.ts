import { APPLY_DATE, APPLY_PERIOD } from '@/constants';
import { KeyOf } from '@/types';

export class Schedule {
  static getKSTDate(date: Date) {
    const utcUnixTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    const diffKSTFromUTC = 9 * 60 * 60 * 1000;
    return new Date(utcUnixTime + diffKSTFromUTC);
  }

  static getCurrentPeriod(date: Date = new Date()): KeyOf<typeof APPLY_PERIOD> {
    const kstDate = this.getKSTDate(date);
    const currentDate = date.getTime() === kstDate.getTime() ? date : kstDate;
    if (currentDate < APPLY_DATE.START) return APPLY_PERIOD.BEFORE;
    if (currentDate <= APPLY_DATE.END) return APPLY_PERIOD.RECRUIT;
    return APPLY_PERIOD.AFTER;
  }
}
