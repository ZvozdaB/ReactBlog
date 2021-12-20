import { Link } from "react-router-dom"

export default function PostsCart({ title, body, id}){

    let lastWord = body.indexOf(" ",100)
    let prevText = body.slice(0, lastWord) + "..."
    return(
        <div className="border border-sky-200  p-4">
           <div className="mb-2">
               {/* <img /> */}
               <div>
                   <span>{id}</span>
                   <span>criate at | updete at</span>
               </div>
           </div>
            <div className="font-bold text-xl mb-2"><Link to={"/post/" + id}>{title}</Link></div>
            <p><Link to={"/post/" + id}>{prevText}</Link></p>
       </div> 
    )
}