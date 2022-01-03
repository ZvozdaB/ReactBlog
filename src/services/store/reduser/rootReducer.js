import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { commentsReducer } from "./comments";
import { postsReducer } from "./posts";
import { usersReducer } from "./users";

export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  auth: authReducer,
  users: usersReducer,
});
