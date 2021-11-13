import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createActivity } from "../api";

const NewActivity = ({ allActivities, setAllActivities }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      <h1 className="hello">Welcome to making a activity.</h1>
      <form
        id="newActivitySubmit"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const token = getToken();
            const user = getUser();
            const createdActivity = await createActivity(
              name,
              description,
              token
            );
            console.log(createdActivity);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <h2 className="hello">Create Activity Below.</h2>
        <fieldset className="auth-component-input">
          <label htmlFor="title">Title:</label>
          <input
            id="name"
            type="text"
            placeholder="enter name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            placeholder="enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </fieldset>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      <button className="btn">
        <a href="#">Back to top</a>
      </button>
      <button>
        <a href="#">Back to top</a>
      </button>
    </div>
  );
};

export default NewActivity;
