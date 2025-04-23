import React, { createContext, useState } from "react";
import { AuthContextType, AuthProviderPropsType } from "./AuthProvider.type";
import { UserType } from "../../entities/user.entity";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

const AuthProvider: React.FC<AuthProviderPropsType> = ({ children }) => {
  const [user, setUser] = useState<Omit<UserType, "password"> | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
