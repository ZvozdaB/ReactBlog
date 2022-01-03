import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Btn from "../Btn";
import TextArea from "./FormComponents/TextArea";

export default function PostForm({ onSubmit, post }) {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(
    () => post && reset({ title: post.title, body: post.body }),
    [post]
  );
  return (
    <form className="py-6" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title" className="pb-1">
        Title
      </label>
      <TextArea
        id={"title"}
        register={register("title", {
          validate: (value) => !!value.trim() || "Title can't be empty",
        })}
        error={errors.title}
        placeholder={"Add title"}
      />
      <label htmlFor="body" className="pb-1">
        Post Text
      </label>
      <TextArea
        id={"body"}
        register={register("body", {
          validate: (value) => !!value.trim() || "Post can't be empty",
        })}
        error={errors.body}
        placeholder={"Add post text"}
        minRows={4}
      />
      <div className="w-full flex justify-end">
        <Btn>Add Post</Btn>
      </div>
    </form>
  );
}
