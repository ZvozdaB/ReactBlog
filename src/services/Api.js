const URL = "https://ekreative-json-server.herokuapp.com";
// POST
export async function fetchPostPages(page, limit = 10) {
  let resp = await fetch(URL + `/posts?_page=${page}&_limit=${limit}`);
  let lastPage = getLastPage(resp.headers.get("Link"));
  let lastPost = resp.headers.get("X-Total-Count");
  let data = await resp.json();
  return { data, lastPage, lastPost };
}

export async function fetchPostById(postId) {
  let resp = await fetch(URL + `/posts/${postId}`);
  let date = await resp.json();
  return date;
}

// COMMENT

export async function fetchPostComments(postId) {
  let resp = await fetch(
    URL + `/comments?postId=${postId}&_sort=updatedAt&_order=desc`
  );
  let date = await resp.json();
  return date;
}

export async function fetchCreatePostComment({ body, postId }) {
  let date = new Date().toISOString();
  let { userId, accessToken } = getUserData();
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({
      body,
      postId,
      userId,
      createdAt: date,
      updatedAt: date,
    }),
  };
  let resp = await fetch(URL + "/664/comments", option);

  if (resp.status === 201) {
    let data = await resp.json();
    return data;
  }
  throw new Error(resp.status);
}

export async function fetchDeletePostComments(commentId) {
  let { userId, accessToken } = getUserData();
  let option = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  let resp = await fetch(URL + `/664/comments/${commentId}`, option);
  let date = await resp.json();
  return date;
}

// AUTH
export async function fetchLogIN(email, password) {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password }),
  };
  let resp = await fetch(URL + "/login", option);

  if (resp.status === 200) {
    let data = await resp.json();
    return data;
  }
  throw new Error(resp.status);
}

export async function fetchRegister(userData) {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  };
  let resp = await fetch(URL + "/register", option);

  if (resp.status === 201) {
    let data = await resp.json();
    return data;
  }
  throw new Error(resp.status);
}

function getUserData() {
  let user = localStorage.getItem("user");
  let {
    user: { id: userId },
    accessToken,
  } = JSON.parse(user);
  return { userId, accessToken };
}

function getLastPage(Link) {
  let linkArr = Link.split(",");
  let link = linkArr[linkArr.length - 1];
  let index = link.indexOf("_page=");
  let last = parseInt(link.slice(index + 6));
  return last;
}
