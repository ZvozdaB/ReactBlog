
export default function PostDetails({post}){

    return(
        <div>
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