import React, { useState } from "react";
import { registerUser } from "../api";
import { storeToken, storeUser } from "../auth";
import "./Inputfields.css";

const Register = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-component-main-container">
      <form
        id="register"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const { token } = await registerUser(userName, password);
            storeToken(token);
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
