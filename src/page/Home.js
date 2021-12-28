import { useDispatch, useSelector } from "react-redux";
import Btn from "../components/Btn";
import Loader from "../components/Loader/Loader";
import PostsCart from "../components/PostsCart";
import { getNextPage, getPostPages } from "../services/store/actions/posts";

export default function Home(props) {
  let dispatch = useDispatch();
  let { posts, lastPage, loading, curentPage } = useSelector((state) => ({
    posts: state.posts.posts,
    lastPage: state.posts.lastPage,
    loading: state.posts.loading,
    curentPage: state.posts.curentPage,
  }));

  return (
    <main className="wrapper pb-24">
      <div className="grid auto-rows-max grid-cols-2 gap-6 pt-5 mb-6">
        {posts.map((post) => (
          <PostsCart
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            updatedAt={post.updatedAt}
          />
        ))}
      </div>
      {loading || lastPage === curentPage || (
        <div className="flex justify-center">
          <Btn onClick={() => dispatch(getNextPage())}>More posts</Btn>
        </div>
      )}
      {loading && <Loader />}
    </main>
  );
}
