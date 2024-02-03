'use client';

import Nav from '@/components/Admin/Nav';
import { useEffect, useState } from 'react';
import { getApplicationDetail } from '@/api';
import { isAxiosError } from 'axios';
import { ApplicationDetailType } from '@/types';
import { APPLICATION_DETAIL_DEFAULT, ADMIN, MAIN_COLOR } from '@/constants';
import Loading from '@/components/Common/Loading';
import { useAppDispatch } from '@/store';
import { useRouter } from 'next/navigation';
import { logout } from '@/store/adminSlice';
import { useIsLoading } from '@/hooks/useIsLoading';
import Application from '@/components/Admin/ApplicationDetail/Application';
import * as S from './styled';

const ApplicationDetail = ({ params: { id } }: { params: { id: number } }) => {
  const isLoading = useIsLoading();
  const [application, setApplication] = useState<ApplicationDetailType>(APPLICATION_DETAIL_DEFAULT);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const color = MAIN_COLOR;

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await getApplicationDetail({ id: Number(id) });
      if (!isAxiosError(result)) {
        setApplication(result);
      }
    };
    fetchData();
  }, [id, isLoading]);

  const logoutHandler = () => {
    dispatch(logout());
    router.push(ADMIN.LOGIN);
  };

  if (isLoading) {
    return <Loading color={color} />;
  }
  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <S.NavContainer>
          <Nav />
          <S.LogoutContainer>
            <S.LogoutButton onClick={logoutHandler}>로그아웃</S.LogoutButton>
          </S.LogoutContainer>
        </S.NavContainer>
        <S.Title>지원서 상세</S.Title>
        <Application application={application} />
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default ApplicationDetail;
