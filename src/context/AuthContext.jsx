import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [authorized, setAuthorized] = useState(false);

  const Login = (username, password) => {
    if(username && password)
    {
      setAuthorized(true)
    }
  }

  const Logout = () => {
    setAuthorized(false)

  }

  return <AuthContext.Provider value={{authorized,Login, Logout}}>{children}</AuthContext.Provider>;
};
