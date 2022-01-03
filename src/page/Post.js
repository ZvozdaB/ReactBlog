import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import CommentForm from "../components/Form/CommentForm";
import Loader from "../components/Loader/Loader";
import PostDetails from "../components/PostDetails";
import { NextBtn, PostNavBtn, PreviousBtn } from "../custom hooks/PostNavBtn";
import { getPostComments } from "../services/store/actions/comments";
import { findPostByID, getPostById } from "../services/store/actions/posts";

export default function Post() {
  let dispatch = useDispatch();
  let { postId } = useParams();
  let { posts, post, lastPost, loading, loadingComments, user, isUserLogin } =
    useSelector((state) => ({
      posts: state.posts.posts,
      post: state.posts.post,
      lastPost: state.posts.lastPost,
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
    <main>
      <div className="wrapper ">
        <div className="flex py-4 items-center justify-between text-gray-100">
          <PostNavBtn postId={postId} />
        </div>
        {loading ? <Loader /> : <PostDetails post={post} userId={user.id} />}
        <p className="text-lg mt-5">Comments</p>
        <hr className="mb-5" />
        {isUserLogin ? (
          <CommentForm />
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
