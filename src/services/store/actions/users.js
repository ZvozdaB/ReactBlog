import { fetchUsers } from "../../Api/userApi";
import { USER_GET_USER_SUCCESS } from "./actionType";

export function getUsers() {
  return async (dispatch) => {
    let users = await fetchUsers();
    dispatch(getUsersSuccess(users));
  };
}
function getUsersSuccess(users) {
  return {
    type: USER_GET_USER_SUCCESS,
    users,
  };
}
