import { getDate } from "../../custom hooks/getDate";
import AvatarIcon from "./AvatarIcon";

export default function PostInfoBox({ username, updatedAt }) {
  return (
    <div className="mb-2  flex items-center">
      <AvatarIcon />
      <div className="flex flex-col">
        <span>user name</span>
        <span>{getDate(updatedAt)}</span>
      </div>
    </div>
  );
}
