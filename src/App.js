import { useEffect, useState } from "react";
import { Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import Home from "./page/Home";
import { getPostPages } from "./services/Api";

function App() {
  let [posts,setPosts] = useState([]);
  let [postPage,setPostPage] = useState(1)
  let [postEnd,setPostEnd] = useState(false)

  useEffect(() => getPostPages(postPage)
    .then(resp => {
      resp.length !== 0 
      ? setPosts([...posts, ...resp])
      : setPostEnd(true)
    }) 
    ,[postPage])

  function morePosts(){
    setPostPage(++postPage)
  }

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home posts={posts} morePosts={morePosts} postEnd={postEnd}/>} />
        <Route path="/post/:postId" element={<Post posts={posts}/>} />
        
      </Routes>
    </>
  );
}

export default App;
