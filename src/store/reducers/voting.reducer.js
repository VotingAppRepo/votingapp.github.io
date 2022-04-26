import { VotingTypes } from "../actions/voting/voting.types"

const initialState = { 
    loading: false,
    error: false,
    message: '',
    pair: null
}

export const VotingReducer = (state = initialState, action) => {
    switch (action.type){
        case VotingTypes.GET_PAIR_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case VotingTypes.GET_PAIR_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                pair: action.payload
            }
        case VotingTypes.GET_PAIR_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case VotingTypes.VOTE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case VotingTypes.VOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                pair: action.payload
            }
        case VotingTypes.VOTE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case VotingTypes.RESET_VOTES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case VotingTypes.RESET_VOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                pair: action.payload
            }
        case VotingTypes.RESET_VOTES_FAILURE:
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