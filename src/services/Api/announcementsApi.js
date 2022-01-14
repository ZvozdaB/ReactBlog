import { URL } from "./URL";
import { getOption, getLastPage } from "./services";

export const fetchAnnouncements = async (page, limit = 10) => {
  let resp = await fetch(
    URL +
      `/announcements?_page=${page}&_limit=${limit}&_sort=updatedAt&_order=desc&_expand=user`
  );
  let lastAnnoPage = getLastPage(resp.headers.get("Link"));
  let lastAnno = resp.headers.get("X-Total-Count");
  let data = await resp.json();
  return { data, lastAnnoPage, lastAnno };
};
export const fetchAnnouncementsById = async (annoId) => {
  let resp = await fetch(URL + `/announcements/${annoId}?_expand=user`);
  let date = await resp.json();
  return date;
};

export const fetchCreateAnnouncements = async ({ body, title }) => {
  let date = new Date().toISOString();
  let option = getOption("POST", {
    body,
    title,
    createdAt: date,
    updatedAt: date,
  });
  let resp = await fetch(URL + "/664/announcements", option);

  if (resp.status === 201) {
    let data = await resp.json();
    return data;
  } else if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else {
    window.alert("Something went wrong");
  }
};

export const fetchDeleteAnnouncements = async (annoId) => {
  let option = getOption("DELETE");
  let resp = await fetch(URL + `/664/announcements/${annoId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else if (resp.status !== 200) {
    window.alert("Something went wrong");
  }
};

export const fetchUpdateAnnouncements = async ({ title, body, annoId }) => {
  let date = new Date().toISOString();
  let option = getOption("PATCH", { body, title, updatedAt: date });

  let resp = await fetch(URL + `/664/announcements/${annoId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else if (resp.status !== 200) {
    window.alert("Something went wrong");
  }
};
