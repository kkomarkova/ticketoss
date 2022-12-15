import React, { useState, useEffect } from "react";
import Ticket from "../components/Ticket";
import PriceInfo from "../components/PriceInfo";
import "../pages/pages.css";
import PaymentService from "../store/services/payment.service";

const CartOverview = () => {

  const [ticket, setTicket] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  
  //Getting data from local storage
  const cartItem = JSON.parse(localStorage.getItem("cartItem"));
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    setTicket(cartItem);
    setUserInfo(userId);
  }, []);

  const onPurchase = () => {
    PaymentService.createOrder(ticket, ticket.price, userInfo)
  };
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
            OnClick={onPurchase}
          />
        </div>
      </div>
    </>
  );
}
export default CartOverview;