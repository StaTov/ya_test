import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Nav = ({ setToken, token }) => {
   
    const navigate = useNavigate()
    const handleLogin = () => navigate('/auth')
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        setToken(null)
    }

    return (
        <div className='container'>
            <nav>
                <div style={{ width: '40px' }}></div>
                <div>Yandex Disk API</div>
                <div style={{ minWidth: '40px' }}>
                    {
                        token
                            ? <button onClick={handleLogout}>logout</button>
                            : <button onClick={handleLogin}>login</button>
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav;