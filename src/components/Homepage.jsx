import React, { useEffect, useState } from "react";
import data from "../data.json";

function Homepage() {
  const [categories, setCategories] = useState(data.categories);
  const [picPosition, setPicPosition] = useState(0);

  
  function n () {
    if(picPosition  == 0){
        setPicPosition(categories.length - 1)
    } else {

       setPicPosition(i => i = i - 1)
    }

  }
  function b () {
    if (picPosition + 1 == categories.length){
        setPicPosition(0)
    } else {
        
    }
       setPicPosition(i => i = i + 1)


  }


  return (
    <div>
      <h2>Our popular categories:</h2>

      <div className="carousel w-full h-96 items-center">
        <div id="slide1" className="carousel-item relative w-full flex">
          <img src={categories && categories[picPosition].pic} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={n} className="btn btn-circle">
              ❮
            </button>
            <button onClick={b}  className="btn btn-circle">
              ❯
            </button>
          </div>
          <h3>{categories && categories[picPosition].name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
