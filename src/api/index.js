import axios from "axios";
import { getToken, getUser } from "../auth";

const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export async function getUsers() {
  const myToken = getToken();

  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createActivity(name, description, token) {
  try {
    const { data } = await axios.post(
      `${BASE}/activities`,
      {
        name: name,
        description: description,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
}
export async function createRoutine(name, goal, isPublic) {
  const token = getToken();

  try {
    const { data } = await axios.post(
      `${BASE}/routines`,
      {
        name,
        goal,
        isPublic,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllActivities() {
  try {

    const { data } = await axios.get(
      "https://fitnesstrac-kr.herokuapp.com/api/activities"
    );

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
export async function getAllRoutines(){
  try {
    const { data } = await axios.get(
      "https://fitnesstrac-kr.herokuapp.com/api/routines"
    );
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export async function getUsersRoutine() {
  const user = getUser();
  try {
    const { data } = await axios.get(`${BASE}/users/${user}/routines`);

    return data;
  } catch (error) {
    throw error;
  }
}


export async function deleteRoutine(id) {
  const token = getToken();
  try {
    const { data } = await axios.delete(`${BASE}/routines/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
