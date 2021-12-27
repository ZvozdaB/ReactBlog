import { fetchCreatePostComment, fetchPostComments } from "../../Api"
import { COMMENT_GET_POST_COMMENT_SUCCESS, COMMENT_LOADING_END, COMMENT_LOADING_START } from "./actionType"

export function getPostComments(postId){
    return async dispatch => {
        dispatch(CommentLoadingStart())
        let comments = await fetchPostComments(postId)
        dispatch(getPostCommentsSuccess(comments))
        dispatch(CommentLoadingEnd())

    }
}

export function CreatePostComment(commentData){
    return async dispatch => {
        await fetchCreatePostComment(commentData)
        dispatch(getPostComments(commentData.postId))
    }
}

function getPostCommentsSuccess(comments){
    return {
        type: COMMENT_GET_POST_COMMENT_SUCCESS,
        comments
    }
}

function CommentLoadingStart() {
    return { type: COMMENT_LOADING_START }
}
function CommentLoadingEnd() {
    return { type: COMMENT_LOADING_END }
}