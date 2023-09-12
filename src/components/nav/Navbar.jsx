import React from 'react'
import style from './Navbar.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import {ShoppingCart} from 'react-feather'

function Navbar() {
    const navigate = useNavigate()
    const handleLogout =()=>{
        localStorage.removeItem('isLoggedIn');
        navigate('/')
    };

    return (
        <nav className={style.nav}>
            {/* <div>
                <img width='15%' src='./../../../public/website-logo.jpg' alt='logo' />
            </div> */}
            <div className={style.links}>
                    <NavLink className={style.links} to='/home'>Home</NavLink>
                    <NavLink className={style.links} to='/products'>Products</NavLink>
                    <NavLink className={style.links} to='/contact'>Contact</NavLink>
            </div>
            <div className={style.logout}>
                <button className={style.log} onClick={handleLogout}>Logout</button>
                    <NavLink className={style.links} to='/cart'><ShoppingCart/></NavLink>
            </div>
        </nav>
    )
}

export default Navbar
