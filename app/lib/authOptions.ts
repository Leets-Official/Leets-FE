import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { isAxiosError } from 'axios';
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
        console.log('[authOptions] account.provider:', account.provider, '/ has id_token:', !!account.id_token);
        console.log('[authOptions] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
        try {
          const loginRes = await postUserLogin({ idToken: account?.id_token! });
          console.log('[authOptions] postUserLogin result:', JSON.stringify(loginRes));
          if (isAxiosError(loginRes.result)) return token;

          const { accessToken } = loginRes.result;
          // eslint-disable-next-line no-param-reassign
          token.accessToken = accessToken;

          const meRes = await getApplicant({ accessToken });
          if (!isAxiosError(meRes.result)) {
            // eslint-disable-next-line no-param-reassign
            token.uid = meRes.result.uid;
            // eslint-disable-next-line no-param-reassign
            token.submitStatus = meRes.result.submitStatus;
          }
        } catch (err) {
          // server-side API call failed
          console.error('[authOptions] jwt callback error:', err);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        // eslint-disable-next-line no-param-reassign
        session.accessToken = token.accessToken;
      }
      if (token.submitStatus !== undefined) {
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
