import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { isAxiosError } from 'axios';
import { postUserLogin, getApplicant } from '@/api';

/**
 * submitStatus는 로그인 시점에만 채워지므로, 서버에서 상태가 바뀌어도
 * 기존 JWT가 낡은 값을 계속 들고 있게 된다. 아래 주기로 /user/me를 다시 읽어 갱신한다.
 */
const SUBMIT_STATUS_TTL = 5 * 60 * 1000;

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
        return { ...token, submitStatus: session.submitStatus, submitStatusFetchedAt: Date.now() };
      }
      if (account) {
        console.log('[authOptions] account.provider:', account.provider, '/ has id_token:', !!account.id_token);
        console.log('[authOptions] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
        try {
          const loginRes = await postUserLogin({ idToken: account?.id_token! });
          console.log('[authOptions] postUserLogin result:', JSON.stringify(loginRes));
          if (isAxiosError(loginRes.result)) {
            console.error('[authOptions] postUserLogin failed:', loginRes.result.response?.status, loginRes.result.message);
            return token;
          }

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
          // eslint-disable-next-line no-param-reassign
          token.submitStatusFetchedAt = Date.now();
        } catch (err) {
          // server-side API call failed
          console.error('[authOptions] jwt callback error:', err);
        }
        return token;
      }

      // 로그인 이후에도 TTL마다 서버 상태를 다시 반영한다.
      if (token.accessToken && Date.now() - (token.submitStatusFetchedAt ?? 0) > SUBMIT_STATUS_TTL) {
        try {
          const meRes = await getApplicant({ accessToken: token.accessToken });
          if (!isAxiosError(meRes.result)) {
            // eslint-disable-next-line no-param-reassign
            token.submitStatus = meRes.result.submitStatus;
          }
        } catch (err) {
          // 조회 실패 시 기존 submitStatus를 유지한다 (덮어쓰지 않음)
          console.error('[authOptions] submitStatus refresh failed:', err);
        }
        // 성공/실패 무관하게 갱신 시각을 찍어 매 요청 재시도를 막는다.
        // eslint-disable-next-line no-param-reassign
        token.submitStatusFetchedAt = Date.now();
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
