import React from "react";
import { useState } from "react";
import style from "./Contact.module.css";
import Navbar from "../../components/nav/Navbar";

function ContactForm() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [cell, setCell] = useState("");
  const [email, setEmail] = useState("");

  let invalid = name || fname || cell || email ? false : true;
  const validateName = () => {
    if (name.length >= 5 && name.length <= 10) {
      return true;
    } else {
      return false;
    }
  };

  const validateFname = () => {
    if (fname.length >= 5 && fname.length <= 10) {
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
      validateName() &&
      validateFname() &&
      validateCellNumber() &&
      validateEmail
    ) {
      alert("Your form has been submitted successfully !");
    } else {
      alert("Please enter valid values !");
    }
    e.preventDefault();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleCell = (e) => {
    setCell(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.form}>
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Name</label> */}
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
              <p className={style.error_msg}>"Name should contain atleast 6 and atmost 10 characters"</p>
            )}
            <br />
            {/* <label htmlFor="fname">Father Name</label> */}
            <input
              className={style.inputs}
              id="fname"
              type="text"
              value={fname}
              onChange={handleFname}
              placeholder="Enter your father name"
            ></input>
            <br />
            {!validateFname() ? (
              <p className={style.error_msg}>
                "Father name should contain atleast 6 and atmost 10 characters"
              </p>
            ) : null}
            <br />
            {/* <label htmlFor="cell">Cell</label> */}
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
                "Cell number should contain atleast 5 and atmost 11 numbers"
              </p>
            )}
            <br />
            {/* <label htmlFor="email">Email</label> */}
            <input
              className={style.inputs}
              id="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
            ></input>
            <br />
            <p className={style.error_msg}>{validateEmail ? "" : "Email should contain @ "}</p>
            <br />
            <input type="submit" disabled={invalid} />
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
