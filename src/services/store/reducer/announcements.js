import {
  ANNO_GET_ANNO_BY_ID_SUCCESS,
  ANNO_GET_ANNO_SUCCESS,
  ANNO_GET_NEXT_PAGE,
  ANNO_LOADING_END,
  ANNO_LOADING_START,
  ANNO_RESET_ANNO,
} from "../actions/actionType";

const initialState = {
  annons: [],
  anno: {},
  currentAnnoPage: 1,
  lastAnnoPage: null,
  lastAnno: null,
  loading: false,
};
export const announcementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANNO_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case ANNO_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case ANNO_GET_ANNO_SUCCESS:
      return {
        ...state,
        annons: [...state.annons, ...action.data],
        lastAnnoPage: action.lastAnnoPage,
        lastAnno: +action.lastAnno,
      };
    case ANNO_GET_ANNO_BY_ID_SUCCESS:
      return {
        ...state,
        anno: action.anno,
      };
    case ANNO_GET_NEXT_PAGE:
      return {
        ...state,
        currentAnnoPage: state.currentAnnoPage + 1,
      };
    case ANNO_RESET_ANNO:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
