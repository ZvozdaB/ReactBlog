import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import Post from "./page/Post";
import Home from "./page/Home";
import { getPostPages } from "./services/store/actions/posts";
import { isUserLogIn } from "./services/store/actions/auth";
import { getDate } from "./custom hooks/getDate";

function App() {
  let dispatch = useDispatch()
  let { curentPage } = useSelector(state => ({
    curentPage: state.posts.curentPage
  }))
  useEffect(() => dispatch(isUserLogIn()),[])
  useEffect(() => dispatch(getPostPages(curentPage)),[curentPage])
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        
      </Routes>
    </>
  );
}

export default App;
