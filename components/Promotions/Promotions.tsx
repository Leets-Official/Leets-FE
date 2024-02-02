import { PROMOTION_LAYOUT, PROMOTION_TYPE } from '@/constants';
import { ThemeColor } from '@/types';
import { memo } from 'react';
import Image from 'next/image';
import Project from './Project';
import Study from './Study';
import Entertainment from './Entertainment';
import * as S from './Promotions.styled';

const Promotions = ({ color }: { color: ThemeColor }) => {
  return (
    <>
      {PROMOTION_LAYOUT.map(({ title, height, benefits }) => {
        const imageSrc = `/assets/image/Main/${color}/${title}.svg`;
        const projectImageSrc = `/assets/image/Project/${color}`;

        return (
          <S.Section key={title}>
            <S.Content>
              <S.TopContainer>
                <S.Subject initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}>
                  {title}
                </S.Subject>
                <S.ImageContainer $height={height}>
                  <Image src={imageSrc} alt={title} fill />
                </S.ImageContainer>
              </S.TopContainer>
              <S.BottomContainer>
                {title === PROMOTION_TYPE.PROJECT && <Project benefits={benefits} imageSrc={projectImageSrc} />}
                {title === PROMOTION_TYPE.STUDY && <Study benefits={benefits} />}
                {title === PROMOTION_TYPE.ENTERTAINMENT && <Entertainment benefits={benefits} />}
              </S.BottomContainer>
            </S.Content>
          </S.Section>
        );
      })}
    </>
  );
};

export default memo(Promotions);
