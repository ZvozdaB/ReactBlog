import { URL } from "./URL";

export const fetchLogIN = async (email, password) => {
  const option = {
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
};

export const fetchRegister = async (userData) => {
  const option = {
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
};
