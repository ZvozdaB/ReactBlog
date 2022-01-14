import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CreatePostComment } from "../../services/store/actions/comments";
import { AvatarIcon } from "../CommonUsed/AvatarIcon/AvatarIcon";
import { Btn } from "../CommonUsed/Btn/Btn";
import { TextArea } from "./FormComponents/TextArea";

const CommentForm = ({ avatar }) => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
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
};

export { CommentForm };
