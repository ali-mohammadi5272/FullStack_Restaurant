export interface LoginBodyType {
  identifier: string;
  password: string;
}

export interface LoginResponseType {
  accessToken: string;
  refreshToken: string;
}
