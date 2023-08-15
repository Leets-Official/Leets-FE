export type LoginRequest = {
  idToken: string;
};

export type AdminLoginRequest = {
  id: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};
