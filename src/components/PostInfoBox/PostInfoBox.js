import { getDate } from "../../custom hooks/getDate";
import { useUserById } from "../../custom hooks/useUserById";
import AvatarIcon from "../AvatarIcon/AvatarIcon";

export default function PostInfoBox({ userId, updatedAt }) {
  let user = useUserById(userId);
  return (
    <div className="mb-2  flex items-center">
      <AvatarIcon num={user?.avatar} />
      <div className="flex flex-col">
        <span>
          {user?.firstname} {user?.lastname}
        </span>
        <span>{getDate(updatedAt)}</span>
      </div>
    </div>
  );
}
