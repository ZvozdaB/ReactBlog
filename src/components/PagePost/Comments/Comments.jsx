import { useState } from "react";
import { useSelector } from "react-redux";
import { CommentsItem } from "./CommentsItem/CommentsItem";

const Comments = () => {
  const { comments, userId } = useSelector((state) => ({
    comments: state.comments.comments,
    userId: state.auth.user.id,
  }));
  const [editCommentNumber, setEditComment] = useState(null);
  const editCommentHandler = (commentId) => setEditComment(commentId);
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
};

export { Comments };
