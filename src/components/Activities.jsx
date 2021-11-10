import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Activities = ({ allActivities }) => {
  return (
    <div className="activities-main-container">
      {allActivities.length
        ? allActivities.map((activity) => {
            return activity;
          })
        : null}
    </div>
  );
};

export default Activities;
