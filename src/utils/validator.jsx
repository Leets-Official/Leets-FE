const koreanValidator = value => value.replace(/[^ㄱ-하-ㅣ가-힣]/g, '');
const numberValidator = value => value.replace(/[^0-9]/g, '');
const GPAValidator = value => value.replace(/[^0-9.]/g, '');
const phoneValidator = value => {
  if (value.length === 11) {
    return value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
  return numberValidator(value);
};

export default function validator(id, value) {
  if (id === 'name' || id === 'major' || id === 'career') {
    return koreanValidator(value);
  }
  if (id === 'SID') {
    return numberValidator(value);
  }
  if (id === 'GPA') {
    return GPAValidator(value);
  }
  if (id === 'phone') {
    return phoneValidator(value);
  }
  return value;
}
