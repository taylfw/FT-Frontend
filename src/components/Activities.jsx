import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Activities.css";

const Activities = ({ allActivities }) => {
  console.log(allActivities);
  return (
    <div className="activities-main-container">
      {allActivities.length
        ? allActivities.map((activity) => {
            return (
              <div className="activity" key={activity.id}>
                <h2 className="activity-cardTitle">{activity.name}</h2>
                <h3 className="activity-cardDesc">{activity.description}</h3>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Activities;
