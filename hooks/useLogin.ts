'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { postAdminLogin, getAdmin } from '@/api';
import { ACCESS_TOKEN, ADMIN, LOGIN } from '@/constants';
import { isAxiosError } from 'axios';
import { AdminLoginRequest } from '@/types';
import { useAppDispatch } from '@/store';
import { login } from '@/store/adminSlice';
import { setCookie } from 'cookies-next';
import { useInputRef } from './useInputRef';

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { inputRef, changeHandler } = useInputRef<AdminLoginRequest>({
    defaultValues: LOGIN,
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, password } = inputRef.current;
    const { result } = await postAdminLogin({ id, password });

    if (!isAxiosError(result)) {
      const { result: admin } = await getAdmin();
      setCookie(ACCESS_TOKEN, result.accessToken);

      if (!isAxiosError(result)) {
        dispatch(login({ name: admin.name }));
        router.replace(ADMIN.HOME);
      }
    }
  };
  return { changeHandler, onSubmitHandler };
};

export { useLogin };
