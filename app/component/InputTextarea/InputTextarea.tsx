/** @jsxImportSource @emotion/react */
import { listStyle, labelStyle, pStyle, requireStyle, textareaStyle } from './InputTextarea.styled';

export default function InputTextarea({ id, title, value, holderText, required, handleOnChange, maxLength }) {
  return (
    <li css={listStyle}>
      <label htmlFor={id} css={labelStyle}>
        <p css={pStyle}>{title}</p>
        {required && <div css={requireStyle} />}
      </label>
      <textarea
        css={textareaStyle}
        value={value}
        id={id}
        placeholder={holderText}
        onChange={({ target }) => handleOnChange(target.id, target.value)}
        required={required}
        maxLength={maxLength}
      />
    </li>
  );
}
