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
  Activities,
  Routines,
  User,
  NavBar,
  Register,
  Login,
  // NewActivity,
  NewRoutine,
} from "./components";

const App = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);

  const getActivities = async () => {
    try {
      // const myToken = getToken();

      // if (myToken) {
      //   setIsLoggedIn(true);
      // }

      const { data } = await axios.get(
        "https://fitnesstrac-kr.herokuapp.com/api/activities"
        // {
        //   headers: {
        //     Authorization: `BEARER ${myToken}`,
        //   },
        // }
      );

      setAllActivities(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  const getRoutines = async () => {
    try {
      const { data } = await axios.get(
        "https://fitnesstrac-kr.herokuapp.com/api/routines"
      );
      setAllRoutines(data);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getRoutines();
  }, []);

  return (
    <div id="App">
      <Router>
        <Header />
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Switch>
          <Route exact path="/">
            <Activities allActivities={allActivities} />
          </Route>
          <Route path="/routines">
            <NewRoutine allRoutines={allRoutines} setAllRoutines={setAllRoutines}/>
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
            <NewActivity />

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
