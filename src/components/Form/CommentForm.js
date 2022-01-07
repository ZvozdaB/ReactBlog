import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CreatePostComment } from "../../services/store/actions/comments";
import AvatarIcon from "../CommonUsed/AvatarIcon/AvatarIcon";
import Btn from "../CommonUsed/Btn/Btn";

import TextArea from "./FormComponents/TextArea";

export default function CommentForm({ avatar }) {
  let { postId } = useParams();
  let dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  let onSubmit = (data) => {
    dispatch(CreatePostComment({ body: data.comment, postId }));
    reset({ comment: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-4">
      <div className="flex">
        <AvatarIcon avatarId={avatar} />
        <TextArea
          className="grow"
          id="comment"
          placeholder="Enter comment"
          register={register("comment", {
            validate: (value) => !!value.trim() || "Comment can't be empty",
          })}
          error={errors.comment}
        />
      </div>
      <div className="flex">
        <Btn className="ml-auto">Comment</Btn>
      </div>
    </form>
  );
}
