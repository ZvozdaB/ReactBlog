import { useState } from "react";
import { useSelector } from "react-redux";
import CommentsItem from "./CommentsItem/CommentsItem";
import UserComment from "./UserComment/UserComment";

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
        comments.map((comment) =>
          comment.userId === userId ? (
            <UserComment
              key={comment.id}
              comment={comment}
              editCommentHandler={editCommentHandler}
              editCommentNumber={editCommentNumber}
            />
          ) : (
            <CommentsItem key={comment.id} comment={comment} />
          )
        )
      ) : (
        <li>No comment</li>
      )}
    </ul>
  );
}
