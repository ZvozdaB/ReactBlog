import {
  fetchCreatePostComment,
  fetchDeletePostComments,
  fetchPostComments,
  fetchUpdatePostComment,
} from "../../Api/commentsApi";
import {
  COMMENT_GET_POST_COMMENT_SUCCESS,
  COMMENT_LOADING_END,
  COMMENT_LOADING_START,
} from "./actionType";

export const getPostComments = (postId) => {
  return async (dispatch) => {
    dispatch(CommentLoadingStart());
    let comments = await fetchPostComments(postId);
    dispatch(getPostCommentsSuccess(comments));
    dispatch(CommentLoadingEnd());
  };
};

export const CreatePostComment = (commentData) => {
  return async (dispatch) => {
    await fetchCreatePostComment(commentData);
    dispatch(getPostComments(commentData.postId));
  };
};
export const UpdatePostComment = ({ commentText, commentId, postId }) => {
  return async (dispatch) => {
    await fetchUpdatePostComment(commentText, commentId);
    dispatch(getPostComments(postId));
  };
};
export const DeletePostComment = (commentId, postId) => {
  return async (dispatch) => {
    await fetchDeletePostComments(commentId);
    dispatch(getPostComments(postId));
  };
};

const getPostCommentsSuccess = (comments) => {
  return {
    type: COMMENT_GET_POST_COMMENT_SUCCESS,
    comments,
  };
};

const CommentLoadingStart = () => {
  return { type: COMMENT_LOADING_START };
};
const CommentLoadingEnd = () => {
  return { type: COMMENT_LOADING_END };
};
