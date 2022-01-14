import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {Post} from "./page/Post";
import {Home} from "./page/Home";
import { getPostPages } from "./services/store/actions/posts";
import { isUserLogIn } from "./services/store/actions/auth";
import {AddPost} from "./page/AddPages/AddPost";
import {Announcements} from "./page/Announcements";
import {Header} from "./components/Header/Header";
import{ EditPost} from "./page/EditPages/EditPost";
import { getAnnoPages } from "./services/store/actions/announcements";
import {EditAnno} from "./page/EditPages/EditAnno";
import{ AddAnno} from "./page/AddPages/AddAnno";
import {UserProfile} from "./page/UserProfile";

const App = () => {
  let dispatch = useDispatch();
  let { currentPage, currentAnnoPage } = useSelector((state) => ({
    currentPage: state.posts.currentPage,
    currentAnnoPage: state.anno.currentAnnoPage,
  }));
  useEffect(() => {
    dispatch(isUserLogIn());
  }, []);
  useEffect(() => dispatch(getPostPages(currentPage)), [currentPage]);
  useEffect(() => dispatch(getAnnoPages(currentAnnoPage)), [currentAnnoPage]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/addAnno" element={<AddAnno />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post/:postId/edit" element={<EditPost />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/announcements/:annoId/edit" element={<EditAnno />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
