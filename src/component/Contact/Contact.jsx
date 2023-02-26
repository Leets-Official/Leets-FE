/** @jsxImportSource @emotion/react */
import {
  sectionContainer,
  contentContainer,
  hrStyle,
  headContainer,
  gridContainer,
  infoContainer,
  titleStyle,
  infoStyle,
} from './Contact.style';
import data from '../../utils/contactData';

export default function Contact() {
  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <hr css={hrStyle} />
        <div css={headContainer}>
          Contact
          <div css={gridContainer}>
            {Object.entries(data).map(([key, value]) => (
              <div key={key} css={infoContainer}>
                <div css={titleStyle}>{key}</div>
                <div css={infoStyle}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
