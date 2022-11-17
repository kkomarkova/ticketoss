import React from "react";
import EventImg from "../../images/eventImg.jpg";
import "./index.css";

const Ticket = (props) => {
  
  return (
    <>
       <div className="ticket-container">
          <div className="ticket-img-container">
            <h3 className="event-name event-text" value={"name"}> Tekst her</h3>
            <h3 className="event-location event-text" value={"location"}> Lokation her</h3>

            <img className="ticket-img" src={EventImg} alt="Background"/>

            <h3 className="event-price event-text" value={"price"}> 299,-</h3>
            <h3 className="event-date event-text" value={"eventDate"}>Date</h3>
          </div>
          
          <div className="ticket-info-container">
            <h3 className="event-name event-text" value={"name"}> Name here</h3>
            <h3 className="event-creationDate event-text" value={"creationDate"}> creationDate here</h3>
            <h3 className="event-description event-text" value={"description"}> description</h3>
            <h3 className="event-expirationDate event-text" value={"expirationDate"}> expirationDate</h3>
            <h3 className="event-location-info event-text" value={"location"}>location</h3>
          </div>
        </div>
    </>
  );
};

export default Ticket;

