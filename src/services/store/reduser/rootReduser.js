import { combineReducers } from "redux";
import { authReduser } from "./auth";
import { commentsReduser } from "./comments";
import { postsReduser } from "./posts";

export default combineReducers({
    posts: postsReduser,
    comments: commentsReduser,
    auth: authReduser,
})