import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NewActivity } from ".";

import SingleRoutine from "./SingleRoutine";

const User = ({ allRoutines, isAuthor, setIsAuthor }) => {
  return (
    <div className="posts-main-container">
      {allRoutines.length
        ? allRoutines.map((routine) => {
            return isAuthor ? (
              <SingleRoutine routine={routine} thisUser={thisUser} />
            ) : null;
          })
        : null}
    </div>
  );
};

export default User;
