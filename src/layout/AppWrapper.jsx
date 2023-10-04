import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import style from "./AppWrapper.module.css";
import SideNav from "../components/side-nav/SideNav";
import LoginModal from "../components/modals/login/LoginModal";
import ErrorModal from "../components/modals/error/ErrorModal";

function AppWrapper() {

  return (
    <div>
      <Navbar />
      <div className={style.body}>
        <div className={style.filter}>
          <SideNav />
        </div>
        <div className={style.outlet}>
          <Outlet />
        </div>
      </div>
      <LoginModal />
      <ErrorModal/>
    </div>
  );
}

export default AppWrapper;
