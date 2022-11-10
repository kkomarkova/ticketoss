import React from "react";
import EventImg from "../../images/eventImg.jpg";
import "./index.css";
import { useSelector } from "react-redux";

const Ticket = (props) => {
  
  const {ticket: ticket} = useSelector((state) => state.ticket);
  return (
    <>
       <div className="ticket-container">
          <div className="ticket-img-container">
            <h3 className="event-name event-text" value={"name"}> {props.name}</h3>
            <h3 className="event-location event-text" value={"location"}> {props.location}</h3>

            <img className="ticket-img" src={EventImg} alt="Background"/>

            <h3 className="event-price event-text" value={"price"}> {props.price}</h3>
            <h3 className="event-date event-text" value={"eventDate"}>{props.eventDate}</h3>
          </div>
          
          <div className="ticket-info-container">
            <h3 className="event-name event-text" value={"name"}> {props.name}</h3>
            <h3 className="event-creationDate event-text" value={"creationDate"}> {props.creationDate}</h3>
            <h3 className="event-description event-text" value={"description"}> {props.description}</h3>
            <h3 className="event-expirationDate event-text" value={"expirationDate"}> {props.expirationDate}</h3>
            <h3 className="event-location-info event-text" value={"location"}>{props.location}</h3>
          </div>
        </div>
    </>
  );
};

export default Ticket;

