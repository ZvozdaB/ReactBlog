// import { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import Btn from "../components/Btn/Btn";
// import { getNextPage } from "../services/store/actions/posts";

export function PostNavBtn() {
  let PreviousBtn = <span></span>;
  let NextBtn = <span></span>;

  // if (posts[0]?.id !== +postId) {
  //   let previousPostId = posts[postIndex - 1]?.id;
  //   PreviousBtn = (
  //     <Btn>
  //       <Link to={"/post/" + previousPostId}> &lt; Previous</Link>
  //     </Btn>
  //   );
  // }

  // let nextPostId = posts[postIndex + 1]?.id;
  // if (nextPostId) {
  //   NextBtn = (
  //     <Btn>
  //       <Link to={"/post/" + nextPostId}>Next &gt;</Link>
  //     </Btn>
  //   );
  // }

  return (
    <>
      {PreviousBtn}
      {NextBtn}
    </>
  );
}
