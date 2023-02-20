/** @jsxImportSource @emotion/react */

// import {
//   sectionContainer,
//   contentContainer,
//   infoContainer,
//   imgContainer,
//   subjectStyle,
//   describeStyle,
//   ulStyle,
//   listStyle,
//   imgStyle,
//   hrStyle,
// } from './PromotionCard.style';

// return (
//   <section css={sectionContainer}>
//     <div css={contentContainer}>
//       <div css={infoContainer}>
//         <div css={subjectStyle}>{title}</div>
//         <div css={describeStyle}>
//           <ul css={ulStyle}>
//             {benefits.map((benefit, index) => (
//               <>
//                 <li key={index} css={listStyle}>
//                   {benefit}
//                 </li>
//                 <hr css={hrStyle} />
//               </>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div css={imgContainer}>
//         <img src={imageSrc} alt={title} css={imgStyle} />
//       </div>
//     </div>
//   </section>
// );

import {
  sectionContainer,
  contentContainer,
  topContainer,
  subjectStyle,
  imgStyle,
  bottomContainer,
} from './PromotionCard.style';
import Project from '../Project/Project';
import Study from '../Study/Study';
import Entertainment from '../Entertainment/Entertainment';

export default function PromotionCard({ imageSrc, height, title, benefits }) {
  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <div css={topContainer}>
          <div css={subjectStyle}>{title}</div>
          <img src={imageSrc} alt={title} css={imgStyle(height)} />
        </div>
        <div css={bottomContainer}>
          {title === 'Project' && <Project benefits={benefits} />}
          {title === 'Study & Networking' && <Study benefits={benefits} />}
          {title === 'Entertainment' && <Entertainment benefits={benefits} />}
        </div>
      </div>
    </section>
  );
}
