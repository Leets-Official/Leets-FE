'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { isAxiosError } from 'axios';
import { getApplicationDetail, getComments as getCommentsRequest } from '@/api';
import { ACCESS_TOKEN, ADMIN } from '@/constants';
import { GetApplicationDetailResponse, CommentsResponse } from '@/types';
import Application from '@/components/Admin/Application';
import * as S from './styled';

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();
  const [application, setApplication] = useState<GetApplicationDetailResponse | null>(null);
  const [comments, setComments] = useState<CommentsResponse>([]);

  useEffect(() => {
    const accessToken = getCookie(ACCESS_TOKEN) as string;
    if (!accessToken) {
      router.replace(ADMIN.LOGIN);
      return;
    }

    const fetchData = async () => {
      const [appRes, commentsRes] = await Promise.all([
        getApplicationDetail({ id }, accessToken),
        getCommentsRequest({ applicationId: id, accessToken }),
      ]);

      if (isAxiosError(appRes.result) || isAxiosError(commentsRes.result)) {
        return;
      }

      setApplication(appRes.result as GetApplicationDetailResponse);
      setComments(commentsRes.result as CommentsResponse);
    };

    fetchData();
  }, [id]);

  if (!application) return null;

  return (
    <>
      <S.PageHeader>
        <S.BackLink href={ADMIN.HOME}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#153464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </S.BackLink>
        <S.Title>지원서 상세</S.Title>
      </S.PageHeader>
      <Application application={application} comments={comments} />
    </>
  );
};

export default Page;
