import { KeyOf, ValueOf } from '@/types';
import { useRef, ChangeEvent, MutableRefObject } from 'react';

export type InputRefProp<T> = {
  defaultValues: T;
};

const useInputRef = <T>({ defaultValues }: InputRefProp<T>) => {
  const inputRef: MutableRefObject<T> = useRef<T>(defaultValues);
  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: KeyOf<T>) => {
    inputRef.current[value] = e.target.value as ValueOf<T>;
  };
  return { inputRef, changeHandler };
};

export { useInputRef };
