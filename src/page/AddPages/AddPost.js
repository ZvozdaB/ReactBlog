import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostForm } from "../../components/Form/PostForm";
import { CreatePost } from "../../services/store/actions/posts";

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLogin } = useSelector((state) => ({
    isUserLogin: state.auth.isUserLogin,
  }));

  const onSubmit = (data) => {
    dispatch(CreatePost(data));
    navigate("/");
  };
  return (
    <div className="wrapper py-4">
      <h2 className="text-center text-xl font-bold tracking-wide text-sky-600">
        Create new post
      </h2>
      {isUserLogin ? (
        <PostForm onSubmit={onSubmit} />
      ) : (
        <p className="mb-4 font-semibold underline">
          Only authorized users can add post
        </p>
      )}
    </div>
  );
};

export { AddPost };
