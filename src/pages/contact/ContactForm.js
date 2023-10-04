import React from "react";
import { useState } from "react";
import style from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/actions/userActions";

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setmessage] = useState("");
  const [cell, setCell] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()

  let invalid = name || message || cell || email ? false : true;
  const validateName = () => {
    if (name.length >= 5 && name.length <= 10) {
      return true;
    } else {
      return false;
    }
  };

  const validatemessage = () => {
    if (message.length <= 50) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = email.includes("@") ? true : false;

  const validateCellNumber = () => {
    if (cell.length > 5 && cell.length <= 11) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    if (
      user?.isLoggedIn&&
      validateName() &&
      validatemessage() &&
      validateCellNumber() &&
      validateEmail
    ) {
      alert(
        "Your response has been recorded, we will reach back to you soon !"
      );
      setCell("");
      setEmail("");
      setmessage("");
      setName("");
    }
    else if (
      user?.isLoggedIn === false
      ) {
      dispatch(showModal())
    }else{
      alert('Enter valid values')
    }
    e.preventDefault();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlemessage = (e) => {
    setmessage(e.target.value);
  };

  const handleCell = (e) => {
    setCell(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <form onSubmit={handleSubmit}>
            <input
              className={style.inputs}
              name=""
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleName}
            ></input>
            <br />
            {!validateName() && (
              <p className={style.error_msg}>
                Name should contain atleast 6 and atmost 10 characters
              </p>
            )}
            <br />

            <input
              className={style.inputs}
              id="cell"
              type="number"
              placeholder="Enter your contact"
              value={cell}
              onChange={handleCell}
            ></input>
            <br />
            {!validateCellNumber() && (
              <p className={style.error_msg}>
                Cell number should contain atleast 5 and atmost 11 numbers
              </p>
            )}
            <br />
            <input
              className={style.inputs}
              id="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
            ></input>
            <br />
            <p className={style.error_msg}>
              {validateEmail ? "" : "Email should contain @ "}
            </p>
            <br />
            <textarea
              cols={25}
              rows={5}
              className={style.text}
              id="message"
              type="text"
              value={message}
              onChange={handlemessage}
              placeholder="Enter your your message here..."
            ></textarea>
            <br />
            {validatemessage() ? null : (
              <p className={style.error_msg}>
                Message should contain atmost 50 characters
              </p>
            )}
            <br />
            <input
              className={style.submit_btn}
              type="submit"
              disabled={invalid}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
