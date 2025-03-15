export interface AccessTokenPayloadType {
  userId: number;
  refreshToken: string;
}

export interface RefreshTokenPayloadType {
  userId: number;
}
