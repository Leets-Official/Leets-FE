'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { postAdminLogin } from '@/api';
import { ACCESS_TOKEN, ADMIN, LOGIN_DEFAULT_VALUE } from '@/constants';
import { AdminLoginRequest } from '@/types';
import { setCookie } from 'cookies-next';
import { Alert } from '@/utils';
import useInputRef from './useInputRef';

const useLogin = () => {
  const router = useRouter();
  const { inputRef, changeHandler } = useInputRef<AdminLoginRequest>({
    defaultValues: LOGIN_DEFAULT_VALUE,
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, password } = inputRef.current;

    if (!id || !password) {
      Alert.error('아이디나 비밀번호를 입력해주세요.');
      return;
    }

    const {
      result: { accessToken },
    } = await postAdminLogin({ id, password });

    setCookie(ACCESS_TOKEN, accessToken);
    router.replace(ADMIN.HOME);
  };
  return { changeHandler, onSubmitHandler };
};

export default useLogin;
