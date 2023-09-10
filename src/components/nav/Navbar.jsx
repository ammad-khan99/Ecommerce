import React from 'react'
import style from './Navbar.module.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const handleLogout =()=>{
        localStorage.removeItem('isLoggedIn');
        navigate('/')
    }
    return (
        <nav className={style.nav}>
            <div className={style.links}>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>
            </div>
            <div className={style.logout}>
                <button className={style.log} onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar
