import React from "react";
import style from "./header.module.css";
import { imagesObj } from "./Images";

export default function Header() {
  return (
    <>
      <nav class="navbar ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={imagesObj.logo} alt="" width="100%" height="60px" />
          </a>
        </div>
        <button
          className={`${style.nav_btn} px-4 p-4 py-1 mx-auto`}
          style={{ backgrounColor: "#84cc16" }}
        >
          Login
        </button>
      </nav>
      <hr />
    </>
  );
}
