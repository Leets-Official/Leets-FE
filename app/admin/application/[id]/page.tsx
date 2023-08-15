'use client';

import ApplicationDetail from '@/component/Admin/ApplicationList/ApplicationDetail';

const ApplicationDetailPage = ({ params }: { params: { id: number } }) => {
  return <ApplicationDetail id={params.id} />;
};

export default ApplicationDetailPage;
