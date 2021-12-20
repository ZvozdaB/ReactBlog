export default function Comments({comments}){
    
    return(
            <ul>
                {comments.length !== 0
                ? comments.map(comment => <li key={comment.id} className="mb-3">
                    {comment.body}
                    </li>)
                : <li>No comment</li> 
                }
            </ul>
        
    )
}