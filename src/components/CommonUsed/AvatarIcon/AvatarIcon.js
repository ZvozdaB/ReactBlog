import Avatar from "../../../assets/avatar/avatar.svg";
import Avatar1 from "../../../assets/avatar/avatar-1.svg";
import Avatar2 from "../../../assets/avatar/avatar-2.svg";
import Avatar3 from "../../../assets/avatar/avatar-3.svg";
import Avatar4 from "../../../assets/avatar/avatar-4.svg";
import Avatar5 from "../../../assets/avatar/avatar-5.svg";
import Avatar6 from "../../../assets/avatar/avatar-6.svg";

const AvatarIcon = ({ avatarId = 0, className }) => {
  let avatarArr = [
    Avatar,
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
  ];
  if (avatarId > avatarArr.length || typeof avatarId !== "number") {
    avatarId = 0;
  }
  return (
    <img
      src={avatarArr[avatarId]}
      className={"h-10 mr-2 md:mr-4 " + className}
      alt="user avatar"
    />
  );
};

export { AvatarIcon };
