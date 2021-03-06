import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { UpdatePostComment } from "../../../../services/store/actions/comments";
import { Btn } from "../../../CommonUsed/Btn/Btn";
import { TextArea } from "../../../Form/FormComponents/TextArea";

const EditComment = ({ comment, onCancel }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ comment: commentText }) =>
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
        <Btn cancel className="ml-4" onClick={onCancel} type="button">
          Cancel
        </Btn>
      </div>
    </form>
  );
};

export { EditComment };
