import React, { useState, useEffect } from "react";
import TicketService from "../../store/services/ticket.service";
import Ticket from "../Ticket";

const Home = () => {

  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
      TicketService.getAllTickets().then(
        (response) => {
          setTickets(response.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data) ||
            error.message ||
            error.toString();

            setTickets(_content);
        }
      );
    }, []);
  
  return (
    <>
       <div style={{textAlign:"center", margin:"10% 20%"}}>
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            name={ticket.name}
            location={ticket.location}
            price={ticket.price}
            eventDate={ticket.eventDate}
            creationDate={ticket.creationDate}
            description={ticket.description}
            expirationDate={ticket.expirationDate}
          />
        ))}
       </div>
       
      
    </>
  );
}

export default Home;
