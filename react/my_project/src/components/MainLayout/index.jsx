import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
    Tabbar
} from 'react-vant'
import {
    HomeO,
    Search,
    FriendsO,
    SettingO,
    UserO
} from '@react-vant/icons';

// 菜单栏配置
const tabs = [
    {
        icon: <HomeO />, title: '首页', path: '/home'
    },
    {
        icon: <Search />, title: '特惠专区', path: '/discount'
    },
    {
        icon: <FriendsO />, title: '我的收藏', path: '/collection'
    },
    {
        icon: <SettingO />, title: '行程', path: '/trip'
    },
    {
        icon: <UserO />, title: '我的账户', path: '/account'
    }

]
const MainLayout = () => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();
    useEffect(() => {
        const index = tabs.findIndex(
            tab => location.pathname.startsWith(tab.path)
        )
        setActive(index)
    }, [])
    return (
        <>
            <div
                className="flex flex-col h-screen "
                style={{ paddingBottom: '50px' }}>  {/*这里设置style是因为Tabbar是fixed定位，不在文档流 */}
                <div className="flex-1">
                    <Outlet />
                </div>
                <Tabbar value={active}
                    onChange={(key) => { setActive(key); navigate(tabs[key].path) }}>
                    {tabs.map((tab, index) => (
                        <Tabbar.Item key={index}
                            icon={tab.icon}
                        >
                            {tab.title}
                        </Tabbar.Item>

                    ))}

                </Tabbar>
            </div>
        </>
    )
}
export default MainLayout