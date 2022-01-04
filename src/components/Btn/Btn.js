export default function Btn(props) {
  return (
    <button
      type={props.type}
      className={
        "py-2 px-4 bg-sky-500 rounded text-white text-center " + props.className
      }
      onClick={props.onClick}
    >
      {props.children}{" "}
    </button>
  );
}
