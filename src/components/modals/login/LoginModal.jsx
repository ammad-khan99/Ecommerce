import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import style from "./LoginModals.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, userLogin } from "../../../store/actions/userActions";
import { X } from "react-feather";
import { addId } from "../../../store/actions/cartActions";
import axios from "axios";
import { showError } from "../../../store/actions/errorActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    background: "rgba(255, 255, 255, 0.14)",
    borderRadius: "16px",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
  },
};

function LoginModal() {
  const userInit = {
    email: "",
    password: "",
  };

  const errorInit = {
    emailError: false,
    passError: false,
  };

  const [credentials, setCredentials] = useState(userInit);
  const [error, setError] = useState(errorInit);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    getUsers();
  }, []);

  function closeModal() {
    dispatch(hideModal());
  }

  const getUsers = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/users");
      console.log("data using axios : ", data);
      // const response = await data.json();
      setUsers(data.data);
    } catch (error) {
      dispatch(showError(error.message))
      console.log(error.message);
    }
  };
  console.log(users);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    if (e.target.name === "email") {
      validateEmail(credentials.email)
        ? setError({ ...error, emailError: false })
        : setError({ ...error, emailError: true });
    } else {
      validatePassword()
        ? setError({ ...error, passError: false })
        : setError({ ...error, passError: true });
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = () => {
    if (credentials.password.length >= 4) {
      return true;
    } else {
      return false;
    }
  };

  const handleEmail = () => {
    validateEmail(credentials.email)
      ? setError({ ...error, emailError: false })
      : setError({ ...error, emailError: true });
  };

  const handlePass = () => {
    validatePassword()
      ? setError({ ...error, passError: false })
      : setError({ ...error, passError: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(credentials.email) && validatePassword()) {
      users.forEach((user) => {
        if (
          user.email === credentials.email &&
          user.password === credentials.password
        ) {
          dispatch(userLogin(user));
          // dispatch(addId(user.id));
          setCredentials(userInit);
        }
      });
    } else {
      e.preventDefault();
      alert("Incorrect email or password");
    }
  };

  return (
    <div>
      <Modal
        isOpen={user?.showModal}
        // onRequestClose={closeModal}
        style={customStyles}
      >
        <button className={style.close} onClick={closeModal}>
          <X />
        </button>
        <form className={style.form} onSubmit={handleSubmit}>
          <h3 className={style.heading}>Login your account</h3>
          <input
            placeholder="Enter your email"
            className={
              !error.emailError ? style.form_elements : style.form_elements_err
            }
            type="email"
            name="email"
            value={credentials.email}
            onFocus={handleEmail}
            onBlur={handleEmail}
            onChange={handleChange}
          ></input>
          <p className={style.error_msg}>
            {!error.emailError ? `` : `Enter a valid email`}
          </p>
          <input
            placeholder="Enter your password"
            className={
              !error.passError ? style.form_elements : style.form_elements_err
            }
            type="password"
            name="password"
            value={credentials.password}
            onFocus={handlePass}
            onBlur={handlePass}
            onChange={handleChange}
          ></input>
          <p className={style.error_msg}>
            {!error.passError
              ? ``
              : `Password should contain atleast 4 characters`}
          </p>
          <input className={style.login_btn} type="submit" value="Login" />
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal;
