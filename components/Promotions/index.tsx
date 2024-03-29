import { PROMOTION_LAYOUT, PROMOTION_TYPE } from '@/constants';
import { Suspense, memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import * as S from './Promotions.styled';

const Project = dynamic(() => import('./Project'));
const Study = dynamic(() => import('./Study'));
const Entertainment = dynamic(() => import('./Entertainment'));

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
                    <Image src="/assets/image/Project/Arrow.svg" alt="logo" width={24} height={24} />
                  </S.ProjectLink>
                )}
              </S.Title>
              <S.ImageContainer $height={height}>
                <Image src={`/assets/image/Main/${title}.svg`} alt={title} fill priority={false} />
              </S.ImageContainer>
            </S.TopContainer>
            <S.BottomContainer>
              <Suspense>
                {title === PROMOTION_TYPE.PROJECT && <Project benefits={benefits} />}
                {title === PROMOTION_TYPE.STUDY && <Study benefits={benefits} />}
                {title === PROMOTION_TYPE.ENTERTAINMENT && <Entertainment benefits={benefits} />}
              </Suspense>
            </S.BottomContainer>
          </S.Content>
        </S.Section>
      ))}
    </>
  );
};

export default memo(Promotions);
