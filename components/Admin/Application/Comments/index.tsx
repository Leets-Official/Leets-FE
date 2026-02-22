'use client';

import { CommentsResponse } from '@/types';
import * as S from './Comments.styled';
import CommentsForm from './CommentsForm';

const MemoList = ({ comments }: { comments: CommentsResponse }) => (
  <>
    {comments
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map(({ admin: { name }, content }, idx) => (
        <S.CommentContainer key={idx}>
          <S.CommentContent>{content}</S.CommentContent>
          <S.CommentAuthor>{name}</S.CommentAuthor>
        </S.CommentContainer>
      ))}
  </>
);

const Comments = ({ comments }: { comments: CommentsResponse }) => (
  <S.CommentsWrapper>
    <CommentsForm />
    <S.CommentsContainer>
      <MemoList comments={comments} />
    </S.CommentsContainer>
  </S.CommentsWrapper>
);

export default Comments;
