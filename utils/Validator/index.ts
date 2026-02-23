export class Validator {
  static isValidInput(id: string, value: string) {
    if (id === 'name' || id === 'major') {
      return this.koreanValidator(value);
    }
    if (id === 'SID') {
      return this.numberValidator(value);
    }
    if (id === 'GPA') {
      return this.GPAValidator(value);
    }
    if (id === 'phone') {
      return this.phoneValidator(value);
    }
    return value;
  }

  static koreanValidator(value: string) {
    return value.replace(/[^ㄱ-하-ㅣ가-힣A-Za-z]/g, '');
  }

  static numberValidator(value: string) {
    return value.replace(/[^0-9]/g, '');
  }

  static GPAValidator(value: string) {
    return value.replace(/[^0-9.]/g, '');
  }

  static phoneValidator(value: string) {
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    return this.numberValidator(value);
  }

  static isUrl(value: string) {
    return /^https?:\/\//i.test(value);
  }
}
