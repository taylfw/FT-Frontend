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
} from "./components";

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getActivities = async () =>{
    try {
      const { data } = await axios.get(
        "https://fitnesstrac-kr.herokuapp.com/api/activities"
      );
      console.log(data)
    } catch (error) {
      console.error(error.message)
    }
}

useEffect(()=>{
  getActivities()
})

  return (
    <Router>
      <div id="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Home />
        <Routines allRoutines={allRoutines} setAllRoutines={setAllRoutines} />
        <User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
