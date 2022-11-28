import React, { useState, useEffect } from "react";
import Ticket from "../components/Ticket";
import PriceInfo from "../components/PriceInfo";
import "../pages/pages.css";

const CartOverview = () => {
  const [ticket, setTicket] = useState([]);
  const [price, setPrice] = useState(0);

  //Get ticket from local storage
  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cartItem"));
    setTicket(cartItem);
    setPrice(cartItem.price);
    console.log(cartItem);
  }, []);
  return (  
    <>
      <h1 className="cart-overview">Cart overview</h1>
      <div className="cartOverview-page">
        <div className="cartOverview-ticket">
          <Ticket 
            name={ticket.name}
            location={ticket.location}
            price={ticket.price}
            eventDate={ticket.eventDate}
            creationDate={ticket.creationDate}
            description={ticket.description}
            expirationDate={ticket.expirationDate}
          /> 
        </div>
        <div>
          <PriceInfo 
            price={ticket.price}
          />
        </div>
      </div>
    </>
  );
}
export default CartOverview;