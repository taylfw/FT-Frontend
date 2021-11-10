import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isLoggedIn, setIsloggedIn }) => {
  return (
    <div className="nav">
      <div>
        <Link className="nav-bar-link" to="/routines">
          Routines
        </Link>
      </div>

      {isLoggedIn ? (
        <div>
          <Link className="nav-bar-link" to="/user">
            User
          </Link>
          <Link
            className="nav-bar-link"
            to="/"
            onClick={() => {
              localStorage.clear();
              setIsloggedIn(false);
            }}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div>
          <Link className="nav-bar-link" to="/login">
            Login
          </Link>
          <Link className="nav-bar-link" to="/register">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
