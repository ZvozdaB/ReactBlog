import { useDispatch } from "react-redux";
import { usePopUp } from "../../../custom hooks/usePopUp";
import { setError } from "../../../services/store/actions/auth";
import { Btn } from "../../CommonUsed/Btn/Btn";
import { LogInForm } from "../../Form/LogInForm";
import { RegisterForm } from "../../Form/RegisterForm";

const LoginBtn = () => {
  const dispatch = useDispatch();
  const resetError = () => dispatch(setError(""));
  const logInOpen = usePopUp(resetError);
  const singUpOpen = usePopUp(resetError);
  const singLogChange = () => {
    singUpOpen.handler();
    logInOpen.handler();
  };
  return (
    <>
      <Btn header onClick={logInOpen.handler} className>
        Login
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
};

export { LoginBtn };
