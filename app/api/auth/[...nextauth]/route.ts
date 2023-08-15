import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import * as api from '@/api';

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
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token.accessToken) {
        // eslint-disable-next-line no-param-reassign
        session.accessToken = token.accessToken;
      }
      if (token.submitStatus) {
        // eslint-disable-next-line no-param-reassign
        session.submitStatus = token.submitStatus;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        const {
          result: { accessToken },
        } = await api.postUserLogin({ idToken: account.id_token! });
        const {
          result: { submitStatus },
        } = await api.getApplicant({ accessToken });
        // eslint-disable-next-line no-param-reassign
        token.submitStatus = submitStatus;
        // eslint-disable-next-line no-param-reassign
        token.accessToken = accessToken;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
