import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development";
import { getPostById, getPostComments } from "../services/Api";
import Comments from "./Comments";
import Loader2 from "./Loader2/Loader2";

export default function Post({posts,}){
    let { postId } = useParams()
    let [comments, setComments] = useState([])
    let [loading, setLoading] = useState(false)
    let [post, setPost] = useState(false)
    
    useEffect(async () => {
        setLoading(true)
        let post = posts.find(post => post.id === +postId)
        if(!post) {
           post = await getPostById(postId)
        }
        let resp = await getPostComments(postId)
        setPost(post)
        setComments(resp)
        setLoading(false)
    },[postId])
    

    let PreviousBtn = <Link to={"/post/" + (+postId - 1)} className="px-3 py-1  bg-blue-400 rounded "> &lt; Previous</Link>
    if (+postId === 1) PreviousBtn = <span></span> 

    let NextBtn = <Link to={"/post/" + (+postId + 1)} className="px-3 py-1 bg-blue-400 rounded ">Next &gt;</Link>
    
    return(
        <main>
            <div className="container mx-auto ">
                <div className="flex py-4 items-center justify-between text-gray-100">
                    {PreviousBtn}
                    <Link to={"/post/" + (+postId + 1)} className="px-3 py-1 bg-blue-400 rounded ">Next &gt;</Link>
                </div>
                <div className="mb-2">
                    <div>
                        <span>user</span>
                        <span>criate at | updete at</span>
                    </div>
                </div>
                <div className="font-bold text-xl mb-2">{post?.title}</div>
                <p>{post?.body}</p>
            </div> 
            {loading ? <Loader2 /> : <Comments comments={comments} />}
            
        </main>
    )
}