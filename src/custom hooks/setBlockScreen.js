const body = document.body;

export function setBlockScrollOn() {
  if (!body.classList.contains("blocked")) {
    body.classList.add("blocked");
  }
}
export function setBlockScrollOff() {
  if (body.classList.contains("blocked")) {
    body.classList.remove("blocked");
  }
}
