import React, { useState, useEffect } from "react";
import Ticket from "../components/Ticket";
import TicketService from "../store/services/ticket.service";
import "../pages/pages.css";
import Seller from "../components/Seller";


const TicketPage = () => {

  const [ticket, setTicket] = useState([0]);
  
  useEffect(() => {
      TicketService.getAllTickets().then(
        (response) => {
          setTicket(response.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data) ||
            error.message ||
            error.toString();

            setTicket(_content);
        }
      );
    }, []);

  
  return (  
    <>
      <h1>Ticket View</h1>
      <div className="single-ticket-page">
        <div className="single-ticket">
          <Ticket 
            name={ticket[2].name}
            location={ticket[2].location}
            price={ticket[2].price}
            eventDate={ticket[2].eventDate}
            creationDate={ticket[2].creationDate}
            description={ticket[2].description}
            expirationDate={ticket[2].expirationDate}
          /> 
        </div>
        <div>
          <Seller 
            name={"Seller Name"}
          />
        </div>
      </div>
    </>
  );
}

export default TicketPage;
