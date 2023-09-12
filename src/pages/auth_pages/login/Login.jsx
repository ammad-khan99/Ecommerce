import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await fetch("https://fakestoreapi.com/users");
    const response = await data.json();
    setUsers(response);
  };
  console.log(users);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const validateEmail = () => {
    if (credentials.email.includes("@")) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = () => {
    if (credentials.password.length >= 4) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (validateEmail() && validatePassword()) {
      users.forEach((user) => {
        if (
          user.email === credentials.email &&
          user.password === credentials.password
        ) {
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          navigate("/home");
        }
      });
    } else {
      alert('Incorrect email and password')
      navigate("/");
    }
  };

  return (
    <div className={style.login}>
      {/* <img className={style.image} alt='Login image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMvpmWDtsawqWUDbu5w3XPT5pZbCP2L_z_A&usqp=CAU' /> */}
      <form className={style.form} onSubmit={handleSubmit}>
        <h3 className={style.heading}>Login your account</h3>
        <input
          placeholder="Enter your email"
          className={style.form_elements}
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        ></input>
        <p className={style.error_msg}>
          {validateEmail() ? `` : `Enter a valid email`}
        </p>
        <input
          placeholder="Enter your password"
          className={style.form_elements}
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        ></input>
        <p className={style.error_msg}>
          {validatePassword()
            ? ``
            : `Password should contain atleast 4 characters`}
        </p>
        <input className={style.login_btn} type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
