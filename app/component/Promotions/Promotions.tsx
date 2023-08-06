import promotionDatas from '@/utils/promotionDatas';
import Project from '../Project';
import Study from '../Study';
import Entertainment from '../Entertainment';
import * as S from './Promotions.style';

const Promotions = ({ color }: any) => (
  <>
    {promotionDatas.map(({ title, height, benefits }) => {
      const imageSrc = `../../assets/image/Main/${color}/${title}.svg`;
      const projectImageSrc = `../../assets/image/Project/${color}`;

      return (
        <S.Section key={title}>
          <S.Content>
            <S.TopContainer>
              <S.Subject>{title}</S.Subject>
              <S.Image src={imageSrc} alt={title} height={height} />
            </S.TopContainer>
            <S.BottomContainer>
              {title === 'Project' && <Project benefits={benefits} imageSrc={projectImageSrc} />}
              {title === 'Study & Networking' && <Study benefits={benefits} />}
              {title === 'Entertainment' && <Entertainment benefits={benefits} />}
            </S.BottomContainer>
          </S.Content>
        </S.Section>
      );
    })}
  </>
);

export default Promotions;
