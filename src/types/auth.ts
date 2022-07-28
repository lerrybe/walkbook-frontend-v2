export interface SigninRequest {
  username: string;
  password: string;
}

export type SigninResponse = string | number | undefined;
