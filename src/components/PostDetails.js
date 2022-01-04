import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeletePost } from "../services/store/actions/posts";
import PostInfoBox from "./PostInfoBox/PostInfoBox";
import SubMenu from "../custom hooks/SubMenu";

export default function PostDetails({ post, userId }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let onDelete = () => {
    navigate("/");
    dispatch(DeletePost(post.id));
  };
  let onEdit = () => navigate(`/post/${post.id}/edit`);
  return (
    <div>
      <div className="relative">
        <PostInfoBox updatedAt={post.updatedAt} userId={post.userId} />
        {post.userId === userId && (
          <SubMenu
            onDelete={onDelete}
            deleteQuestion="Sure you want to delete the post ?"
            onEdit={onEdit}
          />
        )}
      </div>
      <div className="font-bold text-xl mb-2">{post?.title}</div>
      <p>{post?.body}</p>
    </div>
  );
}
