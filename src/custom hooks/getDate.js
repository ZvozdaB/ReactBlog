const getDate = (updatedAt) => {
  let monthsArr = [
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
  let date = new Date(updatedAt);
  let month = date.getMonth();
  let year = date.getFullYear();
  let day = date.getDate();
  return `${monthsArr[month]}${day}.${year}`;
};

export { getDate };
