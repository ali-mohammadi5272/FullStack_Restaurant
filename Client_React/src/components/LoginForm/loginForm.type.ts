export interface LoginBodyType {
  identifier: string;
  password: string;
}

export interface LoginResponseType {
  accessToken: string;
  refreshToken: string;
  fullName: string;
}

export interface LocalStorageLoginDataType {
  fullName: string;
}
