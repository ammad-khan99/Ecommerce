import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import CategoryFilter from "../filter/CategoryFilter";
import style from './AppWrapper.module.css'

function AppWrapper() {
  return (
    <div>
      <Navbar />
      <div className={style.body}>
      <CategoryFilter />
        <Outlet />
      </div>
    </div>
  );
}

export default AppWrapper;
