import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../config/firebase";

export type TAuthContext = {
  userToken: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  signup: (
    email: string,
    password: string,
    username?: string
  ) => Promise<{ error: string | null }>;
  logout: () => void;
};

export const AuthContext = createContext<TAuthContext | null>(null);

type AuthProviderProps = {
  children: React.ReactElement;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const signup = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        const token = await user.user.getIdToken();
        setUserToken(token);
        AsyncStorage.setItem("userToken", token);
        setIsLoading(false);
        return { error: null };
      } else {
        setIsLoading(false);
        return { error: "CANT CREATE NEW USER" };
      }
    } catch (err) {
      setIsLoading(false);
      console.log("CAN'T SIGN UP: ", err);
      return { error: "Cant sing up" };
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      const token = await user.user.getIdToken();
      setUserToken(token);
      AsyncStorage.setItem("userToken", token);
      setIsLoading(false);
      return { error: null };
    } else {
      setIsLoading(false);
      return { error: "Email or password is incorrect! Try again" };
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      setUserToken(null);
      await signOut(auth);
      AsyncStorage.removeItem("userToken");
      setIsLoading(false);
    } catch (err) {
      console.log("ERROR while logging out", err);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (err) {
      console.log("ERROR while loggin in: ", err);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, signup, logout, isLoading, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}
