import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="loginImg">
        <img
          src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/loginpic.jpg?updatedAt=1687506619690"
          alt=""
        />
      </div>
      <h2 className="text-2xl ml-7 my-2 font-semibold text-center">
        Welcome back!
      </h2>

      <form onSubmit={SubmitHandler} className="formStyle" action="">
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" />
      </form>

      <Link to={"/myprofile"}>
        <div className="loginCTA">
          <h2 className="text-2xl ml-7 my-5 text-center font-semibold">
            Log in
          </h2>
          <button className="button1 btn-circle">❯❯</button>
        </div>
      </Link>

      <p className="text-xl text-center mt-2">You don’t have an account yet?</p>
      <Link to={"/signup"}>
        <p className="text-xl font-semibold text-center mb-5">Sign up here</p>
      </Link>
    </div>
  );
}

export default Login;
