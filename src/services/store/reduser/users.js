import { USER_GET_USER_SUCCESS } from "../actions/actionType";

const initialState = {
  users: [],
};
export function usersReducer(state = initialState, action) {
  switch (action.type) {
      case USER_GET_USER_SUCCESS:
          return {
              ...state, users: action.users
          }
    default:
      return state;
  }
}
