import React from "react";
import * as firebase from "@firebase/auth-types";

interface AuthContextProps {
  user: firebase.UserInfo | null;
  setUser: React.Dispatch<React.SetStateAction<firebase.UserInfo | null>>;
}

export const AuthContext = React.createContext({} as AuthContextProps);
