import { URL } from "./URL";
import { getOption } from "./services";

export const fetchPostComments = async (postId) => {
  let resp = await fetch(
    URL + `/comments?postId=${postId}&_sort=updatedAt&_order=desc&_expand=user`
  );
  let date = await resp.json();
  return date;
};
export const fetchCreatePostComment = async ({ body, postId }) => {
  const date = new Date().toISOString();
  const option = getOption("POST", {
    body,
    postId,
    createdAt: date,
    updatedAt: date,
  });

  let resp = await fetch(URL + "/664/comments", option);

  if (resp.status === 201) {
    let data = await resp.json();
    return data;
  } else if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  }
};

export const fetchDeletePostComments = async (commentId) => {
  const option = getOption("DELETE");
  let resp = await fetch(URL + `/664/comments/${commentId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else if (resp.status !== 200) {
    window.alert("Something went wrong");
  }
};

export const fetchUpdatePostComment = async (commentText, commentId) => {
  const date = new Date().toISOString();
  const option = getOption("PATCH", {
    body: commentText,
    updatedAt: date,
  });
  let resp = await fetch(URL + `/664/comments/${commentId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else if (resp.status !== 200) {
    window.alert("Something went wrong");
  }
};
