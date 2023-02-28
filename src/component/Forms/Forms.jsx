/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { initialInfo, inputs, textareas } from '../../utils/inputForms';
import submitForm from '../../utils/submitForm';
import TextInput from '../TextInput/TextInput';
import InputTextarea from '../InputTextarea/InputTextarea';
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
  const [info, setInfo] = useState(initialInfo);

  // const clearStorage = () => {
  //   localStorage.clear();
  //   setInfo(initialInfo);
  // };

  const loadStorage = () => {
    const tempInfo = JSON.parse(localStorage.getItem('tempInfo')) || initialInfo;
    setInfo(tempInfo);
  };

  const saveStorage = () => {
    localStorage.setItem('tempInfo', JSON.stringify(info));
  };

  const createUsers = async e => {
    e.preventDefault();
    await submitForm({ ...info, email });
    // clearStorage();

    alert(`${info.name}님 제출 완료되었습니다.`);
  };

  const handleOnChange = (id, value) => {
    setInfo({ ...info, [id]: value });
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
                value={info[id]}
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
                value={info[id]}
                title={title}
                holderText={holderText}
                required={required}
                handleOnChange={handleOnChange}
                maxLength={maxLength}
              />
            ))}
          </ul>
          <div css={buttonContainer}>
            {/* <button
              type="button"
              css={buttonStyle}
              style={{ background: 'white', color: 'black' }}
              onClick={clearStorage}>
              로컬 스토리지 초기화
            </button> */}
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
