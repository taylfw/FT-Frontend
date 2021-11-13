import axios from "axios";
import { getToken } from "../auth";

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

export async function createActivity(title, description, price, token) {
  try {
    const { data } = await axios.post(
      `${BASE}/activities`,
      {
        post: {
          title: title,
          description: description,
          price: price,
        },
      },
      {
        headers: {
          // Not sure if it is application and token. (Please delete this comment if correct) -Daniel
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
export async function createRoutine(id, content) {
  const token = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/routines/`,
      {
        routine: {
          name: name,
          goal: goal,
          isPublic: isPublic,
        },
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
  } finally {
    location.reload();
  }
}

export async function deleteRoutine(id) {
  const myToken = getToken();
  try {
    const { data } = await axios.delete(`${BASE}/routines/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  } finally {
    location.reload();
  }
}