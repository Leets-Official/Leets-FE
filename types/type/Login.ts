import { SubmitStatus } from './Application';

export type LoginRequest = {
  idToken: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type MeRequest = LoginResponse;

export type AdminLoginRequest = {
  id: string;
  password: string;
};

export type MeResponse = {
  submitStatus: SubmitStatus;
};

export type AdminMeResponse = {
  name: string;
};
