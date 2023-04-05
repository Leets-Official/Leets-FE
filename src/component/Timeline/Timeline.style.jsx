import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const sectionContaier = css(
  mq({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: 'auto',

    color: 'white',
  })
);

export const contentContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const topContainer = css`
  display: flex;
  justify-content: space-between;

  width: 92%;
  height: auto;
`;

export const subjectStyle = css(
  mq({
    fontWeight: '500',
    fontSize: [54.7, 54.7, 78.7, 96],

    width: 'auto',
    height: 'content',

    color: 'white',
  })
);

export const bottomContainer = css(
  mq({
    display: 'flex',

    width: '92%',

    marginTop: [45.5, 45.6, 65.6, 80.0],
    paddingLeft: ['35%', 255.1, 367.1, 448.0],
  })
);

export const infoStyle = css(
  mq({
    display: 'flex',
    flexDirection: 'column',

    marginTop: [95.5, 95.7, 137.7, 168.0],
    marginLeft: [22.8, 22.8, 32.8, 40.0],
  })
);

export const dateStyle = css(
  mq({
    fontFamily: 'Pretendard',

    marginBottom: [70, 70, 101, 124.0],
  })
);

export const keyStyle = css(
  mq({
    fontWeight: '500',
    fontSize: [11.4, 11.4, 16.4, 20.0],

    color: '#cccccc',
    marginBottom: [4.5, 4.6, 6.6, 8.0],
  })
);

export const valueStyle = css(
  mq({
    fontWeight: '700',
    fontSize: [15.9, 15.9, 22.9, 28.0],

    color: '#cccccc',
  })
);
