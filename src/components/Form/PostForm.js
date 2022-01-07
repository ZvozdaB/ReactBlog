import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Btn from "../CommonUsed/Btn/Btn";
import TextArea from "./FormComponents/TextArea";

export default function PostForm({
  onSubmit,
  textObg,
  label = { title: "Title", body: "Post Text" },
  placeholder = { title: "Add title", body: " Add post text" },
}) {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(
    () => textObg && reset({ title: textObg.title, body: textObg.body }),
    [textObg]
  );
  return (
    <form className="py-6" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title" className=" block mb-1 font-medium">
        {label.title}
      </label>
      <TextArea
        id={"title"}
        register={register("title", {
          validate: (value) => !!value.trim() || "Title can't be empty",
        })}
        error={errors.title}
        placeholder={placeholder.title}
      />
      <label htmlFor="body" className=" block mb-1 font-medium">
        {label.body}
      </label>
      <TextArea
        id={"body"}
        register={register("body", {
          validate: (value) => !!value.trim() || "Post can't be empty",
        })}
        error={errors.body}
        placeholder={placeholder.body}
        minRows={4}
      />
      <div className="w-full flex justify-end">
        <Btn>Submit</Btn>
      </div>
    </form>
  );
}
