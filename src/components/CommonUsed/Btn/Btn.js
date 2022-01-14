const Btn = (props) => {
  let classes = " py-2 px-3 rounded text-white text-center transition ";

  if (props.cancel) {
    classes += "bg-gray-500 hover:bg-gray-600 active:bg-grey-400 ";
  } else if (props.header) {
    classes =
      "border py-1 px-2  rounded-md hover:text-sky-900 hover:border-sky-900 transition  ";
  } else {
    classes += "bg-sky-500 hover:bg-sky-600 active:bg-blue-400 ";
  }
  classes += " " + props.className;
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export { Btn };
