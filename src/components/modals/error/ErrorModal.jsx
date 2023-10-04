import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import style  from "./ErrorModal.module.css";
import { X } from "react-feather";
import { closeModal } from "../../../store/actions/errorActions";
import { useNavigate } from "react-router-dom";

function ErrorModal() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector((store) => store.error);
  console.log("error : ", error);

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

  function handlecloseModal() {
    dispatch(closeModal());
    navigate('/')
  }

  return (
    <div>
      <Modal isOpen={error.showError} style={customStyles}>
        <button className={style.close} onClick={handlecloseModal}>
          <X />
        </button>
        <h3>{error.errorMessage}</h3>
      </Modal>
    </div>
  );
}

export default ErrorModal;
