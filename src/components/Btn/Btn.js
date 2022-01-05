export default function Btn(props) {
  let classes = " py-2 px-4 rounded text-white text-center transition ";
  classes += props.cancel
    ? "bg-gray-500 hover:bg-gray-600 active:bg-grey-400 "
    : "bg-sky-500 hover:bg-sky-600 active:bg-blue-400 ";
  classes += props.className;
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
