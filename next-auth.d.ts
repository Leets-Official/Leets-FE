import NextAuth, { Account, DefaultSession, User } from 'next-auth';
import { SubmitStatus } from './types';

declare module 'next-auth' {
  interface Session {
    accessToken?: Account.accessToken;
    submitStatus?: SubmitStatus;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: Account.accessToken;
    submitStatus?: SubmitStatus;
  }
}
