'use client';

import { styled } from 'styled-components';

export const ApplicationContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;

  border-radius: 12px;
  margin-top: 15px;
`;

export const ApplicationTextContainer = styled.section`
  width: 78%;
`;

export const PersonalInformationContainer = styled.div`
  width: 100%;
  height: 520px;

  padding: 24px;
  border-radius: 12px;
  background: white;
  box-shadow: 0px 4px 30px 0px rgba(46, 45, 116, 0.05);
`;

export const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 600;

  color: #1d1f2c;
  margin-bottom: 14px;
`;

export const PersonalInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 14px;
`;

export const Info = styled.div`
  font-size: 14px;
`;

export const Key = styled.div`
  font-weight: 600;

  color: #000000;
  margin-bottom: 4px;
`;

export const Value = styled.div`
  width: 140px;
  height: 40px;

  display: flex;
  align-items: center;

  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e0e2e7;
  background: #f9f9fc;
`;

export const LongValue = styled.div`
  width: 90%;
  height: 40px;

  display: flex;
  align-items: center;

  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e0e2e7;
  background: #f9f9fc;
`;

export const LinkContainer = styled.div`
  width: 100%;

  padding: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 12px;
  background: white;
  box-shadow: 0px 4px 30px 0px rgba(46, 45, 116, 0.05);
`;

export const SelfIntroductionContainer = styled.div`
  width: 100%;
`;

export const SelfIntroduction = styled.div`
  width: 100%;
  height: 280px;

  background: white;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 30px 0px rgba(46, 45, 116, 0.05);

  white-space: pre-wrap;
`;

export const Text = styled.div`
  line-height: 1.5;

  width: 100%;
  height: 80%;

  display: flex;

  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e0e2e7;
  overflow: scroll;
  background: #f9f9fc;
`;

export const SideBar = styled.article`
  width: 20%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;
