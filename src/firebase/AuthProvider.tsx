import React, { useState } from "react";
import * as firebase from "@firebase/auth-types";
import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState<firebase.UserInfo | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
