import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../services/store/actions/auth";
import { Btn } from "../CommonUsed/Btn/Btn";
import { CenterPopUp } from "../CommonUsed/CenterPopUp/CenterPopUp";

import { Input } from "./FormComponents/Input";

const LogInForm = (props) => {
  let dispatch = useDispatch();
  let { error } = useSelector((state) => ({
    error: state.auth.error,
  }));
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  let onSubmit = (data) => {
    dispatch(LogIn(data.email, data.password));
    reset({ password: "" });
  };

  return (
    <CenterPopUp onClick={props.logInHandler}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-80 py-6 px-8 bg-slate-50  rounded-lg text-black "
        noValidate
      >
        <p className="text-lg font-bold text-center mb-4">Login</p>
        {error && <p className="text-red-400">{error}</p>}
        <Input
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter email"
          register={register("email", {
            required: "Please enter your email.",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Not email",
            },
          })}
          error={errors.email}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          register={register("password", {
            required: "Please enter your password.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password}
        />
        <Btn className="w-full">Submit</Btn>
        <p className="p-1">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={props.singLogChange}
          >
            Sing Up
          </span>
        </p>
      </form>
    </CenterPopUp>
  );
};

export { LogInForm };
