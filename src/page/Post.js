import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useParams } from "react-router-dom"
import Comments from "../components/Comments"
import CommentForm from "../components/Form/CommentForm"
import Loader from "../components/Loader/Loader"
import PostDetails from "../components/PostDetails"
import { NextBtn, PreviousBtn } from "../custom hooks/PostNavBtn"
import { getPostComments } from "../services/store/actions/comments"
import { findPostByID, getPostById } from "../services/store/actions/posts"


export default function Post(){
    let dispatch = useDispatch()
    let {postId} = useParams()
    let { posts, post, lastPost, loading, comments, loadingComments, user, isUserLogin } = useSelector(state => ({
        posts: state.posts.posts,
        post: state.posts.post,
        lastPost: state.posts.lastPost,
        loading: state.posts.loading,
        comments: state.comments.comments,
        loadingComments: state.comments.loading,
        user: state.auth.user,
        isUserLogin: state.auth.isUserLogin
    }))
   
    
    useEffect( function () {
        let post = posts.find(post => post.id === +postId)
        post ? dispatch(findPostByID(post)) : dispatch(getPostById(postId))
        dispatch(getPostComments(postId))
    },[postId])
    

    
    return(
        <main>
            <div className="container mx-auto ">
                <div className="flex py-4 items-center justify-between text-gray-100">
                    {PreviousBtn(postId)}
                    {NextBtn(postId,lastPost)}
                    
                </div>
                {loading ? <Loader /> : <PostDetails post={post} />}
                <p className="text-lg mt-5">Comments</p>
                <hr className="mb-5" />
                {user.id
                    ? <CommentForm />
                    :<p className="mb-4 font-semibold underline">Only authorized users can comment</p>
                }
                {loadingComments ? <Loader/> : <Comments comments={comments} userId={user?.postId}/>}
            </div>
        </main>
    )
}