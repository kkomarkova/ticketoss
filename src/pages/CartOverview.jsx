import React, { useState, useEffect } from "react";
import Ticket from "../components/Ticket";
import PriceInfo from "../components/PriceInfo";
import "../pages/pages.css";

const CartOverview = () => {
  return (  
    <>
      <h1 className="cart-overview">Cart overview</h1>
      <div className="cartOverview-page">
        <div className="cartOverview-ticket">
          <Ticket /> 
        </div>
        <div>
          <PriceInfo />
        </div>
      </div>
    </>
  );
}
export default CartOverview;