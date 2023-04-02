/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialInfo, inputs, textareas } from '../../utils/inputForms';
import submitForm from '../../utils/submitForm';
import TextInput from '../TextInput/TextInput';
import InputTextarea from '../InputTextarea/InputTextarea';
import { setForm } from '../../features/formSlice';
import {
  formContainer,
  formStyle,
  headStyle,
  writeStyle,
  fieldsetStyle,
  ulStyle,
  buttonContainer,
  buttonStyle,
  guidStyle,
} from './Forms.style';

export default function Forms({ color, email }) {
  const dispatch = useDispatch();
  const formSlice = useSelector(state => state.form);

  const loadStorage = () => {
    const tempInfo = JSON.parse(localStorage.getItem('tempInfo')) || initialInfo;
    dispatch(setForm(tempInfo));
  };

  const saveStorage = () => {
    localStorage.setItem('tempInfo', JSON.stringify(formSlice));
  };

  const createUsers = async e => {
    e.preventDefault();
    await submitForm({ ...formSlice, email });
    alert(`${formSlice.name}님 제출 완료되었습니다.`);
  };

  const handleOnChange = (id, value) => {
    dispatch(setForm({ id, value }));
    saveStorage();
  };

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <div css={formContainer}>
      <form css={formStyle} onSubmit={createUsers}>
        <fieldset css={fieldsetStyle}>
          <ul css={ulStyle}>
            <div css={headStyle}>
              Join us!
              <div css={writeStyle}>지원서 작성하기</div>
            </div>

            {inputs.map(({ id, title, holderText, required, maxLength }) => (
              <TextInput
                key={id}
                id={id}
                value={formSlice[id]}
                title={title}
                holderText={holderText}
                required={required}
                handleOnChange={handleOnChange}
                maxLength={maxLength}
              />
            ))}

            {textareas.map(({ id, title, holderText, required, maxLength }) => (
              <InputTextarea
                key={id}
                id={id}
                value={formSlice[id]}
                title={title}
                holderText={holderText}
                required={required}
                handleOnChange={handleOnChange}
                maxLength={maxLength}
              />
            ))}
          </ul>
          <div css={buttonContainer}>
            <button type="submit" css={buttonStyle(color)}>
              제출하기
            </button>
          </div>
          <div css={guidStyle}>여러 번 제출 시 최종 제출 자료만 인정됩니다.</div>
        </fieldset>
      </form>
    </div>
  );
}
