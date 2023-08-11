'use client';

import Nav from '@/component/Nav';
import LoginButton from '@/component/LoginButton';
import { useAppSelector } from '@/store';
import Form from '@/component/Form';

const Apply = ({ color }: any) => {
  const { name, email } = useAppSelector((state) => state.user);

  return (
    <>
      <Nav color={color} />
      {name ? <Form color={color} email={email} /> : <LoginButton />}
    </>
  );
};

export default Apply;
