// 标准的http请求库，vue/react都用它
import axios from 'axios'



// mock 地址
axios.defaults.baseURL = 'http://localhost:5173'
// todos 接口
// export const getTodos = () => {
//     return axios.get('/api/todos')
// }
// repos 接口
export const getRepos = () => {
    return axios.get('/api/repos')
}




// 线上地址有了
// axios.defaults.baseURL = 'https://api.github.com';
// export const getRepos = () => {
//     return axios.get('/users/SkyesRol/repos')
// }
export default axios
