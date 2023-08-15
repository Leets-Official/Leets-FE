export class Formatter {
  static convertStringToUTC(date: string) {
    if (date === null) {
      return '';
    }
    return `${date.split('+')[0]}Z`;
  }

  static formatDate(dateTime: string) {
    const dateObject = new Date(dateTime);
    const year = dateObject.getFullYear().toString().slice(-2);
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    const longDateTime = `${year}.${month}.${day} ${hours}:${minutes}`;
    const shortDateTime = `${year}.${month}.${day}`;
    return { longDateTime, shortDateTime };
  }
}
