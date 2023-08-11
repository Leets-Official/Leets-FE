export class Formatter {
  static convertStringToUTC(date: string) {
    if (date === null) {
      return '';
    }
    return `${date.split('+')[0]}Z`;
  }
}
