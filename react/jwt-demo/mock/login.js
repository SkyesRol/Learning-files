import pkg from 'jsonwebtoken';
const { sign, verify, decode } = pkg;

// 安全性 解码的时候加密
// 解码的时候用于解密
// 加盐（加点东西）
const secret = '!&codeFig!'

// login 模块 mock
export default [
    {
        url: '/api/login',
        method: 'post',
        timeout: 2000, // 请求耗时
        response: (req, res) => {
            // req,username,password
            const { username, password } = req.body;
            if (username !== 'Skye' || password !== '123456') {
                return {
                    code: 1,
                    msg: '登录失败'
                }
            }
            // json用户数据
            const token = sign({
                user: {
                    id: 114514,
                    username: 'Skye',
                    password: '123456'
                }
            }, secret, {
                expiresIn: 86400
            })
            console.log(token, '-----------')
            return {
                token,
                data: {
                    id: 114514,
                    username: 'Skye',
                    password: '123456'
                }
            }
        }
    },
    {
        url: '/api/user',
        method: 'get',
        response: (req, res) => {
            // 用户端 token 放在headers里面
            // JWT比较安全，如果直接写在cookie就跟裸奔一样了
            let token = req.headers["authorization"].split(' ')[1];
            console.log(token);

            if (!token) {
                return {
                    code: 1,
                    msg: 'Missing token'
                }

            }

            try {
                const decodeUser = decode(token, secret);
                console.log(decodeUser);
                return {
                    code: 0,
                    msg: '登录成功',
                    data: decodeUser.user
                }
            } catch (err) {
                console.log(err);

                return {
                    code: 1,
                    msg: 'Invalid token'
                }
            }


        }
    }
]