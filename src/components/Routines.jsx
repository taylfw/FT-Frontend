import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Routines.css";

const Routines = ({ allRoutines }) => {
  return (
    <div className="routines-main-container">
      {allRoutines && allRoutines.length
        ? allRoutines.map((routine) => {
            console.log(routine);
            return (
              <div key={routine.id} className="routine">
                <h2 className="title">{routine.name}</h2>
                <h4 className="goal">Goal:</h4>
                <h4 className="goal">{routine.goal}</h4>
                <h5>{routine.activities.name}</h5>
                <h4 className="author">By: {routine.creatorName}</h4>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Routines;
