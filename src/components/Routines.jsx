import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Routines = ({ allRoutines }) => {
  return (
    <div className="routines-main-container">
      {allRoutines.length
        ? allRoutines.map((routine) => {
            console.log(routine);
            return (
              <div>
                <h3>routine.name</h3>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Routines;
