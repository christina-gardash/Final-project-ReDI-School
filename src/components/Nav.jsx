import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar navStyle">
{/* 
      <div className="NavBack navbar color_main">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div> */}

      <div className="navbar-center flex items-center justify-center ">
        <Link to="/">
        <img
          className="logoStyle"
          src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/LOGO.jpg?updatedAt=1687947376782"
          alt=""
        />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
