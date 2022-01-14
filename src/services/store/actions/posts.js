import {
  fetchCreatePost,
  fetchDeletePost,
  fetchPostById,
  fetchPostPages,
  fetchUpdatePost,
} from "../../Api/postsApi";
import {
  POSTS_GET_POSTS_SUCCESS,
  POSTS_LOADING_END,
  POSTS_LOADING_START,
  POST_FIND_POST_BY_ID,
  POST_GET_NEXT_PAGE,
  POST_GET_POST_BY_ID_SUCCESS,
  POST_RESET_POST,
} from "./actionType";

export const getPostPages = (page) => {
  return async (dispatch) => {
    dispatch(PostLoadingStart());
    const { data, lastPage, lastPost } = await fetchPostPages(page);
    dispatch(getPostSuccess(data, lastPage, lastPost));
    dispatch(PostLoadingEnd());
  };
};
export const CreatePost = (postData) => {
  return async (dispatch) => {
    await fetchCreatePost(postData);
    dispatch(resetPost());
    dispatch(getPostPages(1));
  };
};

export const DeletePost = (postId) => {
  return async (dispatch) => {
    await fetchDeletePost(postId);
    dispatch(resetPost());
    dispatch(getPostPages(1));
  };
};
export const UpdatePost = (postData) => {
  return async (dispatch) => {
    await fetchUpdatePost(postData);
    dispatch(resetPost());
    dispatch(getPostPages(1));
  };
};

export const getPostById = (postId) => {
  return async (dispatch) => {
    dispatch(PostLoadingStart());
    const post = await fetchPostById(postId);
    dispatch(getPostByIdSuccess(post));
    dispatch(PostLoadingEnd());
  };
};

export const getNextPage = () => {
  return {
    type: POST_GET_NEXT_PAGE,
  };
};
export const findPostByID = (data) => {
  return {
    type: POST_FIND_POST_BY_ID,
    data,
  };
};
const resetPost = () => {
  return {
    type: POST_RESET_POST,
  };
};

const getPostByIdSuccess = (data) => {
  return {
    type: POST_GET_POST_BY_ID_SUCCESS,
    data,
  };
};

const getPostSuccess = (data, lastPage, lastPost) => {
  return {
    type: POSTS_GET_POSTS_SUCCESS,
    data,
    lastPage,
    lastPost,
  };
};

const PostLoadingStart = () => {
  return { type: POSTS_LOADING_START };
};
const PostLoadingEnd = () => {
  return { type: POSTS_LOADING_END };
};
