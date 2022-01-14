import { useSelector } from "react-redux";
import { AvatarIcon } from "../components/CommonUsed/AvatarIcon/AvatarIcon";

const UserProfile = () => {
  let { user } = useSelector((state) => ({ user: state.auth.user }));
  return (
    <main className="wrapper pt-6">
      <div className="p-4 bg-white rounded-md shadow-md font-medium flex">
        <AvatarIcon avatarId={user.avatar} />
        <div>
          <h2>
            User name:{" "}
            <span className="font-normal">
              {user?.firstname} {user?.lastname}
            </span>
          </h2>
          <p>
            Age: <span className="font-normal">{user.age} years</span>
          </p>
          <p>
            Email: <span className="font-normal">{user.email}</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export { UserProfile };
