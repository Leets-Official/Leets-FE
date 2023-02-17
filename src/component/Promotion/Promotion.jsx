/** @jsxImportSource @emotion/react */

import ProjectImage from '../../assets/svg/ProjectImage/ProjectImage';
import { sectionContainer, subjectStyle, describeStyle, textStyle } from './Promotion.style';

export default function Promotion() {
  return (
    <secion css={sectionContainer}>
      <div css={subjectStyle}>Project</div>

      <ProjectImage />

      <div css={describeStyle}>
        <p css={textStyle}>
          7주간의 프로젝트 경험을 통해 분야에 대한 고민을 해결할 수 있어요. (프로젝트 이것저것 해보면서 확인)
        </p>
        <p css={textStyle}>다양한 분야(웹, 앱)의 프로젝트를 경험하며 진로를 구체화할 수 있어요.</p>
        <p css={textStyle}>프로젝트 배포를 통해 실무 경험을 쌓을 수 있어요.</p>
        <p css={textStyle}>디자이너라면 개발자와의 협업할 수 있어요.</p>
        <p css={textStyle}>개발자라면 디자이너와 협업할 수 있어요.</p>
        <p css={textStyle}>협업 ⇒ 협업을 통해 실무 경험을 쌓을 수 있어요.</p>
      </div>
    </secion>
  );
}
