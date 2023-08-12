'use client';

import ApplicationDetail from '@/component/Admin/ApplicationList/ApplicationDetail';
import { useSearchParams } from 'next/navigation';

const ApplicationDetailPage = () => {
  const id = useSearchParams().get('id') as string;

  return <ApplicationDetail id={id} />;
};

export default ApplicationDetailPage;
