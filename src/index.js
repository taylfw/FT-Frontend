import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { getAllActivities, getAllRoutines, getUsersRoutine } from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  Activities,
  Routines,
  User,
  NavBar,
  Register,
  Login,
  NewActivity,
  NewRoutine,
  Home,
} from "./components";
import { getToken } from "./auth";

const App = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);

  const isUserLoggedIn = async () => {
    const token = getToken()
    if(token) setIsLoggedIn(true)
  }

  const getActivities = async () => {
    const data = await getAllActivities();
    setAllActivities(data);
  };
  const getRoutines = async () => {
    const data = await getAllRoutines();
    setAllRoutines(data);
  };
  // const getUserRoutines = async () => {
  //   const data = await getUsersRoutine();
  //   // setAllUserRoutines(data);
  // };
  useEffect(() => {
    getRoutines();
    getActivities();
    // getUserRoutines();
    isUserLoggedIn();
  }, []);

  return (
    <div id="App">
      <Router>
        <Header isLoggedin={isLoggedIn} />
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/activities">
            <NewActivity />
            <Activities allActivities={allActivities} />
          </Route>
          <Route path="/routines">
            <NewRoutine
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
            />
            <Routines
              allActivities={allActivities}
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
              isLoggedIn={isLoggedIn}
              isAuthor={isAuthor}
              setIsAuthor={setIsAuthor}
            />
          </Route>

          <Route path="/login">
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/register">
            <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>

          <Route path="/user">
            <User
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              allRoutines={allRoutines}
              isAuthor={isAuthor}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
