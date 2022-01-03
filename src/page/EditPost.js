import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/Form/PostForm";
import {
  findPostByID,
  getPostById,
  UpdatePost,
} from "../services/store/actions/posts";

export default function EditPost() {
  let { postId } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { posts, post, user } = useSelector((state) => ({
    posts: state.posts.posts,
    post: state.posts.post,
    user: state.auth.user,
  }));

  let onSubmit = (data) => {
    navigate("/");
    dispatch(UpdatePost({ ...data, postId }));
  };
  useEffect(() => {
    let post = posts.find((post) => post.id === +postId);
    post ? dispatch(findPostByID(post)) : dispatch(getPostById(postId));
  }, [postId]);

  return (
    <div className="wrapper">
      {user.id === post.userId ? (
        <PostForm post={post} onSubmit={onSubmit} />
      ) : (
        <p className="mb-4 font-semibold underline">
          {user.firstname} you can edit only your post
        </p>
      )}
    </div>
  );
}
