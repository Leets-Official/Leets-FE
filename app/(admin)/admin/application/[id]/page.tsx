import { getApplicationDetail } from '@/api';
import { ADMIN } from '@/constants';
import Application from '@/components/Admin/Application';
import { redirect } from 'next/navigation';
import * as S from './styled';

const getApplication = async (id: string) => {
  try {
    const { result } = await getApplicationDetail({ id });
    return { application: result };
  } catch (err) {
    return redirect(ADMIN.HOME);
  }
};

const ApplicationDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const { application } = await getApplication(id);

  return (
    <>
      <S.Title>지원서 상세</S.Title>
      <Application application={application} />
    </>
  );
};

export default ApplicationDetail;
