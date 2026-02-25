export class Formatter {
  static convertStringToUTC(date: string) {
    return date ? `${date.split('+')[0]}Z` : '';
  }

  static normalizeDate(dateTime: string) {
    if (!dateTime) {
      return '-';
    }
    const dateObject = new Date(dateTime);
    const year = dateObject.getFullYear().toString().slice(-2);
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }

  /* 지원서 목록 면접 일시: 2025.08.04(월) */
  static formatInterviewDate(dateTime: string) {
    if (!dateTime) return '-';
    const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    const d = new Date(dateTime);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const dayOfWeek = DAYS[d.getDay()];
    return `${year}.${month}.${day}(${dayOfWeek})`;
  }

  /* 결과 페이지 면접 일시: 2026.03.12 (목) 22:11 */
  static formatInterviewDateTime(dateTime: string) {
    if (!dateTime) return '';
    const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    const d = new Date(dateTime);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const dayOfWeek = DAYS[d.getDay()];
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    return `${year}.${month}.${day} (${dayOfWeek}) ${hours}:${minutes}`;
  }
}
