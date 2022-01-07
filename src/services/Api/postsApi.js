import { URL } from "./URL";
import { getOption, getLastPage, validationPosts } from "./services";

export async function fetchPostPages(page, limit = 10) {
  let resp = await fetch(
    URL + `/posts?_page=${page}&_limit=${limit}&_sort=updatedAt&_order=desc`
  );
  let lastPage = getLastPage(resp.headers.get("Link"));
  let lastPost = resp.headers.get("X-Total-Count");
  let data = await resp.json();
  data = validationPosts(data); // TODO: post validation from server
  return { data, lastPage, lastPost };
}

export async function fetchPostById(postId) {
  let resp = await fetch(URL + `/posts/${postId}`);
  let date = await resp.json();
  return date;
}

export async function fetchCreatePost({ body, title }) {
  let date = new Date().toISOString();
  let option = getOption("POST", {
    body,
    title,
    createdAt: date,
    updatedAt: date,
  });
  let resp = await fetch(URL + "/664/posts", option);

  if (resp.status === 201) {
    let data = await resp.json();
    return data;
  } else if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  }
}

export async function fetchDeletePost(postId) {
  let option = getOption("DELETE");
  let resp = await fetch(URL + `/664/posts/${postId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  }
}

export async function fetchUpdatePost({ title, body, postId }) {
  let date = new Date().toISOString();
  let option = getOption("PATCH", { body, title, updatedAt: date });

  let resp = await fetch(URL + `/664/posts/${postId}`, option);
  if (resp.status === 401) {
    window.alert("Access token timeout, pleas re-login");
  } else if (resp.status !== 200) {
    window.alert("Something went wrong");
  }
}
