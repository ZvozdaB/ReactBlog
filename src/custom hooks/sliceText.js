export const sliceText = (text, num) => {
  if (text.length <= num) return text;
  let lastWord = text.indexOf(" ", num);
  let prevText = text.slice(0, lastWord) + "...";
  return prevText;
};
