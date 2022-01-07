import { useDispatch } from "react-redux";
import { usePopUp } from "../../../custom hooks/usePopUp";
import { setError } from "../../../services/store/actions/auth";
import Btn from "../../CommonUsed/Btn/Btn";
import LogInForm from "../../Form/LogInForm";
import RegisterForm from "../../Form/RegisterForm";

export default function LoginBtn() {
  let dispatch = useDispatch();
  const resetError = () => dispatch(setError(""));
  let logInOpen = usePopUp(resetError);
  let singUpOpen = usePopUp(resetError);
  let singLogChange = () => {
    singUpOpen.handler();
    logInOpen.handler();
  };
  return (
    <>
      <Btn header onClick={logInOpen.handler}>
        LogIn
      </Btn>
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
