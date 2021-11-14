import React, { useState, useEffect } from "react";
import { getUsers } from "../api";
import { getUser } from "../auth";
import "./Routines.css";

const SingleRoutine = ({ routine, thisUser, isAuthor, setIsAuthor }) => {
  try {
    if (thisUser === routine.creatorName) setIsAuthor(true);
  } catch (error) {
    console.error(error);
  }
  console.log(routine);
  return (
    <div key={routine.id} className="routine">
      <h3 className="title">{routine.name}</h3>
      <h4 className="author">{routine.creatorName}</h4>
      <p className="goal">{routine.goal}</p>
      {isAuthor ? (
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
