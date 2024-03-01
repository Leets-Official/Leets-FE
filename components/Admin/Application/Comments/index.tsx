import { CommentsResponse } from '@/types';
import * as S from './Comments.styled';
import CommentsForm from './CommentsForm';

const Comments = ({ comments }: { comments: CommentsResponse }) => {
  return (
    <S.CommentsContainer>
      <CommentsForm />
      {comments.map(({ admin: { name }, content }, idx) => (
        <S.CommentContainer key={idx}>
          <S.CommentContent>{content}</S.CommentContent>
          <S.CommentAuthor>{name}</S.CommentAuthor>
        </S.CommentContainer>
      ))}
    </S.CommentsContainer>
  );
};

export default Comments;
