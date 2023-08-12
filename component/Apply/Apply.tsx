'use client';

import Nav from '@/component/Nav';
import LoginButton from '@/component/LoginButton';
import { useAppSelector } from '@/store';
import Form from '@/component/Form';
import * as S from './Apply.styled';

const Apply = () => {
  const { name, email } = useAppSelector((state) => state.user);
  const color = 'blue';

  return (
    <S.ApplyContainer>
      <Nav color={color} />
      {name ? <Form color={color} email={email} /> : <LoginButton />}
    </S.ApplyContainer>
  );
};

export default Apply;
