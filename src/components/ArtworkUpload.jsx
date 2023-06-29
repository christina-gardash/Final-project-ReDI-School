import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ArtworkUpload({ artist, categories }) {
   const navigate = useNavigate()
   
  function submitHandler(e) {
    e.preventDefault();
    

    axios
      .post("https://my-backend-data-json.onrender.com/artWorks", {
        name: e.target.name.value,
        artistId: artist.id,
        pics: [e.target.pic1.value, e.target.pic2.value],
        price: e.target.price.value,
        size: `${e.target.height.value} x ${e.target.width.value}`,
        materials: e.target.materials.value,
        year: e.target.year.value,
        description: e.target.descr.value,
        frame: Boolean(e.target.frame.value),
        categoryId: Number(e.target.category.value),
      })
      .then((i) => console.log(i.data))
      .catch((i) => console.log(i));

      navigate("/my_collection_and_orders")
  }
  return (
    <div>
      <h2 className="mt-4">Artwork details</h2>

      <form className="formStyle" onSubmit={submitHandler}>
        <label htmlFor="">Name</label>
        <input
          placeholder="Full name of your artwork"
          type="text"
          name="name"
          id="artist"
        />
        <label htmlFor="">Picture #1</label>
        <input placeholder="Put the link in here" type="text" name="pic1" />
        <label htmlFor="">Picture #2</label>
        <input placeholder="Put the link in here" type="text" name="pic2" />

        <label htmlFor="">Price</label>
        <input
          placeholder="$"
          type="text"
          name="price"
          id="price"
        />
        <label htmlFor="">Year</label>
        <input placeholder="YYYY" type="number" name="year" id="year" />
        <label htmlFor="">Materials</label>
        <input
          placeholder="Oil on canvas, watercolors..."
          type="text"
          name="materials"
          id="materials"
        />
        <label htmlFor="">Size</label>
        <div className="flex direction-row gap-7">
          <input
            className="w-28"
            placeholder="height"
            type="number"
            name="height"
            id="height"
          />
          <input
            className="w-28"
            placeholder="width"
            type="number"
            name="width"
            id="width"
          />
        </div>

        <label htmlFor="">Frame</label>
        <select name="frame" className="w-28">
          <option disabled selected>
          </option>
          <option value={true}>included</option>
          <option value={false}>not included</option>
        </select>

        <label htmlFor="">Category</label>
        <select name="category" className="w-28">
          <option disabled selected>
          </option>
          {categories &&
            categories.map((i) => <option value={i.id}>{i.name}</option>)}
        </select>

        <label htmlFor="">Description</label>
        <textarea className="pl-2 pt-2" placeholder="Describe your painting here..." name="descr" id="notIncl" cols="30" rows="7"></textarea>
  
        <div className="grid justify-items-center mb-16 mt-6">
          <button type="submit" className="btn btn-active color_second rounded-3xl text-white w-80">
            Save and go to my collection
          </button>
        </div>
      </form>

      <div className="h-16"></div>
      
    </div>
  );
}

export default ArtworkUpload;
