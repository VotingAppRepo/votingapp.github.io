import { VotingTypes } from "./voting.types"

export const getPairRequest = () => ({
    type: VotingTypes.GET_PAIR_REQUEST,
})

export const getPairSuccess = (pair) => ({
    type: VotingTypes.GET_PAIR_SUCCESS,
    payload: pair
})
export const getPairFailure = (error) => ({
    type: VotingTypes.GET_PAIR_FAILURE,
    payload: error
})

export const voteForModelRequest = (vote) => ({
    type: VotingTypes.VOTE_REQUEST,
    payload: vote
})

export const voteForModelSuccess = (nextPair) => ({
    type: VotingTypes.VOTE_SUCCESS,
    payload: nextPair
})
export const voteForModelFailure = (error) => ({
    type: VotingTypes.VOTE_FAILURE,
    payload: error
})

export const resetVotesRequest = () => ({
    type: VotingTypes.RESET_VOTES_REQUEST
})

export const resetVotesSuccess = (nextPair) => ({
    type: VotingTypes.RESET_VOTES_SUCCESS,
    payload: nextPair
})
export const resetVotesFailure = (error) => ({
    type: VotingTypes.RESET_VOTES_FAILURE,
    payload: error
})