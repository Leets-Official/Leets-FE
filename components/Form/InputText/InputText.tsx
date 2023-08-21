import { DEV_INPUTS, DESING_INPUTS, MAIN_COLOR } from '@/constants';
import { ApplicationInputProp } from '@/types';
import * as S from './InputText.styled';

const InputText = ({ position, input, setInput }: ApplicationInputProp) => {
  const LAYOUT = position === 'DEV' ? DEV_INPUTS : DESING_INPUTS;
  const color = MAIN_COLOR;

  return (
    <>
      {LAYOUT.map(({ id, title, holderText, required, maxLength }) => (
        <S.ListStyle key={id}>
          <S.LabelStyle htmlFor={id}>
            <S.PStyle>{title}</S.PStyle>
            {required && <S.RequireStyle />}
          </S.LabelStyle>
          <S.InputStyle
            color={color}
            type="text"
            id={id}
            defaultValue={input[id]}
            onChange={(e) => setInput({ ...input, [id]: e.target.value })}
            placeholder={holderText}
            required={required}
            maxLength={maxLength}
          />
        </S.ListStyle>
      ))}
    </>
  );
};

export default InputText;
