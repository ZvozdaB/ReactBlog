import {
  POSTS_GET_POSTS_SUCCESS,
  POSTS_LOADING_END,
  POSTS_LOADING_START,
  POST_FIND_POST_BY_ID,
  POST_GET_NEXT_PAGE,
  POST_GET_POST_BY_ID_SUCCESS,
  POST_RESET_POST,
} from "../actions/actionType";

const initialState = {
  posts: [],
  post: {},
  currentPage: 1,
  lastPage: null,
  lastPost: null,
  loading: false,
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case POSTS_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case POSTS_GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.data],
        lastPage: action.lastPage,
        lastPost: +action.lastPost,
      };
    case POST_GET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case POST_RESET_POST:
      return {
        ...initialState,
      };
    case POST_FIND_POST_BY_ID:
    case POST_GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        post: action.data,
      };

    default:
      return state;
  }
};
