import styled from 'styled-components';

export const AddCommentButton = styled.button`
  all: unset;

  font-size: 14px;
  font-weight: 600;

  width: 100%;
  height: 43px;

  text-align: center;
  background: #3685fc;
  cursor: pointer;
  color: white;
  margin-bottom: 9px;

  border-radius: 10px;
`;

export const CommentTextarea = styled.textarea`
  width: 100%;

  background: #cfe1fd;
  padding: 22px 24px;
  border-radius: 12px;
  resize: none;
  border: 1px solid #cfe1fd;

  overflow: hidden;

  &:focus {
    outline: none;
    border: 1px solid #3685fc;
  }
`;
