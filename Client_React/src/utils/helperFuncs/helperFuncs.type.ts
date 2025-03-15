export enum CookieEnum {
  REFRESH_TOKEN = "REFRESH_TOKEN",
  ACCESS_TOKEN = "ACCESS_TOKEN",
}

export enum LocalStorageEnum {
  USER = "user",
}

export interface CookieType {
  key: CookieEnum;
  value: string;
  maxAge: number;
  path: string;
}

export interface LocalStorageType<T> {
  key: LocalStorageEnum;
  value: T;
}
