import axios from "axios";

const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

// this is an example for an api call with axios

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}
