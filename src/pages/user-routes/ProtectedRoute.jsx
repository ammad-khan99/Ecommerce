import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtectedRoute() {
    const [token, setToken] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('isLoggedIn')))
    }, [])
    console.log(token);
    return (
        <>
            {
                token? <Outlet/> : navigate('/')
            }
        </>
    )
}

export default ProtectedRoute
