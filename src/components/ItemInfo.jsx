import React, { useState } from "react";
import Artworks from "./Artworks";
import { Link } from "react-router-dom";

function ItemInfo({
  itemInfo,
  artist
}) {
 

  return (
    <div>
      <div className="carousel w-full">
        {itemInfo &&
          itemInfo.pics.map((i, j) => (
            <div id={`item${j}`} className="carousel-item w-full">
              <img
                src={i}
                className=" itemInfoImg"
              />
            </div>
          ))}
       
      </div>

      <div className=" flex justify-center items-center w-full gap-3">
        {itemInfo && itemInfo.pics.map((i, j) => <a  href={`#item${j}`} className="color_third w-10 h-10 rounded-full text-center flex justify-center items-center">
          {j + 1}
        </a>)}
        
      </div>

      {/* {itemInfo.pics.map((i) => (
        <img className="itemInfoImg" src={i} />
      ))} */}

      <div className="itemInfoTxt">
        <h3 className="pt-3">
          {artist && artist.fName} {artist && artist.lName}
        </h3>
        <h3 className="italic pb-3">{itemInfo.name}</h3>
        <p>
          Materials: <span className="font-bold">{itemInfo.materials}</span>
        </p>
        <p>
          Size: <span className="font-bold">{itemInfo.size}</span>
        </p>
        <p>
          Frame:{" "}
          <span className="font-bold">
            {itemInfo.frame ? "Included" : "Not Included"}
          </span>
        </p>
        <p>
          Year: <span className="font-bold">{itemInfo.year}</span>
        </p>
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
