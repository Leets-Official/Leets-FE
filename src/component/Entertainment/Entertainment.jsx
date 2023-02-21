/** @jsxImportSource @emotion/react */
import { entertainment } from '../../utils/datas';
import { contentContainer, balloon, textStyle } from './Entertainment.style';

export default function Entertainment() {
  return (
    <div css={contentContainer}>
      {entertainment.benefits.map((benefit, index) => (
        <div key={index} css={balloon(index)}>
          <div css={textStyle}>{benefit}</div>
        </div>
      ))}
    </div>
  );
}
