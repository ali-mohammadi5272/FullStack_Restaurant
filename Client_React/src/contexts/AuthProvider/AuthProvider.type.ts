import React from "react";
import { UserType } from "../../entities/user.entity";

interface AuthProviderPropsType {
  children: React.ReactNode;
}

interface AuthContextType {
  user: Omit<UserType, "password"> | null;
  setUser: React.Dispatch<
    React.SetStateAction<Omit<UserType, "password"> | null>
  >;
}

export type { AuthProviderPropsType, AuthContextType };
