/** @jsxImportSource @emotion/react */
import { listStyle, labelStyle, pStyle, requireStyle, inputStyle } from './InputText.style';

export default function InputText({ id, title, value, holderText, required, handleOnChange }) {
  return (
    <li css={listStyle}>
      <label htmlFor={id} css={labelStyle}>
        <p css={pStyle}>{title}</p>
        <div css={requireStyle} />
      </label>
      <input
        css={inputStyle}
        type="text"
        id={id}
        value={value}
        placeholder={holderText}
        onChange={handleOnChange}
        required={required}
      />
    </li>
  );
}
