import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "../../services/store/actions/auth";
import Btn from "../CommonUsed/Btn/Btn";
import CenterPopUp from "../CommonUsed/CenterPopUp/CenterPopUp";
import { AvatarSelector } from "./FormComponents/AvatarSelector";
import Input from "./FormComponents/Input";

export default function RegisterForm(props) {
  let dispatch = useDispatch();
  let [avatarId, setAvatarId] = useState(1);
  let { error } = useSelector((state) => ({
    error: state.auth.error,
  }));
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let onSubmit = (data) =>
    dispatch(UserRegister({ ...data, avatar: avatarId }));

  return (
    <CenterPopUp onClick={props.singUpHandler}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-80 py-6 px-8 bg-slate-50 rounded-lg text-black"
      >
        <p className="text-lg font-bold text-center mb-4 ">Register</p>
        {error && <p className="text-red-400">{error}</p>}
        <Input
          label="First Name"
          id="firstname"
          placeholder="Enter first name"
          register={register("firstname", {
            required: "Please enter your first name.",
          })}
          error={errors.firstname}
        />
        <Input
          label="Last Name"
          id="lastname"
          placeholder="Enter last name"
          register={register("lastname", {
            required: "Please enter your last name.",
          })}
          error={errors.lastname}
        />
        <Input
          label="Age"
          id="age"
          type="number"
          placeholder="Enter age"
          register={register("age", {
            valueAsNumber: true,
            required: "Please enter your age.",
            min: {
              value: 0,
              message: "You are so young ?",
            },
            max: {
              value: 80,
              message: "You are so old ?",
            },
          })}
          error={errors.age}
        />
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
        <p className="mb-1">Select Avatar</p>
        <AvatarSelector setAvatarId={setAvatarId} avatarId={avatarId} />
        <Btn className="w-full">Submit</Btn>
        <p className="p-1">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={props.singLogChange}
          >
            Log In
          </span>
        </p>
      </form>
    </CenterPopUp>
  );
}
