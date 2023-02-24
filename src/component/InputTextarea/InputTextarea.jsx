/** @jsxImportSource @emotion/react */
import { listStyle, labelStyle, pStyle, requireStyle, textareaStyle } from './InputTextarea.style';

export default function InputText({ id, title, value, holderText, required, handleOnChange }) {
  return (
    <li css={listStyle}>
      <label htmlFor={id} css={labelStyle}>
        <p css={pStyle}>{title}</p>
        <div css={requireStyle} />
      </label>
      <textarea
        css={textareaStyle}
        value={value}
        id={id}
        placeholder={holderText}
        onChange={handleOnChange}
        required={required}
      />
    </li>
  );
}
