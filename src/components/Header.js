import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LogOut, setError } from "../services/store/actions/auth";
import LogInForm from "./Form/LogInForm";
import RegisterForm from "./Form/RegisterForm";
import QuestionBox from "../custom hooks/QuestionBox";

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

  return (
    <>
      <div className="bg-blue-400  text-white">
        <nav className="flex container mx-auto h-14 items-center">
          <NavLink to="/" className="pr-4">
            Home
          </NavLink>
          <NavLink to="/announcements" className={"pr-4"}>
            Announcements
          </NavLink>
          {isUserLogin ? (
            <div className="ml-auto">
              <span>
                {user.firstname} {user.lastname}
              </span>
              <span onClick={logOutHandler} className="ml-4 cursor-pointer">
                LogOut
              </span>
            </div>
          ) : (
            <div className="ml-auto cursor-pointer" onClick={logInHandler}>
              <div>Login</div>
            </div>
          )}
        </nav>
      </div>
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
