import axios from "axios";
import React, { useEffect, useState } from "react";
import Artworks from "./Artworks";

function CollectionAndOrders({ artist }) {
  const [artistWork, setArtistWork] = useState();
  const [artistOrder, setArtistOrder] = useState();
  // const [myBalance, setmyBalance] = useState(0)

  function remove(e) {
    const result = artistWork.filter(i => i.id != e)
    axios.delete(
      `https://my-backend-data-json.onrender.com/artWorks/${e}`
    )
      .then((i) => console.log(i))
      .catch((i) => console.log(i));
    setArtistWork(result)
    
  }

  useEffect(() => {
    axios(
      `https://my-backend-data-json.onrender.com/artWorks/?artistId=${artist.id}`
    )
      .then((i) => setArtistWork(i.data))
      .catch((i) => console.log(i));
    axios(
      `https://my-backend-data-json.onrender.com/ordersInfo/?artistId=${artist.id}`
    )
      .then((i) => setArtistOrder(i.data))
      .catch((i) => console.log(i));
  }, []);

  // function f () {
  //   // setmyBalance((i) => (i = i + {myBalance}))
  //   console.log(i);
  // }
  // }



  return (
    <div>
      <h2 className="text-2xl mt-7 mb-5 font-semibold text-center">
        My collection
      </h2>

      <div className="allCollectionsDiv">
          
          {/* <div className="uploadDiv">
            <div className="emptyDiv"><h2>+</h2></div>
            <button className="uploadBtn">
                <ion-icon name="add-circle"></ion-icon>Upload
              </button>
          </div> */}

          {artistWork &&
            artistWork.map((i) => (
              <div className="myCollectionsDiv">
                {/* <p className="font-semibold text-center p-1">{i.name}</p> */}
                <img className="imgCollOrders" src={i.pics} alt="" />
                <button onClick={() => remove(i.id)} className="deleteBtn">
                  <ion-icon name="trash"></ion-icon>Delete
                </button>
              </div>
            ))}
      </div>

      <h2 className="text-2xl mt-7 mb-7 font-semibold text-center">
        My orders
      </h2>

      {artistOrder &&
        artistOrder.map((j) => (
          <div className="allOrdersDiv flex direction-column">
            <div className="orderDiv">
              <div className="orderText">
                <p className="font-bold">Order #: {j.id}</p>
                <p>{j.date}</p>
              </div>

                  <div className="orderPic">
                    <ion-icon name="bag-handle-outline"></ion-icon>
                  </div>
            
            </div>
          </div>
        ))}

      {/* <div className="grid justify-items-center mb-7">
          <button className="btn btn-active color_second rounded-3xl text-white w-40">
            View more
          </button>
        </div> */}

      <div className="balanceDiv">
        <h2>Total: ${artistOrder && artistOrder.reduce((acc, cur) => acc + Number(cur.amount), 0)} </h2>
      </div>
    </div>
  );
}

export default CollectionAndOrders;
