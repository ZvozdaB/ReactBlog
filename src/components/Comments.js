export default function Comments({comments}){
    
    return(
        <div className="container mx-auto mt-6">
            <p className="text-lg">Comments</p>
            <hr className="mb-5"/>
            <ul>

                {comments.length !== 0
                ? comments.map(comment => <li key={comment.id} className="mb-3">
                    {comment.body}
                    </li>)
                : <li>No comment</li> 
                }

            </ul>
        </div>
    )
}