import { useDispatch, useSelector } from "react-redux";
import Btn from "../components/Btn/Btn";
import Loader from "../components/Loader/Loader";
import PostsCart from "../components/PostsCart";
import { getNextPage } from "../services/store/actions/posts";

export default function Home(props) {
  let dispatch = useDispatch();
  let { posts, lastPage, loading, currentPage, user } = useSelector(
    (state) => ({
      posts: state.posts.posts,
      lastPage: state.posts.lastPage,
      loading: state.posts.loading,
      currentPage: state.posts.currentPage,
      user: state.auth.user,
    })
  );

  return (
    <main className="wrapper pb-24">
      <div className="grid auto-rows-max grid-cols-2 gap-6 pt-5 mb-6">
        {posts.map((post) => (
          <PostsCart key={post.id} post={post} userId={user.id} />
        ))}
      </div>
      {loading || lastPage === currentPage || (
        <div className="flex justify-center">
          <Btn onClick={() => dispatch(getNextPage())}>More posts</Btn>
        </div>
      )}
      {loading && <Loader />}
    </main>
  );
}
