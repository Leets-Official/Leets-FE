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
import datas from '../../utils/contactData';

export default function Contact() {
  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <hr css={hrStyle} />
        <div css={headContainer}>
          Contact
          <div css={gridContainer}>
            {datas.map(({ title, value, hasLink }) => (
              <div key={title} css={infoContainer}>
                <div css={titleStyle}>{title}</div>
                <div css={infoStyle}>
                  {hasLink ? (
                    <a href={value} target={value} css={linkStyle}>
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
