/** @jsxImportSource @emotion/react */
import { listStyle, labelStyle, pStyle, requireStyle, inputStyle } from './TextInput.style';
import validator from '../../utils/validator';

export default function InputText({ id, title, value, holderText, required, handleOnChange, maxLength }) {
  const onChange = e => {
    const [eventId, eventValue] = [e.target.id, e.target.value];
    const newValue = validator(eventId, eventValue);
    handleOnChange(eventId, newValue);
  };

  return (
    <li css={listStyle}>
      <label htmlFor={id} css={labelStyle}>
        <p css={pStyle}>{title}</p>
        {required && <div css={requireStyle} />}
      </label>
      <input
        css={inputStyle}
        type="text"
        id={id}
        value={value}
        placeholder={holderText}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
      />
    </li>
  );
}
