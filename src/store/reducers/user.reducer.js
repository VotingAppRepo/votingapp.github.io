import { UserTypes } from "../actions/user/user.types"

const initialState = { 
    loading: false,
    error: false,
    message: '',
    profile: null,
    stats: []
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case (UserTypes.GET_USER_INFO_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (UserTypes.GET_USER_INFO_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                profile: action.payload
            }
        case (UserTypes.GET_USER_INFO_FAILURE):
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case (UserTypes.GET_VOTING_STATS_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (UserTypes.GET_VOTING_STATS_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                stats: action.payload
            }
        case (UserTypes.GET_VOTING_STATS_FAILURE):
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case (UserTypes.EDIT_PROFILE_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (UserTypes.EDIT_PROFILE_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                profile: action.payload
            }
        case (UserTypes.EDIT_PROFILE_FAILURE):
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        default:
            return state
    }
}