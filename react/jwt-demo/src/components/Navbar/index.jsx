import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/user';
const Navbar = () => {
    const { isLogin, logout, user } = useUserStore();
    console.log(isLogin, user + '!!!!!!!!');

    return (
        <>
            <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <Link to="/pay">Pay</Link>&nbsp;&nbsp;
                {
                    isLogin ? (<>
                        <span>Welcome,{user.username}</span>
                        <button onClick={logout}> logout</button>
                    </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )
                }
            </nav>
        </>
    )

}
export default Navbar;
