import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar navStyle">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           <Link to={"/"}><li><a>Homepage</a></li></Link> 
           <Link to={"/about"}><li><a>About</a></li></Link> 
           <Link to={"/login"}><li><a>Profile</a></li></Link>
          </ul>
        </div>
      </div>
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

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Nav;
