/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import initialInfo from '../../utils/formDatas';
import submitForm from '../../utils/submitForm';

import {
  formContainer,
  formStyle,
  headStyle,
  writeStyle,
  fieldsetStyle,
  ulStyle,
  listStyle,
  labelStyle,
  requireStyle,
  inputStyle,
  buttonContainer,
  buttonStyle,
  textareaStyle,
  pStyle,
} from './Forms.style';

export default function Forms() {
  const [info, setInfo] = useState(initialInfo);

  const clearStorage = () => {
    localStorage.clear();
    setInfo(initialInfo);
  };

  const loadStorage = () => {
    const tempInfo = JSON.parse(localStorage.getItem('tempInfo')) || initialInfo;
    setInfo(tempInfo);
  };

  const saveStorage = () => {
    localStorage.setItem('tempInfo', JSON.stringify(info));
  };

  const createUsers = async e => {
    e.preventDefault();
    await submitForm(info);
    clearStorage();

    alert(`${info.name}님 제출 완료되었습니다.`);
  };

  const handleOnChange = e => {
    const { id, value } = e.target;
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

            <li css={listStyle}>
              <label htmlFor="name" css={labelStyle}>
                <p css={pStyle}>이름</p>
                <div css={requireStyle} />
              </label>
              <input
                css={inputStyle}
                type="text"
                id="name"
                value={info.name}
                placeholder="이름을 입력하세요."
                onChange={handleOnChange}
                required
              />
            </li>
            <li css={listStyle}>
              <label htmlFor="SID" css={labelStyle}>
                <p css={pStyle}>학번</p>
                <div css={requireStyle} />
              </label>
              <input
                css={inputStyle}
                type="text"
                id="SID"
                value={info.SID}
                placeholder="학점을 입력하세요."
                onChange={handleOnChange}
                required
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="major" css={labelStyle}>
                <p css={pStyle}>학과</p>
                <div css={requireStyle} />
              </label>
              <input
                css={inputStyle}
                type="text"
                id="major"
                value={info.major}
                placeholder="학과를 입력하세요."
                onChange={handleOnChange}
                required
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="career" css={labelStyle}>
                <p css={pStyle}>희망 직무</p>
              </label>
              <input
                css={inputStyle}
                type="text"
                id="career"
                value={info.career}
                placeholder="희망 직무를 입력하세요. (필수 입력은 아닙니다.)"
                onChange={handleOnChange}
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="GPA" css={labelStyle}>
                <p css={pStyle}>학점</p>
                <div css={requireStyle} />
              </label>
              <input
                css={inputStyle}
                type="text"
                id="GPA"
                value={info.GPA}
                placeholder="학점을 입력하세요."
                onChange={handleOnChange}
                required
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="algorithm" css={labelStyle}>
                <p css={pStyle}>알고리즘</p>
              </label>
              <input
                css={inputStyle}
                type="text"
                id="algorithm"
                value={info.algorithm}
                placeholder="알고리즘 실력을 입력하세요. ex) 백준/릿코드/프로그래머스"
                onChange={handleOnChange}
                required
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="project" css={labelStyle}>
                <p css={pStyle}>프로젝트</p>
              </label>
              <input
                css={inputStyle}
                type="text"
                id="project"
                value={info.project}
                placeholder="프로젝트 경험을 입력하세요. ex) TODO 프로젝트 배포 1회/기여 내용 등"
                onChange={handleOnChange}
                required
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="link" css={labelStyle}>
                <p css={pStyle}>Github/Figma</p>
                <div css={requireStyle} />
              </label>
              <input
                css={inputStyle}
                type="text"
                id="link"
                value={info.link}
                placeholder="Github/Figma 주소를 적어주세요."
                onChange={handleOnChange}
                required
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="phone" css={labelStyle}>
                <p css={pStyle}>전화번호</p>
                <div css={requireStyle} />
              </label>
              <input
                css={inputStyle}
                type="text"
                id="phone"
                value={info.phone}
                placeholder="전화번호 적어주세요. 개인 정보는 안내 이외에는 사용되지 않습니다."
                onChange={handleOnChange}
                required
              />
            </li>

            <li css={listStyle}>
              <label htmlFor="goal" css={labelStyle}>
                <p css={pStyle}>우리 동아리에 들어와서 얻어가고 싶은 것은 무엇인가요?</p>
                <div css={requireStyle} />
              </label>
              <textarea
                css={textareaStyle}
                value={info.goal}
                id="goal"
                name="goal"
                placeholder="내용을 입력해주세요."
                onChange={handleOnChange}
                required
              />
            </li>
            <li css={listStyle}>
              <label htmlFor="completion" css={labelStyle}>
                <p css={pStyle}>무언가 열심히 해서 결과물을 낸 경험을 적어주세요.</p>
                <div css={requireStyle} />
              </label>
              <textarea
                css={textareaStyle}
                value={info.completion}
                id="completion"
                name="completion"
                placeholder="내용을 입력해주세요."
                onChange={handleOnChange}
                required
              />
            </li>
            <li css={listStyle}>
              <label htmlFor="fight" css={labelStyle}>
                <p css={pStyle}>갈등 해결 경험을 설명해주세요.</p>
                <div css={requireStyle} />
              </label>
              <textarea
                css={textareaStyle}
                value={info.fight}
                id="fight"
                name="fight"
                placeholder="내용을 입력해주세요."
                onChange={e => handleOnChange(e)}
                required
              />
            </li>
          </ul>
          <div css={buttonContainer}>
            <button
              type="button"
              css={buttonStyle}
              style={{ background: 'white', color: 'black' }}
              onClick={clearStorage}>
              로컬 스토리지 초기화
            </button>
            <button type="submit" css={buttonStyle}>
              제출하기
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
