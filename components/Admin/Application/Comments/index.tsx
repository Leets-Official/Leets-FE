import { CommentsResponse } from '@/types';
import * as S from './Comments.styled';
import CommentsForm from './CommentsForm';

const Comments = ({ comments }: { comments: CommentsResponse }) => {
  return (
    <S.CommentsContainer>
      <CommentsForm />
      {comments.map(({ admin: { name }, content }) => (
        <S.CommentContainer>
          <S.CommentContent>{content}</S.CommentContent>
          <S.CommentAuthor>{name}</S.CommentAuthor>
        </S.CommentContainer>
      ))}
    </S.CommentsContainer>
  );
};

export default Comments;
