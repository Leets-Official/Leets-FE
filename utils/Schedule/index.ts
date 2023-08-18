import { APPLY_DATE } from '@/constants';

type RecruitPeriod = 'CLOSE' | 'RECRUITING';

export class Schedule {
  static getKSTDate(date: Date) {
    const utcUnixTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    const diffKSTFromUTC = 9 * 60 * 60 * 1000;
    return new Date(utcUnixTime + diffKSTFromUTC);
  }

  static getCurrentPeriod(date: Date): RecruitPeriod {
    const kstDate = this.getKSTDate(date);
    const currentDate = date.getTime() === kstDate.getTime() ? date : kstDate;

    if (APPLY_DATE.START <= currentDate && currentDate <= APPLY_DATE.END) {
      return 'RECRUITING';
    }
    return 'CLOSE';
  }
}
