import React from 'react'
import { Link } from 'react-router-dom'

function ArtworkUpload() {
  return (
    <div>
        <h2>Artwork details</h2>

        <form className='formStyle' action="">
            <label htmlFor="">Artist</label>
            <input placeholder='Enter full name' type="text" name="artist" id="artist" />
            <label htmlFor="">Title</label>
            <input placeholder='Add title or write ‘uknown’' type="text" name="title" id="title" />
            <label htmlFor="">Year</label>
            <input placeholder='YYYY' type='number' name="year" id="year" />
            <label htmlFor="">Materials</label>
            <input placeholder='Oil on canvas, watercolors...' type="text" name="materials" id="materials" />
            <label htmlFor="">Size</label>
            <div className='flex direction-row gap-7'>
               <input className='w-28' placeholder='height' type="number" name="height" id="height" />
               <input className='w-28' placeholder='width' type="number" name="width" id="width" />
            </div>
        
            <form action="">
            <label htmlFor="">Frame</label>
            <div className='flex direction-row items-center gap-3'>
               <input type="radio" id="incl" name="incl" checked/>
               <label for="incl">included</label>
            </div>

            <div className='flex direction-row items-center gap-3'>
               <input type="radio" id="notIcnl" name="notIcnl"/>
               <label for="notIcnl">not included</label>
            </div>
            </form>      

            <label htmlFor="">Description</label>
            <textarea name="descr" id="descr" cols="30" rows="7"></textarea>
            <label htmlFor="">Upload photos</label>

            <div className='uploadImgDiv'><ion-icon name="camera-outline"></ion-icon></div>
          
         </form>

         <Link to={"/my_collection_and_orders"}><div className="grid justify-items-center mb-16"><button className="btn btn-active color_second rounded-3xl text-white w-80">Save and go to my collection</button></div></Link>
    </div>
  )
}

export default ArtworkUpload