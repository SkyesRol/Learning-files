import axios from 'axios' // http 请求库
// http 请求时候  所有接口地址的公共部分
const BASE_URL = 'http://api.github.com/'; // 基础地址
// axios 标准http请求库
// axios method url
// promise 现代
// api 模块 再向外就到了应用之外  在这里搞外交
export const getRepos = (username) => {
    return axios.get(`${BASE_URL}users/${username}/repos`);
}
export const getRepoDetail = async (username, repoName) => {
    return axios.get(`${BASE_URL}repos/${username}/${repoName}`);
}


















