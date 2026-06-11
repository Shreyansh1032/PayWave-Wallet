import axios from "axios";

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem('token');
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

export default axios;