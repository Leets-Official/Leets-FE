import { Validator } from '@/utils';
import { ChangeEvent } from 'react';
import * as S from './InputText.styled';

type Input = {
  id: string;
  title: string;
  value: string;
  holderText: string;
  required: boolean;
  handleOnChange: (id: string, value: string) => void;
  maxLength: number;
};

const InputText = ({ id, title, value, holderText, required, handleOnChange, maxLength }: Input) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [eventId, eventValue] = [e.target.id, e.target.value];
    const newValue = Validator.isValidInput(eventId, eventValue);
    handleOnChange(eventId, newValue);
  };

  return (
    <S.ListStyle>
      <S.LabelStyle htmlFor={id}>
        <S.PStyle>{title}</S.PStyle>
        {required && <S.RequireStyle />}
      </S.LabelStyle>
      <S.InputStyle
        type="text"
        id={id}
        value={value}
        placeholder={holderText}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
      />
    </S.ListStyle>
  );
};

export default InputText;
