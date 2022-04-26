import { axiosInstance } from "../axiosInterceptor/interceptor";

export const getPairEndpoint = () => {
    return axiosInstance.get('/pairs/getPair');
};

export const voteForModelEndpoint = (body) => {
    return axiosInstance.put('/pairs/vote', body);
};

export const resetVotesEndpoint = () => {
    return axiosInstance.post('/pairs/reset-votes');
}