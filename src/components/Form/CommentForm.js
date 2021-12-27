import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { CreatePostComment } from "../../services/store/actions/comments"
import Btn from "../Btn"
import Input from "./Input"

export default function CommentForm(){
    let {postId} = useParams()
    let dispatch = useDispatch()
    let { register, handleSubmit, formState: { errors }, reset } = useForm()
    let onSubmit = (data) => {
        dispatch(CreatePostComment({body: data.comment, postId}))
        reset({comment:"hhhhh"})
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pb-4">
            <Input 
                label="Add your comment"
                id="comment"
                placeholder="Enter comment"
                register={register("comment",{  
                        required: "Comment cannot be empty",
                    })}
                    error={errors.comment}
            />
            <Btn>Comment</Btn>
        </form>
    )
}