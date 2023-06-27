import React, { useState } from "react";
import Artworks from "./Artworks";
import { Link } from "react-router-dom";

function ItemInfo({ itemInfo, artist, picPosition, setPicPosition, categories }) {

  function b() {
    if (picPosition == 0) {
      setPicPosition(categories.length - 1);
    } else {
      setPicPosition((i) => (i = i - 1));
    }
  }
  function n() {
    if (picPosition + 1 == categories.length) {
      setPicPosition(0);
    } else {
    }
    setPicPosition((i) => (i = i + 1));
  }




  return (
    <div>

      <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
          {itemInfo.pics.map((i) => (
        <img className="itemInfoImg" src={i} />
      ))}
          </div>
      </div>

      <div className=" flex justify-center w-full py-2 gap-2">
        <a onClick={b} href="#item1" className="btn btn-xs">
          1
        </a>
        <a onClick={n} href="#item2" className="btn btn-xs">
          2
        </a>
      </div>

      {/* {itemInfo.pics.map((i) => (
        <img className="itemInfoImg" src={i} />
      ))} */}

      <div className="itemInfoTxt">
      <h3 className="pt-3">
        {artist && artist.fName} {artist && artist.lName}
      </h3>
      <h3 className="italic pb-3">{itemInfo.name}</h3>
      <p>Materials: <span className="font-bold">{itemInfo.materials}</span></p>
      <p>Size: <span className="font-bold">{itemInfo.size}</span></p>
      <p>Frame: <span className="font-bold">{itemInfo.frame? "Included" : "Not Included"}</span></p>
      <p>Year: <span className="font-bold">{itemInfo.year}</span></p>
      <h4 className="font-bold">Description</h4>
      <p>{itemInfo.description}</p>

      </div>

      <Link to={"/create_your_order"}>
        <div className="grid justify-items-center mb-16">
          <button className="color_main btn btn-active rounded-3xl text-white w-40 mt-6">
            Purchase
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ItemInfo;
