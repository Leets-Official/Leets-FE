'use client';

import Nav from '@/component/Nav';
import Forms from '@/component/Form';
import LoginButton from '@/component/LoginButton';
import { useAppSelector } from '@/store';

const Apply = ({ color }: any) => {
  const { name, email } = useAppSelector((state) => state.user);

  return (
    <>
      <Nav color={color} />
      {name ? <Forms color={color} email={email} /> : <LoginButton />}
    </>
  );
};

export default Apply;
