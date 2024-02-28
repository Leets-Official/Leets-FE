import { DEV_INPUTS, DESING_INPUTS } from '@/constants';
import { ApplicationInputProp } from '@/types';
import * as S from './InputTexts.styled';

const InputTexts = ({ position, input, setInput }: ApplicationInputProp) => {
  const LAYOUT = position === 'DEV' ? DEV_INPUTS : DESING_INPUTS;

  return (
    <>
      {LAYOUT.map(({ id, title, holderText, required, maxLength }) => (
        <S.ListStyle key={id}>
          <S.LabelStyle htmlFor={id}>
            <S.PStyle>{title}</S.PStyle>
            {required && <S.RequireStyle />}
          </S.LabelStyle>
          <S.InputStyle
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

export default InputTexts;
