import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { LogIn } from "../../services/store/actions/auth"

import Btn from "../Btn"
import CenterPopUp from "../CenterPopUp"
import Input from "./Input"

export default function LogInForm(props){
    let dispatch = useDispatch()
    let {error,user} = useSelector(state => ({
        error: state.auth.error,
        user: state.auth.user
    }))
    let { register, handleSubmit, formState: { errors } } = useForm()
    let onSubmit = (data) => dispatch(LogIn(data.email, data.password))

    if(user?.firstname){
        props.logInHeandler()
    }

    return (
        <CenterPopUp  onClick={props.logInHeandler}>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-80 py-6 px-8 bg-white  rounded-lg " noValidate >
                <p className="text-lg font-bold text-center mb-4">Login</p>
                {error && <p className="text-red-400">{error}</p>}
                <Input 
                    label="Email Address" 
                    id="email" 
                    type="email" 
                    placeholder="Enter email"
                    register={register("email",{ 
                        required: "Please enter your email.",
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Not email' 
                        }
                    })}
                    error={errors.email}
                />
                <Input 
                    label="Password" 
                    id="password" 
                    type="password" 
                    placeholder="Password"
                    register={register("password",{ 
                        required: "Please enter your password.",
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters' 
                        }
                    })}
                    error={errors.password}
                />
                <Btn className="w-full">Submit</Btn>
                <p className="p-1">
                    Don't have an account? 
                    <span className="text-blue-500" onClick={props.singLogChange}> Sing Up</span>
                </p>
            </form>
        </CenterPopUp>
    )
}

