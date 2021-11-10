import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { getToken } from "./auth";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  Home,
  Activities,
  Routines,
  MyRoutines,
  User,
  NavBar,
  Register,
  Login,
} from "./components";

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getActivities = async () => {
    try {
      const { data } = await axios.get(
        "https://fitnesstrac-kr.herokuapp.com/api/activities"
      );
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getActivities();
  });

  return (
    <div id="App">
      <Router>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/routines">
            <Routines
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
            />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/user">
            <User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
