'use client';

import Nav from '@/components/Admin/Nav';
import { useEffect, useState } from 'react';
import * as api from '@/api';
import axios from 'axios';
import { ApplicationDetailType } from '@/types';
import { APPLICATION_DETAIL_DEFAULT, ADMIN, MAIN_COLOR } from '@/constants';
import Loading from '@/components/Common/Loading';
import { useAppSelector, useAppDispatch } from '@/store';
import { useRouter } from 'next/navigation';
import { logout } from '@/store/adminSlice';
import * as S from './ApplicationDetail.styled';
import Application from './Application';

const ApplicationDetail = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [application, setApplication] = useState<ApplicationDetailType>(APPLICATION_DETAIL_DEFAULT);
  const { name } = useAppSelector((state) => state.admin);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const color = MAIN_COLOR;

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await api.getApplicationDetail({ id: Number(id) });
      if (!axios.isAxiosError(result)) {
        setApplication(result);
      }
      setIsLoading(false);
    };
    if (!name) {
      router.replace(ADMIN.LOGIN);
    }
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
