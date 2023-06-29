import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function OrderInfo({ itemInfo }) {
  const [paymentMethods, setPaymentMethods] = useState();
  const [deliveryTypes, setDeliveryTypes] = useState();
  const navigate = useNavigate()

  function submitHandler(e) {
    e.preventDefault();
const date = new Date()
    axios
      .post("https://my-backend-data-json.onrender.com/ordersInfo", {
        artWorkId: itemInfo.id,
        firstName: e.target.fName.value,
        lastName: e.target.lName.value,
        email: e.target.email.value,
        address: e.target.address.value,
        phoneNumber: e.target.phone.value,
        city: e.target.city.value,
        country: e.target.country.value,
        paymentMethod: e.target.payment.value,
        deliveryType: e.target.delivery.value,
        artistId: itemInfo.artistId,
        amount : itemInfo.price,
        date: `${date.getDate()}/${Number(date.getMonth()) + 1}/${date.getFullYear()}`
      })
      .then((i) => console.log(i.data))
      .catch((i) => console.log(i));

      navigate("/order_status")
  }

  useEffect(() => {
    axios("https://my-backend-data-json.onrender.com/deliveryType")
      .then((i) => setDeliveryTypes(i.data))
      .catch((i) => console.log(i));
    axios("https://my-backend-data-json.onrender.com/payments")
      .then((i) => setPaymentMethods(i.data))
      .catch((i) => console.log(i));
  }, []);
  return (
    <div>
      <p className="text-center mt-4 font-semibold">
        Fill in the form to create your order:{" "}
      </p>
      <form className="formStyle" onSubmit={submitHandler}>
        <label htmlFor="">First name</label>
        <input type="text" name="fName" id="fName" />
        <label htmlFor="">Last name</label>
        <input type="text" name="lName" id="lName" />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="">Phone number</label>
        <input type="number" name="phone" id="phoneNum" />
        <label htmlFor="">Delivery type</label>
        {/* <input type="text" name="delivery" id="delivery" /> */}


        <select type="text" name="delivery" id="delivery" className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Choose delivery type
          </option>
          {deliveryTypes && deliveryTypes.map(i => <option>{i}</option>)}
        </select>


        <label htmlFor="">Payment type</label>

        {/* <input type="text" name="payment" id="payment" /> */}
        <select name="payment" id="payment" className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Choose payment
          </option>
          {paymentMethods && paymentMethods.map(i => <option>{i}</option>)}
        </select>
        <label htmlFor="">Address</label>
        <input type="text" name="address" id="address" />
        <label htmlFor="">City</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="">Country</label>
        <input type="text" name="country" id="country" />

        <div className="grid justify-items-center mb-10">
          
          <button
            type="submit"
            className="color_main btn btn-active rounded-3xl text-white w-40 mt-2"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderInfo;
