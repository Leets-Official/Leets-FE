/** @jsxImportSource @emotion/react */
import { project } from '../../utils/datas';
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
      {project.benefits.map((benefit, index) => (
        <div css={blockStyle}>
          <div css={numberContainer}>
            <div css={numberStyle}>{`${0}${index + 1}`}</div>
          </div>
          <div css={benefitContainer}>
            <div css={textStyle}>{benefit}</div>
            <div css={iconContainer}>
              <img src={`${project.imgSrc}${index + 1}.png`} alt={project.title} css={imgStyle} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
