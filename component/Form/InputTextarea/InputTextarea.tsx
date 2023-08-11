import * as S from './InputTextarea.styled';

type Textarea = {
  id: string;
  title: string;
  value: string;
  holderText: string;
  required: boolean;
  handleOnChange: (id: string, value: string) => void;
  maxLength: number;
};

const InputTextarea = ({ id, title, value, holderText, required, handleOnChange, maxLength }: Textarea) => {
  return (
    <S.ListStyle>
      <S.LabelStyle htmlFor={id}>
        <S.PStyle>{title}</S.PStyle>
        {required && <S.RequireStyle />}
      </S.LabelStyle>
      <S.TextareaStyle
        value={value}
        id={id}
        placeholder={holderText}
        onChange={({ target }) => handleOnChange(target.id, target.value)}
        required={required}
        maxLength={maxLength}
      />
    </S.ListStyle>
  );
};

export default InputTextarea;
