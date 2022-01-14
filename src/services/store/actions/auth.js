import { fetchLogIN, fetchRegister } from "../../Api/userApi";
import { AUTH_LOGOUT, AUTH_SET_ERROR, AUTH_SET_USER } from "./actionType";

export const LogIn = (email, password) => {
  return async (dispatch) => {
    fetchLogIN(email, password)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(setUser(user.user));
        dispatch(setError(""));
      })
      .catch((err) => dispatch(setError("Email or password not correct")));
  };
};
export const UserRegister = (userData) => {
  return async (dispatch) => {
    fetchRegister(userData)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(setUser(user.user));
        dispatch(setError(""));
      })
      .catch((err) => dispatch(setError("Email already exists")));
  };
};

export const isUserLogIn = () => {
  return async (dispatch) => {
    let data = localStorage.getItem("user");
    if (data) {
      let user = await JSON.parse(data);
      dispatch(setUser(user.user));
    }
  };
};
export const LogOut = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  return {
    type: AUTH_LOGOUT,
  };
};
export const setError = (error) => {
  return {
    type: AUTH_SET_ERROR,
    error,
  };
};
const setUser = (user) => {
  return {
    type: AUTH_SET_USER,
    user: user,
  };
};
