import React from "react";
//import Home from "../components/Home";
import bgImg from "../images/backGround.png";
import Ticket from "../components/Ticket";
import "../pages/pages.css";
import Seller from "../components/Seller";

const TicketPage = () => {

  return (
    
    <><h1>Ticket View</h1>
    <div className="single-ticket-page">
      <div className="single-ticket">
      <Ticket 
        name="Event Name"
        location="Event Location"
        price="Event Price"
        eventDate="Event Date"
        creationDate="Event Creation Date"
        description="Event Description"
        expirationDate="Event Expiration Date"
      /> 
      </div>
      <div>
      <Seller />
      </div>
    </div>
    </>
  );
}

export default TicketPage;
