import { useDispatch } from "react-redux";
import { usePopUp } from "../../../custom hooks/usePopUp";
import { LogOut } from "../../../services/store/actions/auth";
import Btn from "../../CommonUsed/Btn/Btn";
import QuestionBox from "../../CommonUsed/QuestionBox/QuestionBox";

export default function LogOutBtn() {
  let dispatch = useDispatch();
  let logOutQuestionOpen = usePopUp();
  let logOut = () => {
    dispatch(LogOut());
    logOutQuestionOpen.handler();
  };

  return (
    <>
      <Btn header onClick={logOutQuestionOpen.handler}>
        LogOut
      </Btn>
      {logOutQuestionOpen.value && (
        <QuestionBox
          YesText="Log Out"
          YesClick={logOut}
          NoClick={logOutQuestionOpen.handler}
          question="Sure you want to Log Out ?"
        />
      )}
    </>
  );
}
