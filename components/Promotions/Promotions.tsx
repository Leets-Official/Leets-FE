import { PROMOTION_LAYOUT, PROMOTION_TYPE } from '@/constants';
import { memo } from 'react';
import Image from 'next/image';
import Project from './Project';
import Study from './Study';
import Entertainment from './Entertainment';
import * as S from './Promotions.styled';

const Promotions = () => {
  return (
    <>
      {PROMOTION_LAYOUT.map(({ title, height, benefits }) => (
        <S.Section key={title}>
          <S.Content>
            <S.TopContainer>
              <S.Title initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}>
                {title}
                {title === PROMOTION_TYPE.PROJECT && (
                  <S.ProjectLink href="/project">
                    <Image src="/assets/image/Logo/Blue.svg" alt="logo" width={40} height={30} />
                    프로젝트 보러가기
                    <Image src="/assets/image/Promotion/Project/Arrow.svg" alt="logo" width={24} height={24} />
                  </S.ProjectLink>
                )}
              </S.Title>
              <S.ImageContainer $height={height}>
                <Image src={`/assets/image/Promotion/Main/${title}.svg`} alt={title} fill priority={false} />
              </S.ImageContainer>
            </S.TopContainer>
            <S.BottomContainer>
              {title === PROMOTION_TYPE.PROJECT && (
                <Project benefits={benefits} imageSrc="/assets/image/Promotion/Project" />
              )}
              {title === PROMOTION_TYPE.STUDY && <Study benefits={benefits} />}
              {title === PROMOTION_TYPE.ENTERTAINMENT && <Entertainment benefits={benefits} />}
            </S.BottomContainer>
          </S.Content>
        </S.Section>
      ))}
    </>
  );
};

export default memo(Promotions);
