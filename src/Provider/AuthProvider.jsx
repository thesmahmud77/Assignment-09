import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const Auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currectUser) => {
      SetUser(currectUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const AuthData = {
    user,
    SetUser,
    createUser,
  };

  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
