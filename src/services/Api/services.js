export const getUserData = () => {
  const user = localStorage.getItem("user");
  const {
    user: { id: userId },
    accessToken,
  } = JSON.parse(user);
  return { userId, accessToken };
}
export const getOption = (method, data) => {
  const { accessToken, userId } = getUserData();

  return {
    method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ ...data, userId }),
  };
}

export const getLastPage = (Link) => {
  const linkArr = Link.split(",");
  const link = linkArr[linkArr.length - 1];
  const index = link.indexOf("_page=");
  const last = parseInt(link.slice(index + 6));
  return last;
}

export const validationPosts = (postsArr) => {
  const posts = postsArr.filter(
    (post) =>
      typeof post === "object" &&
      post.id &&
      post.title &&
      post.body &&
      post.createdAt &&
      post.updatedAt
  );
  return posts;
}
