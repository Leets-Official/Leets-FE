import { KeyOf } from '@/types';
import { useRef, ChangeEvent, MutableRefObject } from 'react';

export type LoginInput = {
  id: string;
  password: string;
};

export function useInputRef() {
  const inputRef: MutableRefObject<LoginInput> = useRef<LoginInput>({ id: '', password: '' });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>, value: KeyOf<LoginInput>) => {
    inputRef.current[value] = e.target.value;
  };
  return { inputRef, changeHandler };
}
