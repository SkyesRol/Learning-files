import {
    Navigate,
    useLocation
} from 'react-router-dom';
// 鉴权组件

const ProtectedRoute = (props) => {
    //console.log(props);
    // Children 并非子组件
    // children属性 提升定制性
    const { children } = props;
    const { pathname } = useLocation(); // 获取当前路径
    //console.log(location);

    const isLogin = localStorage.getItem('isLogin') === 'true';
    if (!isLogin) {
        console.log('未登录');
        return (
            <Navigate to="/login" state={{ from: pathname }} />
        )
    }

    return children

}

export default ProtectedRoute