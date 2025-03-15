export interface RegisterBodyType {
  fullName: string;
  userName: string;
  email: string;
  password: string;
}

export interface RegisterResponseType {
  accessToken: string;
  refreshToken: string;
  user: {
    fullName: string;
  };
}

export interface LocalStorageRegisterDataType {
  fullName: string;
}
