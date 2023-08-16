'use client';

import Nav from '@/component/Admin/Nav';
import { useEffect, useState } from 'react';
import * as api from '@/api';
import axios from 'axios';
import { ApplicationDetailType } from '@/types';
import { APPLICATION_DETAIL_DEFAULT, ADMIN } from '@/constants';

import Loading from '@/component/Common/Loading';
import { useAppSelector } from '@/store';
import { useRouter } from 'next/navigation';
import * as S from './ApplicationDetail.styled';
import Application from './Application';

const ApplicationDetail = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [application, setApplication] = useState<ApplicationDetailType>(APPLICATION_DETAIL_DEFAULT);

  const { name } = useAppSelector((state) => state.admin);
  const router = useRouter();

  if (!name) {
    router.push(ADMIN.LOGIN);
  }

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await api.getApplicationDetail({ id: Number(id) });
      if (!axios.isAxiosError(result)) {
        setApplication(result);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id, isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <Nav />
        <S.Title>지원서 상세</S.Title>
        <Application application={application} />
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default ApplicationDetail;
