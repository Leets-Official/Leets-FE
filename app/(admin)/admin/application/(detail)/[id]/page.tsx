import { cookies } from 'next/headers';
import { getApplicationDetail } from '@/api';
import { ACCESS_TOKEN, ADMIN } from '@/constants';
import Application from '@/components/Admin/Application';
import { redirect } from 'next/navigation';
import * as S from './styled';

const getApplication = async (id: string) => {
  const accessToken = cookies().get(ACCESS_TOKEN)?.value!;

  try {
    const { result } = await getApplicationDetail({ id }, accessToken);
    return { application: result };
  } catch (err) {
    return redirect(ADMIN.HOME);
  }
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { application } = await getApplication(id);

  return (
    <>
      <S.Title>지원서 상세</S.Title>
      <Application application={application} />
    </>
  );
};

export default Page;
