import React, { useState, useEffect } from "react";
import "../pages/pages.css";

const Confirmation = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cartItem"));
    setOrder(cartItem);
  }, []);
  return (  
    <>
      <div className="confirmation-page">
        <h2>Your order has been recevied!</h2>
        <div className="circle">
            <div className="checkmark"></div>
        </div>
        <h3>Thank you for your purchase !</h3>
        <h4>Your order ID is : {order.id}</h4>
           
      </div>
    </>
  );
}
export default Confirmation;