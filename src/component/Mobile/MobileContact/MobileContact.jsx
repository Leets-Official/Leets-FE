/** @jsxImportSource @emotion/react */
import data from '../../../utils/contactData';
import {
  sectionContainer,
  headContainer,
  flexContainer,
  infoContainer,
  titleStyle,
  infoStyle,
  linkStyle,
} from './MobileContact.style';

export default function MobileContact() {
  return (
    <section css={sectionContainer}>
      <div css={headContainer}>Contact</div>
      <div css={flexContainer}>
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
    </section>
  );
}
