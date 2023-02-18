import { css } from '@emotion/react';

const breakpoints = [768, 1024];

const [mobile, desktop] = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const sectionContainer = css`
  font-family: 'DM Sans';
  width: 100%;
  height: 400px;

  ${mobile} {
    height: 800px;
  }

  ${desktop} {
    height: 1000px;
  }

  background: black;

  display: flex;
  justify-content: center;
  align-items: center;

  // border: 3px solid pink;
`;

export const contentContainer = css`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  // border: 3px solid red;
`;

export const infoContainer = css`
  width: 60%;
  height: 50vw;

  display: flex;
  flex-direction: column;
  justify-content: center;

  // border: 1px solid white;
`;

export const imgContainer = css`
  width: 40%;
  height: 50vw;

  // border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const subjectStyle = css`
  font-weight: 500;
  font-size: 24px;

  color: white;

  padding-left: 5vw;

  ${mobile} {
    font-size: 60px;
    // padding-left: 10vw;
  }

  ${desktop} {
    font-size: 96px;
    // padding-left: 10vw;
  }
`;

export const describeStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;

  color: white;

  margin-top: 10px;
  padding-left: 5vw;

  ${mobile} {
    font-size: 16px;

    margin-top: 15px;
    margin-bottom: 10px;
  }

  ${desktop} {
    font-size: 20px;

    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const ulStyle = css`
  padding: 0;
`;

export const listStyle = css`
  list-style: none;

  margin-bottom: 5px;
  font-size: 12px;

  ${mobile} {
    font-size: 16px;
    margin-bottom: 10px;
  }

  ${desktop} {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const imgStyle = css`
  // width: 150px;
  // height: 150px;

  // ${mobile} {
  //   width: 250px;
  //   height: 250px;
  // }

  // ${desktop} {
  //   width: 450px;
  //   height: 450px;
  // }

  width: 35vw;
  height: 35vw;

  // border: 1px solid white;
`;

export const hrStyle = css`
  border: 0;
  background: #29b69a;

  width: 100%;
`;
