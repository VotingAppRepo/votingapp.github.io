import { AdminTypes } from "../actions/admin/admin.types"
const initialState = { 
    loading: false,
    error: false,
    message: '',
    users: [],
    models: []
}

export const AdminReducer = (state = initialState, action) => {
    switch (action.type){
        case AdminTypes.CREATE_NEW_MODEL_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case AdminTypes.CREATE_NEW_MODEL_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case AdminTypes.CREATE_NEW_MODEL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload
            }
        case AdminTypes.DELETE_MODEL_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case AdminTypes.DELETE_MODEL_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case AdminTypes.DELETE_MODEL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                models: state.models.filter((model) => model.id !== action.payload)
            }
        case AdminTypes.SWITCH_USER_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case AdminTypes.SWITCH_USER_STATUS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case AdminTypes.SWITCH_USER_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                users: state.users.map((user) => user.id === action.payload ? { ...user, active: !user.active} : user)
            }
        case AdminTypes.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case AdminTypes.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case AdminTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                users: action.payload
            }
        case AdminTypes.GET_MODELS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case AdminTypes.GET_MODELS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case AdminTypes.GET_MODELS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                models: action.payload
            }
        
        default:
            return state
    }
}