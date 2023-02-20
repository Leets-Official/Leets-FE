/** @jsxImportSource @emotion/react */
import { imgSrc, title, benefits } from './datas';
import {
  contentContainer,
  blockStyle,
  numberContainer,
  numberStyle,
  benefitContainer,
  textStyle,
  iconContainer,
  imgStyle,
} from './Project.style';

export default function Project() {
  return (
    <div css={contentContainer}>
      {benefits.map((benefit, index) => (
        <div css={blockStyle}>
          <div css={numberContainer}>
            <div css={numberStyle}>{`${0}${index + 1}`}</div>
          </div>
          <div css={benefitContainer}>
            <div css={textStyle}>{benefit}</div>
            <div css={iconContainer}>
              <img src={`${imgSrc}${index + 1}.png`} alt={title} css={imgStyle} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
