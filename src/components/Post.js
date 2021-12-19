import { useParams } from "react-router-dom"

export default function Post({posts}){
    
    let {postId} = useParams();
    let post = posts.find(post => post.id === +postId)
    console.log(posts)
    return(
        <div className="container mx-auto p-4">
            <div className="mb-2">
                
                <div>
                    <span>user</span>
                    <span>criate at | updete at</span>
                </div>
            </div>
            <div className="font-bold text-xl mb-2">{post?.title}</div>
            <p>{post?.body}</p>
        </div> 
    )
}