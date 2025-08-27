import axios from './config';

export const getRepos = async (owner, repo) => {
    const res = await axios.get(`/repos/${owner}/${repo}`);
    return res.data; //自动返回json，不用和fetch一样多一个定义data
}

export const getRepoList = async (owner) => {
    const res = await axios.get(`/users/${owner}/repos`);
    return res.data;
}








