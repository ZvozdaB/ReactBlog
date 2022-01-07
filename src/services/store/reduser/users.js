import {
  USER_GET_USER_BY_ID_SUCCESS,
  USER_GET_USER_SUCCESS,
  USER_LOADING_END,
  USER_LOADING_START,
} from "../actions/actionType";

const initialState = {
  users: [],
  usersLoading: false,
};
export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USER_GET_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case USER_GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case USER_LOADING_START:
      return {
        ...state,
        usersLoading: true,
      };
    case USER_LOADING_END:
      return {
        ...state,
        usersLoading: false,
      };
    default:
      return state;
  }
}
