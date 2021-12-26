import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LogOut } from "../services/store/actions/auth";
import LogInForm from "./Form/LogInForm";
import RegisterForm from "./Form/RegisterForm";
import QuestionBox from "./QuestionBox";

export default function Header(){
    let dispatch = useDispatch()
    let {user} = useSelector(state => ({
        user: state.auth.user
    }))

    let [logInOpen, setLogInOpen] = useState(false)
    const logInHandler = () => setLogInOpen(!logInOpen)

    let [singUpOpen, setSingUpOpen] = useState(false)
    const singUpHandler = () => setSingUpOpen(!singUpOpen)
    
    let singLogChange = () => {setSingUpOpen(!singUpOpen); setLogInOpen(!logInOpen)}

    let [logOutQustion,setLogOutQustion] = useState(false)
    let logOutHandler = () => setLogOutQustion(!logOutQustion)
    let logOut = () =>{ dispatch(LogOut()); logOutHandler() }
    



    return (
        <>
        <div className="bg-blue-400  text-white">
            <nav className="flex container mx-auto h-14 items-center">
                <NavLink to="/" className="pr-4">Home</NavLink>
                <NavLink to='/announcements' className={"pr-4"}>Announcements</NavLink>
                {user?.firstname
                    ?<div className="ml-auto">
                        <span>{user.firstname}</span>
                        <span onClick={logOutHandler} className="ml-4 cursor-pointer">LogOut</span>
                    </div>
                    :<div className="ml-auto" onClick={logInHandler}>
                        <div>Login</div>
                    </div>}
            </nav>  
        </div>
        {logOutQustion && <QuestionBox  YesText="Log Out"  YesClick={logOut} NoClick={logOutHandler} question="Sure you want to Log Out ?"/>}
        {logInOpen && <LogInForm  logInHeandler={logInHandler} singLogChange={singLogChange}/>}
        {singUpOpen && <RegisterForm singUpHandler={singUpHandler} singLogChange={singLogChange}/>}
        </>
    )
}