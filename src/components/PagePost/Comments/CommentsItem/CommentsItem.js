import { useDispatch } from "react-redux";
import SubMenu from "../../../CommonUsed/SubMenu/SubMenu";
import { useUserById } from "../../../../custom hooks/useUserById";
import { DeletePostComment } from "../../../../services/store/actions/comments";
import AvatarIcon from "../../../CommonUsed/AvatarIcon/AvatarIcon";
import EditComment from "../EditComment/EditComment";

export default function CommentsItem({
  comment,
  editCommentHandler,
  editCommentNumber,
  userId,
}) {
  let dispatch = useDispatch();
  let onCancel = () => editCommentHandler(null);
  let onDelete = () => dispatch(DeletePostComment(comment.id, comment.postId));
  let user = useUserById(comment.userId);
  return (
    <>
      <li className="mb-3 flex group ">
        <AvatarIcon avatarId={user?.avatar} />
        {editCommentNumber === comment.id ? (
          <EditComment comment={comment} onCancel={onCancel} />
        ) : (
          <div className="grow relative pr-4">
            <p className="font-medium ">
              {user?.firstname} {user?.lastname}
            </p>
            <p>{comment.body}</p>
            {comment.userId === userId && (
              <SubMenu
                onEdit={() => editCommentHandler(comment.id)}
                onDelete={onDelete}
                deleteQuestion={"Sure you want to delete the comment ?"}
              ></SubMenu>
            )}
          </div>
        )}
      </li>
    </>
  );
}
