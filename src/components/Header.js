import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { LogOut, setError } from "../services/store/actions/auth";
import LogInForm from "./Form/LogInForm";
import RegisterForm from "./Form/RegisterForm";
import QuestionBox from "../custom hooks/QuestionBox";
import Btn from "./Btn/Btn";
import AvatarIcon from "./AvatarIcon/AvatarIcon";
const navLink = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Announcements", path: "/announcements" },
  // { id: 3, text: "Add Post", path: "/addPost", add: true },
  // {
  //   id: 4,
  //   text: "Add Announcements",
  //   path: "/Announcements/addAnno",
  //   add: true,
  // },
];

export default function Header() {
  let dispatch = useDispatch();
  let { user, isUserLogin } = useSelector((state) => ({
    user: state.auth.user,
    isUserLogin: state.auth.isUserLogin,
  }));

  let [logInOpen, setLogInOpen] = useState(false);
  const logInHandler = () => {
    setLogInOpen(!logInOpen);
    dispatch(setError(""));
  };

  let [singUpOpen, setSingUpOpen] = useState(false);
  const singUpHandler = () => {
    setSingUpOpen(!singUpOpen);
    dispatch(setError(""));
  };

  let singLogChange = () => {
    setSingUpOpen(!singUpOpen);
    setLogInOpen(!logInOpen);
    dispatch(setError(""));
  };

  let [logOutQuestion, setLogOutQuestion] = useState(false);
  let logOutHandler = () => setLogOutQuestion(!logOutQuestion);
  let logOut = () => {
    dispatch(LogOut());
    logOutHandler();
  };

  useEffect(() => {
    setLogInOpen(false);
    setSingUpOpen(false);
  }, [isUserLogin]);

  let [add, setAdd] = useState(false);
  let addHandler = () => setAdd(!add);
  return (
    <>
      <header className="bg-blue-400  text-white">
        <nav className="flex wrapper h-14 items-center ">
          {navLink.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.path}
              className={({ isActive }) => {
                let classes = "pr-4 font-medium hover:text-sky-900 transition";
                classes += isActive ? " text-sky-900 " : "";
                return classes;
              }}
            >
              {nav.text}
            </NavLink>
          ))}
          <div className="relative pr-4 font-medium ">
            <p
              className="hover:text-sky-900 transition cursor-pointer"
              onClick={addHandler}
            >
              <span className="text-lg font-medium">+ </span>Add
            </p>

            {add && (
              <>
                <div className="absolute top-full -left-2 bg-blue-400 rounded-md p-2 z-20 w-max flex flex-col">
                  <Link to="/addPost" className="hover:text-sky-900 ">
                    Post
                  </Link>
                  <Link to="/addAnno" className="hover:text-sky-900 ">
                    Announcements
                  </Link>
                </div>
                <div className="fixed inset-0 z-10" onClick={addHandler}></div>
              </>
            )}
          </div>
          {isUserLogin ? (
            <div className="ml-auto flex items-center">
              <Link to="/user" className="group ml-auto flex items-center">
                <AvatarIcon
                  avatarId={user.avatar}
                  className="border rounded-full group-hover:border-sky-900 transition"
                />
                <span className=" group-hover:text-sky-900 transition">
                  {user.firstname} {user.lastname}
                </span>
              </Link>
              <button
                onClick={logOutHandler}
                className="ml-4 cursor-pointer border py-1 px-3 rounded-md hover:text-sky-900 hover:border-sky-900 transition"
              >
                LogOut
              </button>
            </div>
          ) : (
            <button
              className="ml-auto cursor-pointer border py-1 px-3 rounded-md hover:text-sky-900 hover:border-sky-900 transition"
              onClick={logInHandler}
            >
              Login
            </button>
          )}
        </nav>
      </header>
      {logOutQuestion && (
        <QuestionBox
          YesText="Log Out"
          YesClick={logOut}
          NoClick={logOutHandler}
          question="Sure you want to Log Out ?"
        />
      )}
      {logInOpen && (
        <LogInForm logInHandler={logInHandler} singLogChange={singLogChange} />
      )}
      {singUpOpen && (
        <RegisterForm
          singUpHandler={singUpHandler}
          singLogChange={singLogChange}
        />
      )}
    </>
  );
}
