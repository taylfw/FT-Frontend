import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getUser } from "../auth";
import "./Header.css";

const Header = ({isLoggedIn}) => {
  const myUser = getUser();
  return (
    <header>
      {isLoggedIn ? (
        <h1 className="header-title">Stronger Together, {myUser}!</h1>
      ) : (
        <h1 className="title">Welcome To FitnessTrac-kr!</h1>
      )}
    </header>
  );
};

export default Header;
