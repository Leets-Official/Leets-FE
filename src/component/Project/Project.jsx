/** @jsxImportSource @emotion/react */
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

export default function Project({ imageSrc, benefits }) {
  return (
    <div css={contentContainer}>
      {benefits.map((benefit, index) => (
        <div key={benefit} css={blockStyle}>
          <div css={numberContainer}>
            <div css={numberStyle}>{`${0}${index + 1}`}</div>
          </div>
          <div css={benefitContainer}>
            <div css={textStyle}>{benefit}</div>
            <div css={iconContainer}>
              <img src={`${imageSrc}/star${index + 1}.png`} alt={`title${index + 1}`} css={imgStyle} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
