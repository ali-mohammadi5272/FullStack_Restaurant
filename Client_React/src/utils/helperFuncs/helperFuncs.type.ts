export enum CookieEnum {
  REFRESH_TOKEN = "REFRESH_TOKEN",
  ACCESS_TOKEN = "ACCESS_TOKEN",
}

export interface CookieType {
  key: CookieEnum;
  value: string;
  maxAge: number;
  path: string;
}
