import React, { useState, useEffect } from "react";
import "./Routines.css";

const SingleRoutine = ({
  routine,
  thisUser
}) => {
    console.log(routine.id)
  return (
    <div className="routine">
      <h3 className="title">{routine.name}</h3>
      <h4 className="author">{routine.creatorName}</h4>
      <p className="goal">{routine.goal}</p>
      {thisUser === routine.creatorName ? (
        <button
          className="deleteButton"
          onClick={async (event) => {
            event.preventDefault();
            try {
              await deleteRoutine(routine.id);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default SingleRoutine;
