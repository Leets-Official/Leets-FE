export type User = {
  name: string;
  email: string;
};

export type Applicant = User & {
  uid: string;
  sid: string;
  phone: string;
};
