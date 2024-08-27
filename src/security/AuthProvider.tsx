import React, { useState, ReactNode, useEffect } from "react";
import { User } from "../types/GlobalTypes";
import AuthContext from "./AuthContext";

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storagedToken = localStorage.getItem("@AppName:token");
    const storagedUser = localStorage.getItem("@AppName:user");

    if (storagedToken && storagedUser) {
      setToken(storagedToken);
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  const signIn = (userData: User, token: string) => {
    setUser(userData);
    setToken(token);

    localStorage.setItem("@AppName:token", token);
    localStorage.setItem("@AppName:user", JSON.stringify(userData));
  };

  const signOut = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("@AppName:token");
    localStorage.removeItem("@AppName:user");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, signIn, signOut, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
