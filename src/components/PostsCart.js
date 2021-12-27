import { Link } from "react-router-dom"
import { getDate } from "../custom hooks/getDate"
import { sliceText } from "../custom hooks/sliceText"

export default function PostsCart({ title, body, id, updatedAt}){

    return(
        <div className="border border-sky-200  p-4">
           <div className="mb-2">
               {/* <img /> */}
               <div className="flex ">
                   <span>{id}</span>
                   <span className="">{getDate(updatedAt)}</span>
               </div>
           </div>
            <div className="font-bold text-xl mb-2"><Link to={"/post/" + id}>{title}</Link></div>
            <p><Link to={"/post/" + id}>{sliceText(body, 100)}</Link></p>
       </div> 
    )
}