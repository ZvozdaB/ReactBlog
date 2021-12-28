import { COMMENT_GET_POST_COMMENT_SUCCESS, COMMENT_LOADING_END, COMMENT_LOADING_START } from "../actions/actionType"

const initialState = {
    comments:[],
    loading: false
}
export function commentsReducer(state = initialState, action){
    switch(action.type){
        case COMMENT_LOADING_START:
            return {
                ...state, loading: true
            }
        case COMMENT_LOADING_END:
            return {
                ...state, loading: false
            }
        case COMMENT_GET_POST_COMMENT_SUCCESS: 
            return {
                ...state, comments: action.comments
            }
        default: 
            return state
    }
}
