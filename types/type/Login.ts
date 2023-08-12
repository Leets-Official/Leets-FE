export type LoginRequest = {
  id: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};
