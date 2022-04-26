import { UserTypes } from "./user.types"

export const getUserInfoRequest = () => ({
    type: UserTypes.GET_USER_INFO_REQUEST,
})

export const getUserInfoSuccess = (userInfo) => ({
    type: UserTypes.GET_USER_INFO_SUCCESS,
    payload: userInfo
})

export const getUserInfoFailure = (error) => ({
    type: UserTypes.GET_USER_INFO_FAILURE,
    payload: error
})

export const getVotingStatsRequest = () => ({
    type: UserTypes.GET_VOTING_STATS_REQUEST,
})

export const getVotingStatsSuccess = (stats) => ({
    type: UserTypes.GET_VOTING_STATS_SUCCESS,
    payload: stats
})

export const getVotingStatsFailure = (error) => ({
    type: UserTypes.GET_VOTING_STATS_FAILURE,
    payload: error
})

export const editProfileInfoRequest = (info) => ({
    type: UserTypes.EDIT_PROFILE_REQUEST,
    payload: info
})

export const editProfileInfoSuccess = (updatedProfile) => ({
    type: UserTypes.EDIT_PROFILE_SUCCESS,
    payload: updatedProfile
})

export const editProfileInfoFailure = (error) => ({
    type: UserTypes.EDIT_PROFILE_FAILURE,
    payload: error
})