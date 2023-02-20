/** @jsxImportSource @emotion/react */
import { study } from '../../utils/datas';
import {
  contentContainer,
  gridContainer,
  blockStyle,
  numberStyle,
  benefitContainer,
  textStyle,
  flexContainer,
  flexBlockStyle,
} from './Study.style';

export default function Study() {
  return (
    <div css={contentContainer}>
      <div css={gridContainer}>
        {study.benefits.slice(0, 3).map((benefit, index) => (
          <div css={blockStyle}>
            <div css={benefitContainer}>
              <div css={numberStyle}>{`${0}${index + 1}`}</div>
              <div css={textStyle}>{benefit}</div>
            </div>
          </div>
        ))}
      </div>
      <div css={flexContainer}>
        {study.benefits.slice(3).map((benefit, index) => (
          <div css={flexBlockStyle}>
            <div css={benefitContainer}>
              <div css={numberStyle}>{`${0}${index + 4}`}</div>
              <div css={textStyle}>{benefit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
