import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";

function Homepage({
  setCategory,
  category,
  picPosition,
  setPicPosition,
  categories,
  setCategories,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    axios("https://my-backend-data-json.onrender.com/categories")
      .then((i) => setCategories(i.data))
      .catch((i) => i);
  }, []);

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

  function categorySelection() {
    setCategory(categories[picPosition]);
    navigate("/items");
  }

  return (
    <div>
      <h2 className="text-3xl my-3 font-light mt-6">
        THE PLACE OF YOUR INSPIRATION
      </h2>

      {categories ? (
        <>
          <div className="div1 pt-4 flex items-center justify-center">
            <section className="collectArt">
              <h2 className="text-2xl my-3">Collect art</h2>
              <p className="ml-5 mr-5 mb-5 text-center">
                See our popular collections from different artists here:
              </p>
            </section>

            <section>
              <div className="font-semibold  text-xl mb-2">
                <h4 className="color_purple text-center">
                  {categories && categories[picPosition].name}
                </h4>
              </div>

              <div
                onClick={categorySelection}
                id="slide1"
                className="carousel-item relative w-64 h-64 flex"
              >
                <img
                  src={categories && categories[picPosition].pic}
                  className="w-full"
                />
              </div>

              <div className="bnDiv">
                <button onClick={b} className="button1 btn-circle">
                  ❮
                </button>
                <button onClick={n} className="button1 btn-circle">
                  ❯
                </button>
              </div>
            </section>

            {/* 
     <h2 className="text-2xl my-3">Collect art</h2>
     <p className="ml-5 mr-5 mb-3 text-center">See our popular collections from different artists here:</p>
        <div className="font-bold  text-xl mt-1 mb-4">
          <h4 className="color_purple">{categories && categories[picPosition].name}</h4>
        </div>

        <div
          onClick={categorySelection}
          id="slide1"
          className="carousel-item relative w-64 h-64 flex"
        >
          <img
            src={categories && categories[picPosition].pic}
            className="w-full"
          />
        </div>

        <div className="bnDiv">
          <button onClick={b} className="button1 btn-circle">
            ❮
          </button>
          <button onClick={n} className="button1 btn-circle">
            ❯
          </button>
        </div> */}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-72 w-full">
          {" "}
          <span className="loading loading-spinner text-accent text-lg w-14"></span>
        </div>
      )}

      <div className="whatIsArtby">

      <section>
          <div className="emptyDivHomepage"></div>
        </section>

        <section>
          <h2 className="text-2xl my-5">What is ArtBy?</h2>
          <Link to={"/about"}>
            <div className="grid justify-items-center">
              <button className="btn btn-active color_main rounded-3xl text-white w-40">
                Read more...
              </button>
            </div>
          </Link>
        </section>

      </div>

      <h2 className="text-2xl my-5 font-semibold">Sell your art with us</h2>
      <p className="ml-5 mr-5 mb-3 text-center">
        With our global reach and art market expertise, our specialists will
        find the right buyer for your work.
      </p>
      <p className="ml-5 mr-5 mb-3 text-center">
        You are an artist and want to sell your art? Sign up here:
      </p>

      <Link to={"/signup"}>
        <div className="grid justify-items-center">
          <button className="btn btn-active color_second rounded-3xl text-white w-40">
            Sign up
          </button>
        </div>
      </Link>
      <div className="h-32"></div>
    </div>
  );
}

export default Homepage;
