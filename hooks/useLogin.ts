import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import * as api from '@/api';
import { ACCESS_TOKEN, ADMIN, LOGIN } from '@/constants';
import axios from 'axios';
import { LocalStorage } from '@/utils';
import { AdminLoginRequest } from '@/types';
import { useInputRef } from './useInputRef';

const useLogin = () => {
  const router = useRouter();
  const { inputRef, changeHandler } = useInputRef<AdminLoginRequest>({
    defaultValues: LOGIN,
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, password } = inputRef.current;
    const { result } = await api.postAdminLogin({ id, password });
    if (axios.isAxiosError(result)) {
      return;
    }
    LocalStorage.setItem(ACCESS_TOKEN, result.accessToken);
    router.replace(ADMIN.HOME);
  };
  return { inputRef, changeHandler, onSubmitHandler };
};

export { useLogin };
