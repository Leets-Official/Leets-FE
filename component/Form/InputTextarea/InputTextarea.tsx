import { DEV_TEXTAREAS, DESIGN_TEXTAREAS } from '@/constants';
import { ApplicationTextareaProp } from '@/types';
import * as S from './InputTextarea.styled';

const InputTextarea = ({ position, text, setText }: ApplicationTextareaProp) => {
  const LAYOUT = position === 'DEV' ? DEV_TEXTAREAS : DESIGN_TEXTAREAS;
  return (
    <>
      {LAYOUT.map(({ id, title, holderText, required, maxLength }) => (
        <S.ListStyle key={id}>
          <S.LabelStyle htmlFor={id}>
            <S.PStyle>{title}</S.PStyle>
            {required && <S.RequireStyle />}
          </S.LabelStyle>
          <S.TextareaStyle
            color="blue"
            id={id}
            value={text[id]}
            placeholder={holderText}
            onChange={(e) => setText({ ...text, [id]: e.target.value })}
            required={required}
            maxLength={maxLength}
          />
          <S.TextLengthContainer>
            {text[id]?.length ?? 0} / {maxLength}
          </S.TextLengthContainer>
        </S.ListStyle>
      ))}
    </>
  );
};

export default InputTextarea;
