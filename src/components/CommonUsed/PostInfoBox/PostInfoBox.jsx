import { getDate } from "../../../custom hooks/getDate";
import { AvatarIcon } from "../AvatarIcon/AvatarIcon";

const PostInfoBox = ({ user, updatedAt }) => {
  return (
    <div className="mb-2  flex items-center">
      <AvatarIcon avatarId={user?.avatar} />
      <div className="flex flex-col">
        <span className="font-medium ">
          {user?.firstname} {user?.lastname}
        </span>
        <span>{getDate(updatedAt)}</span>
      </div>
    </div>
  );
};

export { PostInfoBox };
