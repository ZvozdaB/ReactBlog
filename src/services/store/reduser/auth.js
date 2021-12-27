import { AUTH_LOGOUT, AUTH_SET_ERROR, AUTH_SET_USER } from "../actions/actionType"

const initialState = {
    user: {},
    isUserLogin: false,
    error: ""
    
}
export function authReduser(state = initialState, action) {
    switch (action.type) {
        case AUTH_SET_USER: 
           return{ ...state, user: action.user, isUserLogin: true}
        case AUTH_LOGOUT:
            return {...state,  user: {},  isUserLogin: false}
        case AUTH_SET_ERROR:
            return {...state, error: action.error}
        
        default:
            return state
    }
}
