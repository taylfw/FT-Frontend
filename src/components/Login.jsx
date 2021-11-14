import React, { useState } from "react";
import { loginUser } from "../api";
import { getToken, storeToken, storeUser } from "../auth";
import "./Inputfields.css";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-component-main-container">
      <form
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const { token } = await loginUser(userName, password);
            storeToken(token);
            setIsLoggedIn(true);
            console.log(isLoggedIn);
            storeUser(userName);
            setUserName("");
            setPassword("");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            placeholder="enter username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
