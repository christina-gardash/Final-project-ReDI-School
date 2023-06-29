import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center text-base-content rounded">
      <div className="footerDiv gap-9 grid grid-flow-col">
        <Link to={"/"}>
          <div className="flex flex-col justify-center items-center">
            <ion-icon name="home"></ion-icon>
            <p className="link link-hover">Home</p>
          </div>
        </Link>

        <Link to={"/about"}>
          <div className="flex flex-col justify-center items-center">
            <ion-icon name="people"></ion-icon>
            <p className="link link-hover">About us</p>
          </div>
        </Link>

        <Link to={"/"}>
          <div className="flex flex-col justify-center items-center">
            <ion-icon name="library"></ion-icon>
            <p className="link link-hover">Collections</p>
          </div>
        </Link>

        <Link to={"/login"}>
          <div className="flex flex-col justify-center items-center">
            <ion-icon name="person"></ion-icon>
            <p className="link link-hover">My profile</p>
          </div>
        </Link>

        <div className="displayNone">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
