import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm } from "../../components/Form/PostForm";
import {
  findPostByID,
  getPostById,
  UpdatePost,
} from "../../services/store/actions/posts";

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, post, user } = useSelector((state) => ({
    posts: state.posts.posts,
    post: state.posts.post,
    user: state.auth.user,
  }));

  const onSubmit = (data) => {
    navigate("/");
    dispatch(UpdatePost({ ...data, postId }));
  };
  useEffect(() => {
    const post = posts.find((post) => post.id === +postId);
    post ? dispatch(findPostByID(post)) : dispatch(getPostById(postId));
  }, [postId]);

  return (
    <div className="wrapper py-4">
      <h2 className="text-center text-xl font-bold tracking-wide text-sky-600">
        Edit your post
      </h2>
      {user.id === post.userId ? (
        <PostForm textObg={post} onSubmit={onSubmit} />
      ) : (
        <p className="mb-4 font-semibold underline">
          {user?.firstname || ""} you can edit only your post
        </p>
      )}
    </div>
  );
};

export { EditPost };
