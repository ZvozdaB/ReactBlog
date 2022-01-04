import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { UpdatePostComment } from "../../../../services/store/actions/comments";
import Btn from "../../../Btn/Btn";
import TextArea from "../../../Form/FormComponents/TextArea";

export default function EditComment({ comment, onCancel }) {
  let dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let onSubmit = ({ comment: commentText }) =>
    dispatch(
      UpdatePostComment({
        commentText,
        commentId: comment.id,
        postId: comment.postId,
      })
    );

  useEffect(() => reset({ comment: comment.body }), []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grow flex flex-wrap">
      <TextArea
        className="grow"
        id="comment"
        placeholder="Enter comment"
        register={register("comment", {
          validate: (value) => !!value.trim() || "Comment cannot be empty",
        })}
        error={errors.comment}
      />
      <div className="w-full flex justify-end">
        <Btn>Submit</Btn>
        <Btn className="bg-slate-500 ml-4" onClick={onCancel} type="button">
          Cancel
        </Btn>
      </div>
    </form>
  );
}
