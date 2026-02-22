'use client';

import { FormEvent, useState } from 'react';
import { Alert } from '@/utils';
import { postComments } from '@/api';
import { usePathname } from 'next/navigation';
import * as S from './CommentsForm.styled';

const MAX_LENGTH = 500;

const CommentsForm = () => {
  const [comment, setComment] = useState('');
  const applicationId = Number(usePathname().split('/').pop());

  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!comment) {
      Alert.error('메모를 입력해주세요.');
      return;
    }

    if (comment.length > MAX_LENGTH) {
      Alert.error(`메모는 ${MAX_LENGTH}자 이하로 입력해주세요.`);
      return;
    }

    await postComments({ content: comment, applicationId });
    window.location.reload();
  };

  return (
    <S.FormWrapper onSubmit={handleCommentSubmit}>
      <S.TextareaWrapper>
        <S.CommentTextarea
          placeholder="메모를 입력해 주세요. (최대 500자)"
          value={comment}
          onChange={(e) => setComment(e.target.value.slice(0, MAX_LENGTH))}
          maxLength={MAX_LENGTH}
        />
        <S.CharCount $isOver={comment.length >= MAX_LENGTH}>{comment.length} / {MAX_LENGTH}</S.CharCount>
      </S.TextareaWrapper>
      <S.AddCommentButton type="submit">메모 추가하기</S.AddCommentButton>
    </S.FormWrapper>
  );
};

export default CommentsForm;
