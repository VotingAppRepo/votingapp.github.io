import { AdminTypes } from "./admin.types"

export const deleteModelRequest = (id) => ({
    type: AdminTypes.DELETE_MODEL_REQUEST,
    payload: id
})

export const deleteModelSuccess = () => ({
    type: AdminTypes.DELETE_MODEL_SUCCESS
})

export const deleteModelFailure = (error) => ({
    type: AdminTypes.DELETE_MODEL_FAILURE,
    payload: error
})

export const createNewModelRequest = (model) => ({
    type: AdminTypes.CREATE_NEW_MODEL_REQUEST,
    payload: model
})

export const createNewModelSuccess = (message) => ({
    type: AdminTypes.CREATE_NEW_MODEL_SUCCESS,
    payload: message
})

export const createNewModelFailure = (error) => ({
    type: AdminTypes.CREATE_NEW_MODEL_FAILURE,
    payload: error
})

export const switchUserStatusRequest = (id) => ({
    type: AdminTypes.SWITCH_USER_STATUS_REQUEST,
    payload: id
})

export const switchUserStatusSuccess = (id) => ({
    type: AdminTypes.SWITCH_USER_STATUS_SUCCESS,
    payload: id
})

export const switchUserStatusFailure = (error) => ({
    type: AdminTypes.SWITCH_USER_STATUS_FAILURE,
    payload: error
})

export const getUsersRequest = () => ({
    type: AdminTypes.GET_USERS_REQUEST,
})

export const getUsersSuccess = (users) => ({
    type: AdminTypes.GET_USERS_SUCCESS,
    payload: users
})

export const getUsersFailure = (error) => ({
    type: AdminTypes.GET_USERS_FAILURE,
    payload: error
})

export const getModelsRequest = () => ({
    type: AdminTypes.GET_MODELS_REQUEST,
})

export const getModelsSuccess = (models) => ({
    type: AdminTypes.GET_MODELS_SUCCESS,
    payload: models
})

export const getModelsFailure = (error) => ({
    type: AdminTypes.GET_MODELS_FAILURE,
    payload: error
})
