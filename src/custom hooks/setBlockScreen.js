const body = document.body;

const setBlockScrollOn = () => {
  if (!body.classList.contains("blocked")) {
    body.classList.add("blocked");
  }
};
const setBlockScrollOff = () => {
  if (body.classList.contains("blocked")) {
    body.classList.remove("blocked");
  }
};

export { setBlockScrollOff, setBlockScrollOn };
