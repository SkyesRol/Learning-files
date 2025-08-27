import { Outlet } from 'react-router-dom'


const BlankLayout = () => {
    return (
        <>
            <Outlet />
            <div>
                <h1>BlankLayout</h1>
            </div>

        </>
    )
}
export default BlankLayout