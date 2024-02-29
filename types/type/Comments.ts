export type CommentsResponse = Array<{
  content: string;
  createdAt: string;
  updatedAt: string;
  admin: {
    name: string;
  };
}>;

export type PostCommentsRequest = {
  applicationId: number;
  content: string;
};
