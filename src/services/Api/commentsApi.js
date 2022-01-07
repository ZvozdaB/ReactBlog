import { URL } from "./URL";
import { getOption } from "./services";

export async function fetchPostComments(postId) {
  let resp = await fetch(
    URL + `/comments?postId=${postId}&_sort=updatedAt&_order=desc`
  );
  let date = await resp.json();
  return date;
}
export async function fetchCreatePostComment({ body, postId }) {
  let date = new Date().toISOString();
  let option = getOption("POST", {
    body,
    postId,
    createdAt: date,
    updatedAt: date,
  });

  let resp = await fetch(URL + "/664/comments", option);

  if (resp.status === 201) {
    let data = await resp.json();
    return data;
  }
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  }
}

export async function fetchDeletePostComments(commentId) {
  let option = getOption("DELETE");
  let resp = await fetch(URL + `/664/comments/${commentId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else if (resp.status !== 200) {
    window.alert("Something went wrong");
  }
}

export async function fetchUpdatePostComment(commentText, commentId) {
  let date = new Date().toISOString();
  let option = getOption("PATCH", {
    body: commentText,
    updatedAt: date,
  });
  let resp = await fetch(URL + `/664/comments/${commentId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else if (resp.status !== 200) {
    window.alert("Something went wrong");
  }
}
