import React from "react";
import { Link

} from "react-router-dom";
function OrderInfo() {
  return (
    <div>

       <p className="text-center mt-4 font-semibold">Fill in the form to create your order: </p> 
      <form className='formStyle' action="">
            <label htmlFor="">First name</label>
            <input type="text" name="fName" id="fName" />
            <label htmlFor="">Last name</label>
            <input type="text" name="lName" id="lName" />
            <label htmlFor="">Email</label>
            <input type='email' name="email" id="email" />
            <label htmlFor="">Phone number</label>
            <input type="number" name="phoneNum" id="phoneNum" />
            <label htmlFor="">Delivery type</label>
            <input type="text" name="delivery" id="delivery" />
            <label htmlFor="">Payment type</label>
            <input type='text' name="payment" id="payment" />
            <label htmlFor="">Address</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="">City</label>
            <input type="text" name="city" id="city" />
            <label htmlFor="">Country</label>
            <input type="text" name="country" id="country" />
      </form>


      <Link to={"/order_status"}>
        <div className="grid justify-items-center mb-10">
          <button className="color_main btn btn-active rounded-3xl text-white w-40 mt-2">
            Confirm
          </button>
        </div>
      </Link>
    </div>
  );
}

export default OrderInfo;
