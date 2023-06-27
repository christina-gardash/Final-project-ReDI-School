import React from 'react'
import { Link } from 'react-router-dom'

function Profile(artists) {
  return (
    <div>
        <div className='profileIconDiv'><ion-icon className="iconProfile" name="person-circle-outline"></ion-icon></div>
        <h2>Hi, Name Surname</h2>


        <div className='relative flex justify-center mb-7 mt-7'>
            <img className='profilepage2' src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/profilepage1.jpg?updatedAt=1687614369002" alt="" />
            <img className='profilepage1' src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/profilepage2.jpg?updatedAt=1687613470136" alt="" />
            <img className='profilepage3' src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/profilepage3.jpg?updatedAt=1687613470973" alt="" />
            </div>

            <Link to={"/upload_artwork"}><div className="grid justify-items-center mb-5 mt-14"><button className="btn btn-active color_second rounded-3xl text-white w-80">Upload Artwork +</button></div></Link>
            <Link to={"/my_collection_and_orders"}><div className="grid justify-items-center mb-16"><button className="buttonProfile2 btn btn-active color_second rounded-3xl text-white w-80">My collection / orders</button></div></Link>
    </div>
  )



}

export default Profile