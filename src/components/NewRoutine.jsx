import React, { useState } from "react";
import { createRoutine } from "../api";
import { getToken } from "../auth";

const NewRoutine = (props) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false)
  const {allRoutines, setAllRoutines} = props
  return (
    <div className="new-post-component-main-container">
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const token = getToken();
            const createdRoutine = await createRoutine(
              name,
              goal,
              isPublic,
              token
            );
            
            console.log(createdRoutine)
            setAllRoutines([createdRoutine.routine.post, ...allRoutines]);
            
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <h3>Create Post Here</h3>
        <fieldset className="auth-component-input">
          <label htmlFor="name">Title</label>
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
          <label htmlFor="goal">Goal</label>
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
              setIsPublic(event.target.value);
            }}
            required
          ></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRoutine;
