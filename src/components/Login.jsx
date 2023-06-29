import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login( {artists, setartist} ) {

    const navigate = useNavigate();
    const SubmitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const person = artists.find(i => i.email == email && i.password == password)
        if (person) {
            setartist(person)
            navigate("/myprofile")
            localStorage.setItem("userfName", person.fName)
            localStorage.setItem("userlName", person.lName)
        } else {
            alert("User is not found")
        }
    }

  return (
    <div>
      <div className="loginImg">
        <img
          src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/loginpic.jpg?updatedAt=1688029868035"
          alt=""
        />
      </div>
      <h2 className="text-2xl mt-3 font-semibold text-center">
        Welcome back!
      </h2>

      <form onSubmit={(e) => SubmitHandler(e)} className="formStyle" action="">
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password" />

        <div className="loginCTA">
          <h2 className="text-2xl ml-6 my-2 text-center font-semibold">
            Log in
          </h2>
          <button type="submit" className="button1 btn-circle">❯❯</button>
        </div>
      </form>

      <p className="text-xl text-center">You don’t have an account yet?</p>
      <Link to={"/signup"}>
        <p className="text-xl font-semibold text-center mb-3 loginPar">Sign up here</p>
      </Link>
    </div>
  );
}

export default Login;
