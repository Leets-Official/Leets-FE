import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { postUserLogin, getApplicant } from '@/api';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
  pages: {
    error: '/',
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, submitStatus: session.submitStatus };
      }
      if (account) {
        const {
          result: { accessToken },
        } = await postUserLogin({ idToken: account?.id_token! });
        const {
          result: { uid, submitStatus },
        } = await getApplicant({ accessToken });
        // eslint-disable-next-line no-param-reassign
        token.uid = uid;
        // eslint-disable-next-line no-param-reassign
        token.submitStatus = submitStatus;
        // eslint-disable-next-line no-param-reassign
        token.accessToken = accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        // eslint-disable-next-line no-param-reassign
        session.accessToken = token.accessToken;
      }
      if (token.submitStatus) {
        // eslint-disable-next-line no-param-reassign
        session.submitStatus = token.submitStatus;
      }
      if (token.uid) {
        // eslint-disable-next-line no-param-reassign
        session.uid = token.uid;
      }
      return session;
    },
  },
};
