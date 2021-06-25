//React
import React, { createContext, useState, ReactNode } from "react";

//Types
type AuthContextData = {};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: any) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
