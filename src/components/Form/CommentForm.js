import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CreatePostComment } from "../../services/store/actions/comments";
import Btn from "../Btn";
import AvatarIcon from "../PostInfoBox/AvatarIcon";
import TextArea from "./FormComponents/TextArea";

export default function CommentForm() {
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
        <AvatarIcon />
        <TextArea
          className="grow"
          id="comment"
          placeholder="Enter comment"
          register={register("comment", {
            validate: (value) =>  !!value.trim() || "Comment cannot be empty",
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
