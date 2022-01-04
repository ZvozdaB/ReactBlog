import { fetchUserById, fetchUsers } from "../../Api/userApi";
import {
  USER_GET_USER_BY_ID_SUCCESS,
  USER_GET_USER_SUCCESS,
  USER_LOADING_END,
  USER_LOADING_START,
} from "./actionType";

export function getUsers() {
  return async (dispatch) => {
    dispatch(userLoadingStart());
    let users = await fetchUsers();
    dispatch(getUsersSuccess(users));
    dispatch(userLoadingEnd());
  };
}
export function getUserById(userId) {
  return async (dispatch) => {
    dispatch(userLoadingStart());
    let user = await fetchUserById(userId);
    if (user) dispatch(getUserByIdSuccess(user));
    dispatch(userLoadingEnd());
  };
}
function getUsersSuccess(users) {
  return {
    type: USER_GET_USER_SUCCESS,
    users,
  };
}
function getUserByIdSuccess(user) {
  return {
    type: USER_GET_USER_BY_ID_SUCCESS,
    user,
  };
}
function userLoadingStart() {
  return {
    type: USER_LOADING_START,
  };
}
function userLoadingEnd() {
  return {
    type: USER_LOADING_END,
  };
}
