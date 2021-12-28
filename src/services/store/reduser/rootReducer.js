import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { commentsReducer } from "./comments";
import { postsReducer } from "./posts";

export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  auth: authReducer,
});
