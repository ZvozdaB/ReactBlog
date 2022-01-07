import { useState } from "react";
import { useSelector } from "react-redux";
import CommentsItem from "./CommentsItem/CommentsItem";


export default function Comments() {
  let { comments, userId } = useSelector((state) => ({
    comments: state.comments.comments,
    userId: state.auth.user.id,
  }));
  let [editCommentNumber, setEditComment] = useState(null);
  let editCommentHandler = (commentId) => setEditComment(commentId);
  return (
    <ul>
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <CommentsItem
            userId={userId}
            key={comment.id}
            comment={comment}
            editCommentHandler={editCommentHandler}
            editCommentNumber={editCommentNumber}
          />
        ))
      ) : (
        <li>No comment</li>
      )}
    </ul>
  );
}
