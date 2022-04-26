import axios, { AxiosRequestConfig } from 'axios';
import { Paths } from '../paths';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
});
// const NO_REDIRECT_PATH = ['/auth/password', '/auth/login'];
const handleRequest = (request) => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
};
axiosInstance.interceptors.request.use(req => handleRequest(req));
axiosInstance.interceptors.response.use(
    res => res,
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = Paths.LOGIN;
        }
        else if(error.response.status === 403){
            window.location.href = Paths.HOME
        }
        return Promise.reject(error.response.data);
    },
);
