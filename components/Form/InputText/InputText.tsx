import { DEV_INPUTS, DESING_INPUTS, MAIN_COLOR, POSITION_ENGLISH_MAP } from '@/constants';
import { ApplicationInputProp } from '@/types';
import * as S from './InputText.styled';

const InputText = ({ position, changeHandler, application }: ApplicationInputProp) => {
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
            defaultValue={application[id] || ''}
            onChange={(e) => changeHandler(e, id)}
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
