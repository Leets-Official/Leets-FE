import { SubmitStatus } from './Application';

export type LoginRequest = {
  idToken: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type MeRequest = LoginResponse;

export type AdminLoginRequest = {
  username: string;
  password: string;
};

export type MeResponse = {
  uid: string;
  submitStatus: SubmitStatus;
};

export type AdminMeResponse = {
  name: string;
};
