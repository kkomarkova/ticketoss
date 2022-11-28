import React, { useEffect, useState } from "react";
import bgImg from "../images/bgIMG.jpg";
import "../pages/pages.css";
import { paginate, Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";
import Ticket from "../components/Ticket";
import TicketService from "../store/services/ticket.service";


const HomePage = () => {
  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    TicketService.getAllTickets().then((response) => {
      setTickets(response.data);
    });
    }, []);

  return (
  <>
    <div className="home-body">
      <img className="home-background-img" src={bgImg} alt="Background"/>
      <h1 >Browse all tickets</h1>
      <div className="filter-category">
      </div>
      <div className="home-ticket">
        {tickets.map((ticket) => (
          <Link to={`/tickets/${ticket.id}`}> 
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
          </Link>
        ))}
          <Pagination 
            itemsCount={10}
            pageSize={2}
            currentPage={1}
            onPageChange={page => console.log(page)}
          />
      </div>
    </div>
    </>
  );
}

export default HomePage;
