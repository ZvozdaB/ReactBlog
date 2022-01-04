export function getUserData() {
  let user = localStorage.getItem("user");
  let {
    user: { id: userId },
    accessToken,
  } = JSON.parse(user);
  return { userId, accessToken };
}
export function getOption(method, data) {
  let { accessToken, userId } = getUserData();

  return {
    method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ ...data, userId }),
  };
}

export function getLastPage(Link) {
  let linkArr = Link.split(",");
  let link = linkArr[linkArr.length - 1];
  let index = link.indexOf("_page=");
  let last = parseInt(link.slice(index + 6));
  return last;
}
