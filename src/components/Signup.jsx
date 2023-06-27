import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
       <h2 className="text-2xl ml-7 my-5 font-semibold text-center">Sign up</h2> 

       <form className='formStyle' action="">
            <label htmlFor="">First name</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Last name</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
         </form>

         <Link to={"/myprofile"}><div className="grid justify-items-center mb-7 mt-16"><button className="btn btn-active color_second rounded-3xl text-white w-60">Sign Up</button></div></Link>
    </div>
  )
}

export default Signup