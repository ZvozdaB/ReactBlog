const getDate = (updatedAt) => {
  const monthsArr = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const date = new Date(updatedAt);
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  return `${monthsArr[month]}${day}.${year}`;
};

export { getDate };
