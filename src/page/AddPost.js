import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/Form/PostForm";
import { CreatePost } from "../services/store/actions/posts";

export default function AddPost() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { isUserLogin } = useSelector((state) => ({
    isUserLogin: state.auth.isUserLogin,
  }));
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    navigate("/");
    dispatch(CreatePost(data));
  };
  return (
    <div className="wrapper">
      {isUserLogin ? (
        <PostForm onSubmit={onSubmit} />
      ) : (
        <p className="mb-4 font-semibold underline">
          Only authorized users can add post
        </p>
      )}
    </div>
  );
}
