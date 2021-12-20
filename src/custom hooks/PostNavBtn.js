import { Link } from "react-router-dom";
import Btn from "../components/Btn";

export function PreviousBtn(postId){
    return +postId !== 1
        ? <Btn><Link to={"/post/" + (+postId - 1)}> &lt; Previous</Link></Btn>
        : <span></span>
}
export function NextBtn(postId,lastPost){
    return +postId < lastPost
        ? <Btn><Link to={"/post/" + (+postId + 1)}>Next &gt;</Link></Btn>
        : <span></span>
}