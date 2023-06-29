import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <div><img src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/aboutus.jpg?updatedAt=1687422346803" alt="" /></div>
        <div className='text-center mx-6 my-6'>
        <h2 className="font-bold text-2xl ml-7 my-5">About us</h2>
            <p className='mb-3'>ArtBy is a modern online art marketplace which goal is to inspire both artists and art lovers from all around the world.  It's way beyond just selling and buying art.</p>
            <p className='mb-3'>With the help of an advanced filter system, art collectors can find here exactly the piece of art which they are looking for. Any style, material, price range, size.</p>
            <p className='mb-3'>Whether you are selling or buying art, everything you need is placed in one app.</p>
            <p>Join us, if you want to be a part of a global art community!</p>
        </div>
        <Link to={"/"}><div className="grid justify-items-center mb-7"><button className="btn btn-active color_second rounded-3xl text-white w-60">Explore collections</button></div></Link>
    </div>
  )
}

export default About