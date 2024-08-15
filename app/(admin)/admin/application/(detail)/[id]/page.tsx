import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getApplicationDetail, getComments as getCommentsRequest } from '@/api';
import { ACCESS_TOKEN, ADMIN } from '@/constants';
import Application from '@/components/Admin/Application';
import * as S from './styled';

const getApplication = async (id: string) => {
  const accessToken = cookies().get(ACCESS_TOKEN)?.value!;

  try {
    const { result } = await getApplicationDetail({ id }, accessToken);
    return { application: result };
  } catch (err) {
    redirect(ADMIN.HOME);
  }
};

const getComments = async (applicationId: string) => {
  const accessToken = cookies().get(ACCESS_TOKEN)?.value!;

  try {
    const { result } = await getCommentsRequest({ applicationId, accessToken });
    return { comments: result };
  } catch (err) {
    redirect(ADMIN.HOME);
  }
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const [{ application }, { comments }] = await Promise.all([await getApplication(id), await getComments(id)]);

  return (
    <>
      <S.Title>지원서 상세</S.Title>
      <Application application={application} comments={comments} />
    </>
  );
};

export default Page;
