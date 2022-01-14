export const sliceText = (text, num) => {
  if (text.length <= num) return text;
  const lastWord = text.indexOf(" ", num);
  const prevText = text.slice(0, lastWord) + "...";
  return prevText;
};
