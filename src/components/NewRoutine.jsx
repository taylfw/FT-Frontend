import React, { useState } from "react";
import { createRoutine } from "../api";
import "./Inputfields.css";

const NewRoutine = ({ allRoutines, setAllRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  
  return (
    <div className="new-post-component-main-container">
      <form
        id="newRoutineSubmit"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const createdRoutine = await createRoutine(
              name,
              goal,
              isPublic,
            );

            console.log(createdRoutine);
            setAllRoutines([createdRoutine, ...allRoutines]);
            setName("");
            setGoal("");
            setIsPublic(false);
            // setError("");
                
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <h3 className="hello">Create Your Routine Here</h3>
        <fieldset className="auth-component-input">
          <label htmlFor="name">Title: </label>
          <input
            id="name"
            type="text"
            placeholder="enter title"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="goal">Goal: </label>
          <input
            id="goal"
            type="text"
            placeholder="Enter Your Goal"
            value={goal}
            onChange={(event) => {
              setGoal(event.target.value);
            }}
            required
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="isPublic">Is this public:</label>
          <input
            id="isPublic"
            type="checkbox"
            value={isPublic}
            onChange={(event) => {
              setIsPublic(event.target.checked);
            }}
          ></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRoutine;
