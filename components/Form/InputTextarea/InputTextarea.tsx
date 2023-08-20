import { DEV_TEXTAREAS, DESIGN_TEXTAREAS, MAIN_COLOR } from '@/constants';
import { ApplicationTextareaProp } from '@/types';
import { FormEvent } from 'react';
import * as S from './InputTextarea.styled';

const InputTextarea = ({ position, text, setText, application }: ApplicationTextareaProp) => {
  const LAYOUT = position === 'DEV' ? DEV_TEXTAREAS : DESIGN_TEXTAREAS;
  const color = MAIN_COLOR;

  const handleOnInput = (e: FormEvent<HTMLTextAreaElement>, maxLength: number) => {
    const inputValue = e.currentTarget.value;
    if (inputValue.length > maxLength) {
      e.currentTarget.value = inputValue.slice(0, maxLength);
    }
  };

  return (
    <>
      {LAYOUT.map(({ id, title, holderText, required, maxLength }) => (
        <S.ListStyle key={id}>
          <S.LabelStyle htmlFor={id}>
            <S.PStyle>{title}</S.PStyle>
            {required && <S.RequireStyle />}
          </S.LabelStyle>
          <S.TextareaStyle
            color={color}
            id={id}
            value={application[id] || text[id]}
            placeholder={holderText}
            onChange={(e) => setText({ ...text, [id]: e.target.value })}
            required={required}
            maxLength={maxLength}
            onInput={(e) => handleOnInput(e, maxLength)}
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
