'use client';

import Nav from '@/components/Admin/Nav';
import { useState, useEffect } from 'react';
import { ApplicationListType, KeyOf } from '@/types';
import * as api from '@/api';
import axios from 'axios';
import PositionFilter from '@/components/Admin/PositionFilter';
import { ADMIN, POSITION_MAP, MAIN_COLOR } from '@/constants';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Common/Loading';
import { useAppSelector, useAppDispatch } from '@/store';
import { logout } from '@/store/adminSlice';
import { useIsLoading } from '@/hooks/useIsLoading';
import * as S from './ApplicationList.styled';
import ListComponent from './ListComponent';

const ApplicationList = () => {
  const [applications, setApplications] = useState<ApplicationListType[]>([]);
  const [position, setPosition] = useState<KeyOf<typeof POSITION_MAP>>(POSITION_MAP.All);
  const isLoading = useIsLoading();
  const { name } = useAppSelector((state) => state.admin);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const color = MAIN_COLOR;

  const logoutHandler = () => {
    dispatch(logout());
    router.push(ADMIN.LOGIN);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await api.getApplicationList({ position });
      if (!axios.isAxiosError(result)) {
        setApplications(result);
      }
    };
    if (!name) {
      router.replace(ADMIN.LOGIN);
    }
    fetchData();
  }, [position]);

  if (isLoading) {
    return <Loading color={color} />;
  }
  return (
    <S.ApplicationListContainer>
      <S.ContentContainer>
        <S.NavContainer>
          <Nav />
          <S.LogoutContainer>
            <S.LogoutButton onClick={logoutHandler}>로그아웃</S.LogoutButton>
          </S.LogoutContainer>
        </S.NavContainer>
        <PositionFilter clickHandler={setPosition} type={position} />
        <S.Title>지원서 내역</S.Title>
        <ListComponent applications={applications} />
      </S.ContentContainer>
    </S.ApplicationListContainer>
  );
};

export default ApplicationList;
