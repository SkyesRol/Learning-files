import { Outlet } from 'react-router-dom'


const BlankLayout = () => {
    return (
        <>
            <div>
                <h1>BlankLayout</h1>
            </div>
            <Outlet />
        </>
    )
}
export default BlankLayout