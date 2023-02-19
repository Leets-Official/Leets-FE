import { css } from '@emotion/react';

import { tablet, desktop, mobile } from '../../utils/viewports';

// export const sectionContainer = css`
//   font-family: 'DM Sans';
//   width: 100%;
//   height: 400px;

//   ${tablet} {
//     height: 700px;
//   }

//   ${desktop} {
//     height: 1000px;
//   }

//   background: black;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const contentContainer = css`
//   width: 100%;
//   height: 80%;

//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   // border: 3px solid red;
// `;

// export const infoContainer = css`
//   width: 50%;
//   height: 50vw;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   // border: 1px solid white;
// `;

// export const imgContainer = css`
//   width: 40%;
//   height: 50vw;

//   // border: 1px solid white;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   ${mobile} {
//     align-items: start;
//     height: 70vw;
//   }

//   ${tablet} {
//     align-items: start;
//   }

//   ${middle} {
//     align-items: center;
//   }

//   ${desktop} {
//     align-items: center;
//   }
// `;

// export const subjectStyle = css`
// font-weight: 500;
// font-size: 38px;
// color: white;

// // border: 1px solid white;

// padding-left: 5vw;

// overflow: visible;

// ${mobile} {
//   font-size: 28px;
// }

// ${tablet} {
//   font-size: 64px;
// }

// ${desktop} {
//   font-size: 96px;
// }
// `;

// export const describeStyle = css`
//   font-family: 'Pretendard';
//   font-weight: 500;
//   font-size: 12px;

//   color: white;

//   margin-top: 10px;
//   padding-left: 5vw;

//   ${tablet} {
//     font-size: 16px;

//     margin-top: 15px;
//     margin-bottom: 10px;
//   }

//   ${desktop} {
//     font-size: 20px;

//     margin-top: 10px;
//     margin-bottom: 5px;
//   }
// `;

// export const ulStyle = css`
//   padding: 0;
// `;

// export const listStyle = css`
//   list-style: none;

//   margin-bottom: 5px;
//   font-size: 12px;

//   ${tablet} {
//     font-size: 16px;
//     margin-bottom: 10px;
//   }

//   ${desktop} {
//     font-size: 18px;
//     margin-top: 10px;
//     margin-bottom: 5px;
//   }
// `;

// export const imgStyle = css`
//   // width: 150px;
//   // height: 150px;

//   // ${tablet} {
//   //   width: 250px;
//   //   height: 250px;
//   // }

//   // ${desktop} {
//   //   width: 450px;
//   //   height: 450px;
//   // }

//   width: 35vw;
//   height: 35vw;

//   // border: 1px solid white;
// `;

// export const hrStyle = css`
//   border: 0;
//   background: #29b69a;

//   width: 100%;
// `;

export const sectionContainer = css`
  font-family: 'DM Sans';
  width: 100%;
  height: 600px;

  ${tablet} {
    height: 900px;
  }

  ${desktop} {
    height: 1200px;
  }

  background: black;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  border: 1px solid white;
`;

export const contentContainer = css`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  border: 1px solid red;
`;

export const topContainer = css`
  width: 90%;
  border: 1px solid white;
  height: auto;

  display: flex;
  justify-content: space-between;
`;

export const subjectStyle = css`
  font-weight: 500;
  font-size: 6vw;
  color: white;
  width: 60%;
  height: content;

  border: 1px solid red;

  padding-left: 5vw;

  overflow: visible;

  ${mobile} {
    font-size: 6vw;
  }

  ${tablet} {
    font-size: 6vw;
  }

  ${desktop} {
    font-size: 6vw;
  }
`;

export const imgStyle = css`
  width: 27vw;
  height: 27vw;

  border: 1px solid blue;
`;
export const bottomContainer = css`
  width: 90%;
  height: 27vw;

  border: 1px solid white;
`;
