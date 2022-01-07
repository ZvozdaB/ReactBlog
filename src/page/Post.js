import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../components/PagePost/Comments/Comments";
import CommentForm from "../components/Form/CommentForm";
import Loader from "../components/Loader/Loader";
import PostDetails from "../components/PagePost/PostDetails";
import { getPostComments } from "../services/store/actions/comments";
import { findPostByID, getPostById } from "../services/store/actions/posts";

export default function Post() {
  let dispatch = useDispatch();
  let { postId } = useParams();
  let { posts, post, loading, loadingComments, user, isUserLogin } =
    useSelector((state) => ({
      posts: state.posts.posts,
      post: state.posts.post,
      loading: state.posts.loading,
      loadingComments: state.comments.loading,
      user: state.auth.user,
      isUserLogin: state.auth.isUserLogin,
    }));

  useEffect(() => {
    let post = posts.find((post) => post.id === +postId);
    post ? dispatch(findPostByID(post)) : dispatch(getPostById(postId));
    dispatch(getPostComments(postId));
  }, [postId]);

  return (
    <main className="pb-12">
      <div className="wrapper py-4 ">
        {loading ? <Loader /> : <PostDetails post={post} userId={user.id} />}
        <p className="text-lg mt-5">Comments</p>
        <hr className="mb-5" />
        {isUserLogin ? (
          <CommentForm avatar={user.avatar} />
        ) : (
          <p className="mb-4 font-semibold underline">
            Only authorized users can comment
          </p>
        )}
        {loadingComments ? <Loader /> : <Comments />}
      </div>
    </main>
  );
}
