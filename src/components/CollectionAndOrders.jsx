import React from "react";

function CollectionAndOrders() {
  return (
    <div>

        <h2 className="text-2xl mt-7 mb-7 font-semibold text-center">
          My collection
        </h2>

        <div className="flex direction-row">   
           <div className="uploadNewImgDiv">
               <p>Upload new</p>
               <ion-icon name="add-circle"></ion-icon>
           </div>

           <div className="uploadNewImgDiv2">
               <ion-icon name="create"></ion-icon>
               <p>Edit</p> <br /> 
   
               <ion-icon name="trash"></ion-icon>
               <p>Delete</p>
           </div>
        </div>


        <h2 className="text-2xl mt-7 mb-7 font-semibold text-center">
          My orders
        </h2>

        <div className="allOrdersDiv flex direction-column gap-10">
            <div className="orderDiv">
                <div className="orderText">
                    <p className="font-bold">Order #: 273</p>
                    <p>15-Jun-2023, 5:00 PM</p>
                </div>

                <div className="orderPic">
                    <img className="h-16" src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/categor5.jpg?updatedAt=1687265398012" alt="" />
                </div>
            </div>
        </div>

        <div className="allOrdersDiv flex direction-column gap-10">
            <div className="orderDiv">
                <div className="orderText">
                    <p className="font-bold">Order #: 273</p>
                    <p>15-Jun-2023, 5:00 PM</p>
                </div>

                <div className="orderPic">
                    <img className="h-16" src="https://ik.imagekit.io/tkvucxczh/ReDI_School__Final_project__Art_Marketplace_/categor5.jpg?updatedAt=1687265398012" alt="" />
                </div>
            </div>
        </div>


        <div className="grid justify-items-center mb-7">
          <button className="btn btn-active color_second rounded-3xl text-white w-40">
            View more
          </button>
        </div>

        <div className="balanceDiv">
            <h2>My balance: $100</h2>
        </div>

    </div>
  );
}

export default CollectionAndOrders;
