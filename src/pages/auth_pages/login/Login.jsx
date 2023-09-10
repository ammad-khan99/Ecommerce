import React, { useState } from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [credentials, setCredentials] = useState({ name: '', password: '' })
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault()
    const key = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [key]: value })
  }


  const handleSubmit = () => {
    // if(valid){
    //navigate to home
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
    navigate('home')
    // }
    // else{
    //navigate to login
    // }
  }

  return (
    <div className={style.login}>
      {/* <img className={style.image} alt='Login image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMvpmWDtsawqWUDbu5w3XPT5pZbCP2L_z_A&usqp=CAU' /> */}
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.heading}>Login your account</h1>
        <input placeholder='Enter your email' className={style.form_elements} type='email' name='name' value={credentials.name} onChange={handleChange}></input>
        <input placeholder='Enter your password' className={style.form_elements} type='password' name='password' value={credentials.password} onChange={handleChange}></input>
        <input className={style.login_btn} type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
