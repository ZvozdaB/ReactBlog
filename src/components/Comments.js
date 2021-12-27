export default function Comments({comments, userId}){
    
    return(
            <ul>
                {comments.length !== 0
                ? comments.map(comment => <li key={comment.id} className="mb-3">
                    {comment.body}
                    {comment.userId === userId && <span className="ml-auto">delete</span>}
                    </li>)
                : <li>No comment</li> 
                }
            </ul>
        
    )
}