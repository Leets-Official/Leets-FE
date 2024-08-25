import Link from 'next/link';
import { getProject as getProjectDetail, getProjectList } from '@/api';
import Contributors from '@/components/Contributors';
import { redirect } from 'next/navigation';
import * as S from './styled';

export async function generateStaticParams() {
  const { result } = await getProjectList({ generation: 0 });
  const projectList = result.flat(2);

  return projectList.map((project) => ({
    id: String(project.portfolioId),
  }));
}

const getProject = async (portfolioId: string) => {
  try {
    const { result } = await getProjectDetail({ portfolioId });
    return result;
  } catch (error) {
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
          <S.LogoImage src={`/assets/image/Portfolio/${logoImgName}`} alt="logo-image" fill />
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
          <Link href={serviceUrl ?? '#'} target="_blank">
            <S.MainImage
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              src={`/assets/image/Portfolio/${mainImgName}`}
              alt="main-image"
              fill
            />
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
