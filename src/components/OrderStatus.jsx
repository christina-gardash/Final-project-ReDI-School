import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ItemInfo from './ItemInfo';
import Items from './Items';

function OrderStatus({itemInfo}) {
  const navigate = useNavigate()

  useEffect(() =>{
    if(!itemInfo){
      alert("Error: No selected artwork")
      navigate('/')
    }
  })
  return (
    <div>
      <div className="orderIcon flex justify-center items-center m-3">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
      </div>

      <h2>Order successfully placed</h2>

      <p className="text-center ml-6 mr-6 mt-3 mb-3">
        Your order number is 5475482348
      </p>
      <p className="text-center m-3">
        If you have any questions about your order, you can email us at
        info@artby.com or call us at 888-766-4657{" "}
      </p>

        <div className="flex justify-center items-center m-4">
        <img className='h-52'
  src={itemInfo && itemInfo.pics[0]}
          alt=""
        /></div>
       

      <Link to={"/"}>
        <div className="grid justify-items-center mb-6">
          <button className="color_green btn btn-active rounded-3xl text-white w-60 mt-2">
            Explore collections
          </button>
        </div>
      </Link>
    </div>
  );
}

export default OrderStatus