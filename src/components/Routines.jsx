import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Routines.css";
import { getUser } from "../auth";
import SingleRoutine from "./SingleRoutine";

const Routines = ({ allRoutines, isAuthor, setIsAuthor, isLoggedIn }) => {
  const thisUser = getUser();
  return (
    <div className="routines-main-container">
      {allRoutines && allRoutines.length
        ? allRoutines.map((routine) => {
            return routine.isPublic ? (
              <SingleRoutine
                routine={routine}
                thisUser={thisUser}
                isAuthor={isAuthor}
                setIsAuthor={setIsAuthor}
                isLoggedIn={isLoggedIn}
              />
            ) : null;
          })
        : null}
    </div>
  );
};

export default Routines;
