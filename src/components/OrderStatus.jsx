import React from 'react'
import { Link } from 'react-router-dom';

function OrderStatus() {
  return (
    <div>
      <div className="orderIcon flex justify-center items-center m-6">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
      </div>

      <h2>Order successfully placed</h2>

      <p className="text-center ml-6 mr-6 mt-3 mb-3">
        Your order number is 5475482348
      </p>
      <p className="text-center m-6">
        If you have any questions about your order, you can email us at
        info@artby.com or call us at 888-766-4657{" "}
      </p>

      <div className="flex justify-center items-center m-11">
        <img
          src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/order_status.jpg?updatedAt=1687856456780"
          alt=""
        />
      </div>

      <Link to={"/"}>
        <div className="grid justify-items-center mb-7">
          <button className="color_green btn btn-active rounded-3xl text-white w-60 mt-2">
            Explore collections
          </button>
        </div>
      </Link>
    </div>
  );
}

export default OrderStatus