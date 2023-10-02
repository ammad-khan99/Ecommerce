import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import style from "./AppWrapper.module.css";
import SideNav from "../components/side-nav/SideNav";
import LoginModal from "../components/modals/LoginModal";

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
    </div>
  );
}

export default AppWrapper;
