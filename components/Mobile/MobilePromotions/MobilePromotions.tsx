import { MOBILE_PROMOTION_LAYOUT, PROMOTION_TYPE } from '@/constants/';
import { ThemeColor } from '@/types';
import * as S from './MobilePromotions.styled';
import MobileProject from './MobileProject';
import MobileStudy from './MobileStudy';
import MobileEntertainment from './MobileEntertainment';

const MobilePromotions = ({ color }: { color: ThemeColor }) => (
  <>
    {MOBILE_PROMOTION_LAYOUT.map(({ title, height, benefits }) => {
      const imageSrc = `/assets/image/Main/${color}/${title}.svg`;
      const projectImageSrc = `/assets/image/Project/${color}`;
      return (
        <S.SectionContainer key={title}>
          <S.ContentContainer>
            <S.TopContainer>
              <S.SubjectStyle>{title}</S.SubjectStyle>
              <S.ImgContainer>
                <S.ImgStyle src={imageSrc} alt={title} height={height} />
              </S.ImgContainer>
            </S.TopContainer>
            {title === PROMOTION_TYPE.PROJECT && (
              <S.BottomContainer>
                <MobileProject benefits={benefits} imageSrc={projectImageSrc} />
              </S.BottomContainer>
            )}
            {title === PROMOTION_TYPE.STUDY && (
              <S.BottomContainer>
                <MobileStudy benefits={benefits} />
              </S.BottomContainer>
            )}
            {title === PROMOTION_TYPE.ENTERTAINMENT && (
              <S.BottomContainer>
                <MobileEntertainment benefits={benefits} />
              </S.BottomContainer>
            )}
          </S.ContentContainer>
        </S.SectionContainer>
      );
    })}
  </>
);

export default MobilePromotions;
