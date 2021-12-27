import { fetchLogIN, fetchRegister } from "../../Api"
import { AUTH_LOGOUT, AUTH_SET_ERROR, AUTH_SET_USER } from "./actionType"


export function LogIn(email,password){
    return async dispatch => {
        fetchLogIN(email,password)
            .then((user) => {
                localStorage.setItem("user",JSON.stringify(user))
                dispatch(setUser(user.user))
                dispatch(setError(""))
            })
            .catch(err => dispatch(setError("Email or password not correct")) )
    }
}
export function UserRegist(userData){
    return async dispatch => {
        fetchRegister(userData)
            .then((user) => {
                localStorage.setItem("user",JSON.stringify(user))
                dispatch(setUser(user.user))
                dispatch(setError(""))
            })
            .catch(err => dispatch(setError("Email already exists")) )
    }
}

export function isUserLogIn(){
    return async dispatch => {
        let data = localStorage.getItem("user")
        if(data){
            let user = await JSON.parse(data)
            dispatch(setUser(user.user))
        }
    } 
}
export function LogOut(){
    localStorage.removeItem("user")
    localStorage.removeItem("accessToken")
    return {
        type: AUTH_LOGOUT
    }
}
export function setError(error){
    return {
        type: AUTH_SET_ERROR,
        error
    }
}
function setUser(user){
    return {
        type: AUTH_SET_USER,
        user: user,
    }
}
 