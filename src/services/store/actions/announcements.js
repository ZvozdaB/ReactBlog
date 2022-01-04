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

export function getAnnoPages(page) {
  return async (dispatch) => {
    dispatch(AnnoLoadingStart());
    let { data, lastAnnoPage, lastAnno } = await fetchAnnouncements(page);
    dispatch(getAnnoSuccess(data, lastAnnoPage, lastAnno));
    dispatch(AnnoLoadingEnd());
  };
}
export function getAnnoById(annoId) {
  return async (dispatch) => {
    dispatch(AnnoLoadingStart());
    let anno = await fetchAnnouncementsById(annoId);
    dispatch(getAnnoByIdSuccess(anno));
    dispatch(AnnoLoadingEnd());
  };
}
export function CreateAnno(annoData) {
  return async (dispatch) => {
    await fetchCreateAnnouncements(annoData);
    dispatch(resetAnno());
    dispatch(getAnnoPages(1));
  };
}

export function DeleteAnno(annoId) {
  return async (dispatch) => {
    await fetchDeleteAnnouncements(annoId);
    dispatch(resetAnno());
    dispatch(getAnnoPages(1));
  };
}
export function UpdateAnno(annoData) {
  return async (dispatch) => {
    await fetchUpdateAnnouncements(annoData);
    dispatch(resetAnno());
    dispatch(getAnnoPages(1));
  };
}

export function getNextAnnoPage() {
  return {
    type: ANNO_GET_NEXT_PAGE,
  };
}
function getAnnoByIdSuccess(anno) {
  return {
    type: ANNO_GET_ANNO_BY_ID_SUCCESS,
    anno,
  };
}
function resetAnno() {
  return {
    type: ANNO_RESET_ANNO,
  };
}

function getAnnoSuccess(data, lastAnnoPage, lastAnno) {
  return {
    type: ANNO_GET_ANNO_SUCCESS,
    data,
    lastAnnoPage,
    lastAnno,
  };
}

function AnnoLoadingStart() {
  return { type: ANNO_LOADING_START };
}
function AnnoLoadingEnd() {
  return { type: ANNO_LOADING_END };
}
