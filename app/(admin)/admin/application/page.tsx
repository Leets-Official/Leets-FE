'use client';

import Nav from '@/components/Admin/Nav';
import { useState, useEffect } from 'react';
import { ApplicationType, KeyOf } from '@/types';
import { getApplicationList } from '@/api';
import axios from 'axios';
import PositionFilter from '@/components/Admin/PositionFilter';
import { ADMIN, MAIN_COLOR, POSITION_FILTER_MAP } from '@/constants';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Common/Loading';
import { useAppDispatch } from '@/store';
import { logout } from '@/store/adminSlice';
import { useIsLoading } from '@/hooks/useIsLoading';
import ApplicationList from '@/components/Admin/ApplicationList';
import * as S from './styled';

const Application = () => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [position, setPosition] = useState<KeyOf<typeof POSITION_FILTER_MAP>>(POSITION_FILTER_MAP.All);
  const isLoading = useIsLoading();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const color = MAIN_COLOR;

  const handleLogout = () => {
    dispatch(logout());
    router.push(ADMIN.LOGIN);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await getApplicationList({ position });
      if (!axios.isAxiosError(result)) {
        setApplications(result);
      }
    };
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
            <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
          </S.LogoutContainer>
        </S.NavContainer>
        <PositionFilter clickHandler={setPosition} type={position} />
        <S.Title>지원서 내역</S.Title>
        <ApplicationList applications={applications} />
      </S.ContentContainer>
    </S.ApplicationListContainer>
  );
};

export default Application;
