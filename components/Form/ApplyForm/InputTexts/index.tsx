import { DEV_INPUTS, DESING_INPUTS, PM_INPUTS } from '@/constants';
import { ApplicationInputProp } from '@/types';
import { motion } from 'framer-motion';
import * as S from './InputTexts.styled';

export const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const InputTexts = ({ position, input, setInput }: ApplicationInputProp) => {
  const LAYOUT = position === 'FRONTEND' || position === 'BACKEND' ? DEV_INPUTS : position === 'PM' ? PM_INPUTS : DESING_INPUTS;

  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants}>
      {LAYOUT.map(({ id, title, holderText, required, maxLength }) => (
        <S.ListStyle key={id} layoutId={title} variants={itemVariants}>
          <S.LabelStyle htmlFor={id}>
            <S.PStyle>{title}</S.PStyle>
            {required && <S.RequireStyle />}
          </S.LabelStyle>
          <S.InputStyle
            type="text"
            id={id}
            defaultValue={input[id]}
            onChange={(e) => setInput({ ...input, [id]: e.target.value })}
            placeholder={holderText}
            required={required}
            maxLength={maxLength}
          />
        </S.ListStyle>
      ))}
    </motion.div>
  );
};

export default InputTexts;
