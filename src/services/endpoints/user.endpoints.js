import { axiosInstance } from "../axiosInterceptor/interceptor";

export const getUserInfoEndpoint = () => {
    return axiosInstance.get('/user/profile');
};

export const getVotingStatsEndpoint = () => {
    return axiosInstance.get('/user/voting-stats');
};

export const editProfileEndpoint = (userInfo) => {
    return axiosInstance.put('/user', userInfo);
};