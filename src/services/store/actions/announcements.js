import {
  fetchAnnouncements,
  fetchAnnouncementsById,
  fetchCreateAnnouncements,
  fetchDeleteAnnouncements,
  fetchUpdateAnnouncements,
} from "../../Api/announcementsApi";
import {
  ANNO_GET_ANNO_BY_ID_SUCCESS,
  ANNO_GET_ANNO_SUCCESS,
  ANNO_GET_NEXT_PAGE,
  ANNO_LOADING_END,
  ANNO_LOADING_START,
  ANNO_RESET_ANNO,
} from "./actionType";

export const getAnnoPages = (page) => {
  return async (dispatch) => {
    dispatch(AnnoLoadingStart());
    let { data, lastAnnoPage, lastAnno } = await fetchAnnouncements(page);
    dispatch(getAnnoSuccess(data, lastAnnoPage, lastAnno));
    dispatch(AnnoLoadingEnd());
  };
};
export const getAnnoById = (annoId) => {
  return async (dispatch) => {
    dispatch(AnnoLoadingStart());
    let anno = await fetchAnnouncementsById(annoId);
    dispatch(getAnnoByIdSuccess(anno));
    dispatch(AnnoLoadingEnd());
  };
};
export const CreateAnno = (annoData) => {
  return async (dispatch) => {
    await fetchCreateAnnouncements(annoData);
    dispatch(resetAnno());
    dispatch(getAnnoPages(1));
  };
};

export const DeleteAnno = (annoId) => {
  return async (dispatch) => {
    await fetchDeleteAnnouncements(annoId);
    dispatch(resetAnno());
    dispatch(getAnnoPages(1));
  };
};
export const UpdateAnno = (annoData) => {
  return async (dispatch) => {
    await fetchUpdateAnnouncements(annoData);
    dispatch(resetAnno());
    dispatch(getAnnoPages(1));
  };
};

export const getNextAnnoPage = () => {
  return {
    type: ANNO_GET_NEXT_PAGE,
  };
};
const getAnnoByIdSuccess = (anno) => {
  return {
    type: ANNO_GET_ANNO_BY_ID_SUCCESS,
    anno,
  };
};
const resetAnno = () => {
  return {
    type: ANNO_RESET_ANNO,
  };
};

const getAnnoSuccess = (data, lastAnnoPage, lastAnno) => {
  return {
    type: ANNO_GET_ANNO_SUCCESS,
    data,
    lastAnnoPage,
    lastAnno,
  };
};

const AnnoLoadingStart = () => {
  return { type: ANNO_LOADING_START };
};
const AnnoLoadingEnd = () => {
  return { type: ANNO_LOADING_END };
};
