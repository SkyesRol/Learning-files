import axios from './config'

export const getUser = (token) => {
    return axios.get('/user', {
        headers: {
            'Authorization': token
        }
    })
}

export const doLogin = (data) => {
    return axios.post('/login', data);
}