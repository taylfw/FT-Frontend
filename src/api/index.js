import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

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
      body: {username: username,
      password: password,}
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
        body: {username: username,
        password: password,}
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPost(title, description, price, token) {
  try {
    const { data } = await axios.post(
      `${BASE}/posts`,
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
export async function createMessage(id, content) {
  const token = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/posts/${id}/messages`,
      {
        message: {
          content,
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

export async function deletePost(id) {
  const myToken = getToken();
  try {
    const { data } = await axios.delete(`${BASE}/posts/${id}`, {
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
