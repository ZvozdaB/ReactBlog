import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sliceText } from "../../custom hooks/sliceText";
import { DeletePost } from "../../services/store/actions/posts";
import PostInfoBox from "../CommonUsed/PostInfoBox/PostInfoBox";
import SubMenu from "../CommonUsed/SubMenu/SubMenu";

export default function PostsCart({ post, userId }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let onDelete = () => {
    dispatch(DeletePost(post.id));
  };
  let onEdit = () => navigate(`/post/${post.id}/edit`);

  return (
    <div className="border-2 border-white mb-5 sm:mb-0 hover:border-sky-200 p-4 relative shadow-md rounded transition-shadow bg-white">
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
      <div className="font-bold text-xl mb-2">{post.title}</div>
      <p>{sliceText(post.body, 100)}</p>
      <Link to={"/post/" + post.id} className="absolute inset-0"></Link>
    </div>
  );
}
