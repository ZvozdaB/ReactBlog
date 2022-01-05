import { Link } from "react-router-dom";
import AvatarIcon from "../../AvatarIcon/AvatarIcon";

export default function UserBox({ user }) {
  return (
    <div className="flex items-center mr-4">
      <Link to="/user" className="group ml-auto flex items-center">
        <AvatarIcon
          avatarId={user.avatar}
          className="border rounded-full group-hover:border-sky-900 transition"
        />
        <span className=" group-hover:text-sky-900 transition">
          {user.firstname} {user.lastname}
        </span>
      </Link>
    </div>
  );
}
