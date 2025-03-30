export interface AccessTokenPayloadType {
  refreshToken: string;
  userId: number;
  iat: number;
  exp: number;
}

export interface RefreshTokenPayloadType {
  userId: number;
  iat: number;
  exp: number;
}

export interface SuccessResponseConfigs {
  statusCode: number;
  message: string | null;
  data: unknown;
}
