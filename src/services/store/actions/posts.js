import { data } from "autoprefixer";
import {
  fetchCreatePost,
  fetchDeletePost,
  fetchPostById,
  fetchPostPages,
  fetchUpdatePost,
} from "../../Api";
import {
  POSTS_GET_POSTS_SUCCESS,
  POSTS_LOADING_END,
  POSTS_LOADING_START,
  POST_FIND_POST_BY_ID,
  POST_GET_NEXT_PAGE,
  POST_GET_POST_BY_ID_SUCCESS,
  POST_RESET_POST,
} from "./actionType";

export function getPostPages(page) {
  return async (dispatch) => {
    dispatch(PostLoadingStart());
    let { data, lastPage, lastPost } = await fetchPostPages(page);
    dispatch(getPostSuccess(data, lastPage, lastPost));
    dispatch(PostLoadingEnd());
  };
}
export function CreatePost(postData) {
  return async (dispatch) => {
    await fetchCreatePost(postData);
    dispatch(resetPost());
    dispatch(getPostPages(1));
  };
}

export function DeletePost(postId) {
  return async (dispatch) => {
    await fetchDeletePost(postId);
    dispatch(resetPost());
    dispatch(getPostPages(1));
  };
}
export function UpdatePost(postData) {
  return async (dispatch) => {
    await fetchUpdatePost(postData);
    dispatch(resetPost());
    dispatch(getPostPages(1));
  };
}

export function getPostById(postId) {
  return async (dispatch) => {
    dispatch(PostLoadingStart());
    let post = await fetchPostById(postId);
    dispatch(getPostByIdSuccess(post));
    dispatch(PostLoadingEnd());
  };
}

export function getNextPage() {
  return {
    type: POST_GET_NEXT_PAGE,
  };
}
export function findPostByID(data) {
  return {
    type: POST_FIND_POST_BY_ID,
    data,
  };
}
function resetPost() {
  return {
    type: POST_RESET_POST,
  };
}

function getPostByIdSuccess(data) {
  return {
    type: POST_GET_POST_BY_ID_SUCCESS,
    data,
  };
}

function getPostSuccess(data, lastPage, lastPost) {
  return {
    type: POSTS_GET_POSTS_SUCCESS,
    data,
    lastPage,
    lastPost,
  };
}

function PostLoadingStart() {
  return { type: POSTS_LOADING_START };
}
function PostLoadingEnd() {
  return { type: POSTS_LOADING_END };
}
