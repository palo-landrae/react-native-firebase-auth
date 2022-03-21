import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => console.log("User Signed In"))
    .catch((err) => alert(err.message));
};

export const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password).then(() =>
    console.log("User Created")
  );
};

export const logout = () => {
  signOut(auth).then(() => console.log("User Signed Out"));
};
