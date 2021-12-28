import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./page/Header";
import Post from "./page/Post";
import Home from "./page/Home";
import { getPostPages } from "./services/store/actions/posts";
import { isUserLogIn } from "./services/store/actions/auth";
import AddPost from "./page/AddPost";
import Announcements from "./page/Announcements";

function App() {
  let dispatch = useDispatch();
  let { currentPage } = useSelector((state) => ({
    currentPage: state.posts.currentPage,
  }));
  useEffect(() => dispatch(isUserLogIn()), []);
  useEffect(() => dispatch(getPostPages(currentPage)), [currentPage]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </>
  );
}

export default App;
