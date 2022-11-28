import React, { useState, useEffect } from "react";
import Ticket from "../components/Ticket";
import TicketService from "../store/services/ticket.service";
import UserService from "../store/services/user.service";
import "../pages/pages.css";
import Seller from "../components/Seller";
import { Link, useParams } from "react-router-dom";


const TicketPage = () => {

  const { id } = useParams();
  const [ticket, setTicket] = useState([]);
  const [user, setUser] = useState([]);
  
  
  useEffect(() => {
    TicketService.getTicket(id)
      .then((response) => {
        setTicket(response.data);
      });
  }, []);
  
  useEffect(() => {
    UserService.getUser(ticket.userId)
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  
  return (  
    <>
      <h1 className="ticket-header">Single ticket View</h1>
      <div className="single-ticket-page">
        <div className="single-ticket">
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
          <Seller 
            sellerName={ticket.userId}
          />
          <Link to={"/cartOverview"}>
            <button 
              className="add-cart-btn"
              onClick={() => {
                localStorage.setItem("cartItem", JSON.stringify(ticket));
              }}
              >
                Add to Cart </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TicketPage;
