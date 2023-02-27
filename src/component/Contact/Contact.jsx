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
  linkStyle,
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
                {key === 'Github' || key === 'Open Kakao' ? (
                  <div css={infoStyle}>
                    <a href={value} target={value} css={linkStyle}>
                      {value}
                    </a>
                  </div>
                ) : (
                  <div css={infoStyle}>{value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
