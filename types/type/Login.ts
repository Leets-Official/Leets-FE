import { SubmitStatus } from './Application';

export type LoginRequest = {
  idToken: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type MeRequest = {
  accessToken: string;
};

export type AdminLoginRequest = {
  username: string;
  password: string;
};

export type MeResponse = {
  uid: string;
  sid: string;
  name: string;
  phone: string;
  email: string;
  major: string;
  submitStatus: SubmitStatus;
};

export type AdminMeResponse = {
  name: string;
};
