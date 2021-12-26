export default function Btn(props){
    return (
        <button className={"py-2 px-4 bg-sky-500 rounded text-white " + props.className} onClick={props.onClick}>{props.children} </button>
    )
}