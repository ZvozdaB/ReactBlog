import AvatarIcon from "../../PostInfoBox/AvatarIcon";

export default function CommentsItem({ comment }) {
  return (
    <li className="mb-3 flex">
      <AvatarIcon />
      {comment.body}
    </li>
  );
}
