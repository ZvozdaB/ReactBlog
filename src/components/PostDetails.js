import AvatarIcon from "./PostInfoBox/AvatarIcon";
import PostInfoBox from "./PostInfoBox/PostInfoBox";

export default function PostDetails({ post }) {
  return (
    <div>
      <PostInfoBox updatedAt={post.updatedAt} />
      <div className="font-bold text-xl mb-2">{post?.title}</div>
      <p>{post?.body}</p>
    </div>
  );
}
