import { axiosInstance } from "../axiosInterceptor/interceptor";

export const createModelEndpoint = (model) => {
    return axiosInstance.post('/models', model);
};

export const switchUserStatusEndpoint = (userId) => {
    return axiosInstance.put(`/admin/switch-status/${userId}`)
}

export const getUsersEndpoint = () => {
    return axiosInstance.get('/admin/users')
}

export const getModelsEndpoint = () => {
    return axiosInstance.get('/models')
}

export const deleteModelEndpoint = (modelId) => {
    return axiosInstance.delete(`/models/${modelId}`)
}