'use client';

import { FormEvent, useState } from 'react';
import { Alert } from '@/utils';
import { postComments } from '@/api';
import { isAxiosError } from 'axios';
import { usePathname } from 'next/navigation';
import * as S from './CommentsForm.styled';

const CommentsForm = () => {
  const [comment, setComment] = useState('');
  const applicationId = Number(usePathname().split('/').pop());

  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!comment) {
      Alert.error('댓글을 입력해주세요.');
      return;
    }

    const { result } = await postComments({ content: comment, applicationId });

    if (isAxiosError(result)) {
      Alert.error('댓글 작성에 실패했습니다.');
      return;
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <S.AddCommentButton type="submit">메모 추가하기</S.AddCommentButton>
      <S.CommentTextarea
        placeholder="댓글을 입력해주세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </form>
  );
};

export default CommentsForm;
