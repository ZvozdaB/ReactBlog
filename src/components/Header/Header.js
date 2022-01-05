import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { LogOut, setError } from "../../services/store/actions/auth";
import LogInForm from "../Form/LogInForm";
import RegisterForm from "../Form/RegisterForm";
import QuestionBox from "../../custom hooks/QuestionBox";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { usePopUp } from "../../custom hooks/usePopUp";
import UserBox from "./UserBox/UserBox";
import Btn from "../Btn/Btn";
import NavHeader from "./NavHeader/NavHeader";

export default function Header() {
  let dispatch = useDispatch();
  let { user, isUserLogin } = useSelector((state) => ({
    user: state.auth.user,
    isUserLogin: state.auth.isUserLogin,
  }));

  const resetError = () => dispatch(setError(""));

  let logInOpen = usePopUp(resetError);
  let singUpOpen = usePopUp(resetError);
  let logOutQuestionOpen = usePopUp();

  let singLogChange = () => {
    singUpOpen.handler();
    logInOpen.handler();
  };

  let logOut = () => {
    dispatch(LogOut());
    logOutQuestionOpen.handler();
  };

  useEffect(() => {
    singUpOpen.reset();
    logInOpen.reset();
  }, [isUserLogin]);

  return (
    <>
      <header className="bg-blue-400  text-white">
        <div className="flex wrapper h-14 items-center justify-between">
          <NavHeader />
          <div className="flex items-center">
            {isUserLogin ? (
              <>
                <UserBox user={user} />
                <Btn header onClick={logOutQuestionOpen.handler}>
                  LogOut
                </Btn>
              </>
            ) : (
              <Btn header onClick={logInOpen.handler}>
                LogIn
              </Btn>
            )}
          </div>
        </div>
      </header>
      {logOutQuestionOpen.value && (
        <QuestionBox
          YesText="Log Out"
          YesClick={logOut}
          NoClick={logOutQuestionOpen.handler}
          question="Sure you want to Log Out ?"
        />
      )}
      {logInOpen.value && (
        <LogInForm
          logInHandler={logInOpen.handler}
          singLogChange={singLogChange}
        />
      )}
      {singUpOpen.value && (
        <RegisterForm
          singUpHandler={singUpOpen.handler}
          singLogChange={singLogChange}
        />
      )}
    </>
  );
}
