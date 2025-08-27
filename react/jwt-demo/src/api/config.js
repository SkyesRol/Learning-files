import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5173/api'

// interceptors 拦截器   请求/响应拦截器
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token') || "";
    if (token) {

        config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log("axios!!!!!!");
    return config;
})
axios.interceptors.response.use(res => {
    console.log("IIIIIIIIIIIIIIIII");
    return res;
})

export default axios