import { URL } from "./URL";

export async function fetchLogIN(email, password) {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password }),
  };
  let resp = await fetch(URL + "/login", option);

  if (resp.status === 200) {
    let data = await resp.json();
    return data;
  }
  throw new Error(resp.status);
}

export async function fetchRegister(userData) {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  };
  let resp = await fetch(URL + "/register", option);

  if (resp.status === 201) {
    let data = await resp.json();
    return data;
  }
  throw new Error(resp.status);
}
