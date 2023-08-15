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
        return { ...session, accessToken: token.accessToken };
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        const {
          result: { accessToken },
        } = await api.postSignIn({ idToken: account.id_token! });
        // eslint-disable-next-line no-param-reassign
        token.accessToken = accessToken;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
