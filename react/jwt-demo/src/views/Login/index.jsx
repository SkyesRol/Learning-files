import { useRef } from 'react'
import { useUserStore } from '../../store/user';
import { useNavigate } from 'react-router-dom';
// 非受控组件
const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { login } = useUserStore();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if (!username || !password) {
            alert('请输入用户名或密码');
            return;
        }
        login({
            username,
            password
        });
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    return (
        <>
            <div>
                <form>
                    <label htmlFor="username">username</label>
                    <input ref={usernameRef} type="text" placeholder="username" required />
                    <label htmlFor="password">password</label>
                    <input ref={passwordRef} type="password" placeholder="password" required />

                    <div>
                        <button type='submit' onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default Login;