import Avatar from "../../assets/avatar/avatar.svg";
import Avatar1 from "../../assets/avatar/avatar-1.svg";
import Avatar2 from "../../assets/avatar/avatar-2.svg";
import Avatar3 from "../../assets/avatar/avatar-3.svg";
import Avatar4 from "../../assets/avatar/avatar-4.svg";
import Avatar5 from "../../assets/avatar/avatar-5.svg";
import Avatar6 from "../../assets/avatar/avatar-6.svg";

export default function AvatarIcon({ num = 0, className }) {
  let avatarArr = [Avatar, Avatar1];
  return <img src={avatarArr[num]} className={"h-10 mr-4 " + className} />;
}
