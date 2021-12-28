import { useState } from "react";
import { useDispatch } from "react-redux";
import QuestionBox from "../../../custom hooks/QuestionBox";
import { DeletePostComment } from "../../../services/store/actions/comments";
import Btn from "../../Btn";
import AvatarIcon from "../../PostInfoBox/AvatarIcon";
import EditComment from "./EditComment/EditComment";

export default function UserComment({
  comment,
  editCommentHandler,
  editCommentNumber,
}) {
  let dispatch = useDispatch();
  let onCancel = () => editCommentHandler(null);
  let [deleteQuestion, setDeleteQuestion] = useState(false);
  let deleteHandler = () => setDeleteQuestion(!deleteQuestion);
  let deletePost = () => {
    dispatch(DeletePostComment(comment.id, comment.postId));
    deleteHandler();
  };
  return (
    <>
      <li className="mb-3 flex group">
        <AvatarIcon />
        {editCommentNumber === comment.id ? (
          <EditComment comment={comment} onCancel={onCancel} />
        ) : (
          <div className="grow">
            {comment.body}
            <div className="w-full hidden group-hover:flex justify-end">
              <Btn onClick={() => editCommentHandler(comment.id)}>Edit</Btn>
              <Btn className="bg-slate-500 ml-4" onClick={deleteHandler}>
                Delete
              </Btn>
            </div>
          </div>
        )}
      </li>
      {deleteQuestion && (
        <QuestionBox
          YesText="Delete"
          YesClick={deletePost}
          NoClick={deleteHandler}
          question="Sure you want to delete the comment ?"
        />
      )}
    </>
  );
}
