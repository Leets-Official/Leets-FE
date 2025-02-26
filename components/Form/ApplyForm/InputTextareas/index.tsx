'use client';

import { DEV_TEXTAREAS, DESIGN_TEXTAREAS, PM_TEXTAREAS } from '@/constants';
import { ApplicationTextareaProp } from '@/types';
import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import * as S from './InputTextareas.styled';
import { containerVariants, itemVariants } from '../InputTexts';

const InputTextarea = ({ position, text, setText }: ApplicationTextareaProp) => {
  const LAYOUT = position === 'DEV' ? DEV_TEXTAREAS : position === 'PM' ? PM_TEXTAREAS : DESIGN_TEXTAREAS;

  const handleOnInput = (e: FormEvent<HTMLTextAreaElement>, maxLength: number) => {
    const inputValue = e.currentTarget.value;
    if (inputValue.length > maxLength) {
      e.currentTarget.value = inputValue.slice(0, maxLength);
    }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants}>
      {LAYOUT.map(({ id, title, holderText, required, maxLength }) => (
        <S.ListStyle key={id} variants={itemVariants}>
          <S.LabelStyle htmlFor={id}>
            <S.PStyle>{title}</S.PStyle>
            {required && <S.RequireStyle />}
          </S.LabelStyle>
          <S.TextareaStyle
            id={id}
            value={text[id]}
            placeholder={holderText}
            onChange={(e) => setText({ ...text, [id]: e.target.value })}
            required={required}
            maxLength={maxLength}
            onInput={(e) => handleOnInput(e, maxLength)}
          />
          <S.TextLengthContainer>
            {text[id]?.length ?? 0} / {maxLength}
          </S.TextLengthContainer>
        </S.ListStyle>
      ))}
    </motion.div>
  );
};

export default InputTextarea;
