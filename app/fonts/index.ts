// eslint-disable-next-line
import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const DM_SANS = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap' });

export const Pretendard = localFont({
  src: [
    {
      path: './Pretendard/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Pretendard/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Pretendard/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Pretendard/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});
