import React from "react";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  //  const {authorized} = useContext(AuthContext);
  return (
    <div>
      <input data-cy="login-email" placeholder="enter username" />
      <input data-cy="login-password" placeholder="enter your password" />
      <button data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
