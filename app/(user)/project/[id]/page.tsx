import { getProject as getProjectDetail } from '@/api';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Contributors from '@/components/Contributors';
import * as S from './styled';

const getProject = async (portfolioId: string) => {
  try {
    const { result } = await getProjectDetail({ portfolioId });
    return result;
  } catch (err) {
    // TODO: not-found 이동
    redirect('/project');
  }
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { summary, description, type, startDate, endDate, logoImgName, mainImgName, serviceUrl, contributors } =
    await getProject(id);

  return (
    <>
      <S.ContentContainer>
        <S.LogoContainer>
          <S.LogoImage src={`${process.env.NEXT_PUBLIC_API_URL}/images/${logoImgName}`} alt="logo-image" fill />
        </S.LogoContainer>
        <S.Summary>{summary}</S.Summary>
        <S.ShortInformation>
          <S.Information>
            <p>프로젝트 형태:</p> <p>{type}</p>
          </S.Information>
          <S.Information>
            <p>기간:</p>
            <p>
              {startDate} - {endDate}
            </p>
          </S.Information>
        </S.ShortInformation>
        <S.ImageContainer>
          <Link href={serviceUrl ?? '#'}>
            <S.MainImage src={`${process.env.NEXT_PUBLIC_API_URL}/images/${mainImgName}`} alt="main-image" fill />
          </Link>
        </S.ImageContainer>
        <S.Hr />
        <S.DescriptionContainer>
          <S.DescriptionTitle>프로젝트 설명</S.DescriptionTitle>
          <S.Description>{description}</S.Description>
        </S.DescriptionContainer>
        <S.Hr />
        <Contributors contributors={contributors} />
      </S.ContentContainer>
    </>
  );
};

export default Page;
