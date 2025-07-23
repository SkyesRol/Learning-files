import { useState } from 'react'
import {
    useNavigate, // navigate组件， js跳转
    useLocation
} from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate(); // 获取navigate的能力
    //console.log(Location.state.from);

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(username, password);
        if (username && password) {
            localStorage.setItem('isLogin', 'true');
            navigate(location?.state?.from || '/'); // 登录成功后，跳转到之前的页面
        } else {
            alert('No name or No pwd')
        }
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="请输入用户名"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input type="password" placeholder="请输入密码" required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}

                />
                <input type="submit" value="登录" />
            </form>
        </>
    )
}

export default Login