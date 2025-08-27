import { useUserStore } from "../../store/user";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const RequireAuth = ({ children }) => {
    const { isLogin } = useUserStore();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        if (!isLogin) {
            navigate('/login', { from: pathname });
        }
    }, [])

    return (
        <div>
            <h1>RequireAuth</h1>
            {children}
        </div>
    )
}
export default RequireAuth;
