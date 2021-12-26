import { AUTH_LOGOUT, AUTH_SET_ERROR, AUTH_SET_USER } from "../actions/actionType"

const initialState = {
    user: {},
    accessToken: "",
    error: null
    
}
export function authReduser(state = initialState, action) {
    switch (action.type) {
        case AUTH_SET_USER: 
           return{ ...state, user: action.user, accessToken: action.accessToken }
        case AUTH_LOGOUT:
            console.log("=");
            return {...state,  user: {}, accessToken: "",}
        case AUTH_SET_ERROR:
            return {...state, error: action.error}
        
        default:
            return state
    }
}
