import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sliceText } from "../custom hooks/sliceText";
import { DeletePost } from "../services/store/actions/posts";
import PostInfoBox from "./PostInfoBox/PostInfoBox";
import SubMenu from "../custom hooks/SubMenu";

export default function PostsCart({ post, userId }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let onDelete = () => {
    dispatch(DeletePost(post.id));
  };
  let onEdit = () => navigate(`/post/${post.id}/edit`);
  return (
    <div className="border border-sky-200  p-4">
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
      <div className="font-bold text-xl mb-2">
        <Link to={"/post/" + post.id}>{post.title}</Link>
      </div>
      <p>
        <Link to={"/post/" + post.id}>{sliceText(post.body, 100)}</Link>
      </p>
    </div>
  );
}
