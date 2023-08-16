'use client';

import Nav from '@/component/Nav';
import LoginButton from '@/component/LoginButton';
import Form from '@/component/Form';
import { useSession } from 'next-auth/react';
import Loading from '@/component/Common/Loading';
import { SESSION_STATUS } from '@/constants';
import * as S from './Apply.styled';

const color = 'blue';

const Apply = () => {
  const { status, data } = useSession();

  if (status === SESSION_STATUS.LOADING) {
    return <Loading />;
  }
  return (
    <S.ApplyContainer>
      <Nav color={color} />
      {data?.user ? <Form color={color} email={data.user.email as string} token={data.accessToken} /> : <LoginButton />}
    </S.ApplyContainer>
  );
};

export default Apply;
