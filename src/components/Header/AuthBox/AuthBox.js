import { useSelector } from "react-redux";
import LoginBtn from "../LoginBtn/LoginBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import UserInfo from "../UserInfo/UserInfo";

export default function AuthBox() {
  let { user, isUserLogin } = useSelector((state) => ({
    user: state.auth.user,
    isUserLogin: state.auth.isUserLogin,
  }));
  return (
    <div className="flex items-center">
      {isUserLogin ? (
        <>
          <UserInfo user={user} />
          <LogOutBtn />
        </>
      ) : (
        <LoginBtn />
      )}
    </div>
  );
}
