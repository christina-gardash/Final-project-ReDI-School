import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <div><img src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/aboutus.jpg?updatedAt=1687422346803" alt="" /></div>
        <div className='text-center mx-6 my-6'>
        <h2 className="font-bold text-2xl ml-7 my-5">About us</h2>
            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className='mb-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!</p>
        </div>
        <Link to={"/"}><div className="grid justify-items-center mb-7"><button className="btn btn-active color_second rounded-3xl text-white w-60">Explore collections</button></div></Link>
    </div>
  )
}

export default About